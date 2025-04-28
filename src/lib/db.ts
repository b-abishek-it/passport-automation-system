import { User, PassportApplication } from "./types";
import { v4 as uuidv4 } from "uuid";

// Mock database using localStorage
class LocalStorageDB {
  private getItem<T>(key: string, defaultValue: T): T {
    const item = localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item) as T;
      } catch (e) {
        console.error("Error parsing data from localStorage:", e);
        return defaultValue;
      }
    }
    return defaultValue;
  }

  private setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // User methods
  getUsers(): User[] {
    return this.getItem<User[]>("users", []);
  }

  getUserById(id: string): User | undefined {
    return this.getUsers().find((user) => user.id === id);
  }

  getUserByUsername(username: string): User | undefined {
    return this.getUsers().find((user) => user.username === username);
  }

  getUserByEmail(email: string): User | undefined {
    return this.getUsers().find((user) => user.email === email);
  }

  createUser(user: Omit<User, "id">): User {
    const users = this.getUsers();
    const newUser = { ...user, id: uuidv4() };
    users.push(newUser);
    this.setItem("users", users);
    return newUser;
  }

  // Passport application methods
  getApplications(): PassportApplication[] {
    return this.getItem<PassportApplication[]>("applications", []);
  }

  getApplicationById(id: string): PassportApplication | undefined {
    return this.getApplications().find((app) => app.id === id);
  }

  getApplicationsByUserId(userId: string): PassportApplication[] {
    return this.getApplications().filter((app) => app.userId === userId);
  }

  createApplication(
    application: Omit<
      PassportApplication,
      | "id"
      | "status"
      | "policeVerified"
      | "officerVerified"
      | "createdAt"
      | "updatedAt"
    >
  ): PassportApplication {
    const applications = this.getApplications();
    const now = new Date().toISOString();

    const newApplication: PassportApplication = {
      ...application,
      id: uuidv4(),
      status: "pending",
      policeVerified: false,
      officerVerified: false,
      createdAt: now,
      updatedAt: now,
    };

    applications.push(newApplication);
    this.setItem("applications", applications);
    return newApplication;
  }

  updateApplication(
    id: string,
    updates: Partial<PassportApplication>
  ): PassportApplication | undefined {
    const applications = this.getApplications();
    const index = applications.findIndex((app) => app.id === id);

    if (index !== -1) {
      applications[index] = {
        ...applications[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };

      // Update status based on verification
      if (updates.policeVerified && updates.officerVerified) {
        applications[index].status = "dispatched";
      } else if (updates.policeVerified) {
        applications[index].status = "police_verified";
      }

      this.setItem("applications", applications);
      return applications[index];
    }

    return undefined;
  }

  // Initialize default users
  initDefaultUsers(): void {
    const users = this.getUsers();
    if (users.length === 0) {
      this.createUser({
        username: "police",
        password: "12345",
        email: "police@example.com",
        fullName: "Police Officer",
        role: "police",
      });

      this.createUser({
        username: "officer",
        password: "12345",
        email: "officer@example.com",
        fullName: "Passport Officer",
        role: "officer",
      });
    }
  }

  // Add method to check if application is fully verified
  isFullyVerified(applicationId: string): boolean {
    const application = this.getApplicationById(applicationId);
    return application
      ? application.policeVerified && application.officerVerified
      : false;
  }
}

// Create and export a single instance
const db = new LocalStorageDB();
export default db;
