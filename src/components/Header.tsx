
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/auth';
import { User } from '@/lib/types';

const Header = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Update header when auth state changes
    setCurrentUser(auth.getCurrentUser());
    
    // Check auth status on component mount
    const checkAuthStatus = () => {
      setCurrentUser(auth.getCurrentUser());
    };
    
    window.addEventListener('storage', checkAuthStatus);
    return () => {
      window.removeEventListener('storage', checkAuthStatus);
    };
  }, []);
  
  const handleLogout = () => {
    auth.logout();
    setCurrentUser(null);
    navigate('/');
  };
  
  const getDashboardLink = () => {
    if (!currentUser) return '/';
    
    switch (currentUser.role) {
      case 'user':
        return '/user-dashboard';
      case 'police':
        return '/police-dashboard';
      case 'officer':
        return '/officer-dashboard';
      default:
        return '/';
    }
  };
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="M9 3v18" />
              <path d="m16 15-3-3 3-3" />
            </svg>
            <span className="font-bold text-xl">PassportEase</span>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          {currentUser ? (
            <>
              <Link to={getDashboardLink()} className="text-sm font-medium hover:underline">
                Dashboard
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">
                  {currentUser.fullName} ({currentUser.role})
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Register</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
