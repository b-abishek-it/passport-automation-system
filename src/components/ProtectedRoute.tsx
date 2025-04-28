
import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '@/lib/auth';
import { toast } from '@/hooks/use-toast';

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: string[];
}

const ProtectedRoute = ({ children, roles = [] }: ProtectedRouteProps) => {
  const isAuthenticated = auth.isLoggedIn();
  const currentUser = auth.getCurrentUser();
  const location = useLocation();
  
  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "Please login to access this page.",
        variant: "destructive"
      });
    } else if (roles.length > 0 && currentUser && !roles.includes(currentUser.role)) {
      toast({
        title: "Access Denied",
        description: "You don't have permission to access this page.",
        variant: "destructive"
      });
    }
  }, [isAuthenticated, roles, currentUser]);
  
  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // Check if user has required role
  if (roles.length > 0 && currentUser && !roles.includes(currentUser.role)) {
    // Redirect to appropriate dashboard based on user role
    let redirectPath = '/';
    if (currentUser.role === 'user') redirectPath = '/user-dashboard';
    if (currentUser.role === 'police') redirectPath = '/police-dashboard';
    if (currentUser.role === 'officer') redirectPath = '/officer-dashboard';
    
    return <Navigate to={redirectPath} replace />;
  }
  
  return <>{children}</>;
};

export default ProtectedRoute;
