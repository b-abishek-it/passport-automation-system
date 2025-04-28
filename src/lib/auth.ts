
import { User } from './types';
import db from './db';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Auth management
export const auth = {
  state: {
    user: null,
    isAuthenticated: false
  } as AuthState,

  init(): void {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      try {
        this.state.user = JSON.parse(savedUser);
        this.state.isAuthenticated = true;
      } catch (e) {
        console.error('Error parsing user from localStorage:', e);
        this.logout();
      }
    }
    
    // Initialize default users (police and officer)
    db.initDefaultUsers();
  },

  login(username: string, password: string): boolean {
    const user = db.getUserByUsername(username);
    
    if (user && user.password === password) {
      this.state.user = user;
      this.state.isAuthenticated = true;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    
    return false;
  },

  register(userData: Omit<User, 'id' | 'role'>): User | null {
    // Check if username or email already exists
    const existingUsername = db.getUserByUsername(userData.username);
    const existingEmail = db.getUserByEmail(userData.email);
    
    if (existingUsername || existingEmail) {
      return null; // Username or email already taken
    }
    
    // Create new user with 'user' role
    const newUser = db.createUser({
      ...userData,
      role: 'user'
    });
    
    return newUser;
  },

  logout(): void {
    this.state.user = null;
    this.state.isAuthenticated = false;
    localStorage.removeItem('currentUser');
  },

  getCurrentUser(): User | null {
    return this.state.user;
  },

  isLoggedIn(): boolean {
    return this.state.isAuthenticated;
  },

  hasRole(role: string): boolean {
    return this.state.user?.role === role;
  }
};

// Initialize auth on load
auth.init();
