
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { User } from "@/lib/types";
import { Home, User as UserIcon, Shield, FileCheck, LogOut, Menu, X } from "lucide-react";

const Header = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Update header when auth state changes
    setCurrentUser(auth.getCurrentUser());

    // Check auth status on component mount
    const checkAuthStatus = () => {
      setCurrentUser(auth.getCurrentUser());
    };

    window.addEventListener("storage", checkAuthStatus);
    return () => {
      window.removeEventListener("storage", checkAuthStatus);
    };
  }, []);

  const handleLogout = () => {
    auth.logout();
    setCurrentUser(null);
    navigate("/");
  };

  const getDashboardLink = () => {
    if (!currentUser) return "/";

    switch (currentUser.role) {
      case "user":
        return "/user-dashboard";
      case "police":
        return "/police-dashboard";
      case "officer":
        return "/officer-dashboard";
      default:
        return "/";
    }
  };

  const getRoleIcon = () => {
    if (!currentUser) return null;

    switch (currentUser.role) {
      case "user":
        return <UserIcon className="h-4 w-4" />;
      case "police":
        return <Shield className="h-4 w-4" />;
      case "officer":
        return <FileCheck className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
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
            <span className="font-bold text-xl">Passport Automation System</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-gray-600"
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            {currentUser && (
              <Link
                to={getDashboardLink()}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.includes("dashboard") ? "text-primary" : "text-gray-600"
                }`}
              >
                {getRoleIcon()}
                <span>Dashboard</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Desktop Auth Actions */}
        <nav className="hidden md:flex items-center gap-6">
          {currentUser ? (
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium flex items-center gap-1">
                {getRoleIcon()}
                <span>{currentUser.fullName}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center gap-1">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Register</Button>
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-4 space-y-4">
            <Link
              to="/"
              className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
                location.pathname === "/" ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span className="font-medium">Home</span>
            </Link>
            
            {currentUser && (
              <Link
                to={getDashboardLink()}
                className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${
                  location.pathname.includes("dashboard") ? "bg-primary/10 text-primary" : "hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {getRoleIcon()}
                <span className="font-medium">Dashboard</span>
              </Link>
            )}
            
            {currentUser ? (
              <div className="border-t pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">
                    Signed in as <span className="text-primary">{currentUser.fullName}</span>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center gap-1">
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div className="border-t pt-4 mt-4 flex flex-col gap-3">
                <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/register" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Register</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
