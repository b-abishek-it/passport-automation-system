
// Mock database types
export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  fullName: string;
  role: 'user' | 'police' | 'officer';
}

export interface PassportApplication {
  id: string;
  userId: string;
  fullName: string;
  fatherName: string;
  motherName: string;
  dob: string;
  gender: string;
  maritalStatus: string;
  nationality: string;
  email: string;
  phoneNumber: string;
  currentAddress: string;
  permanentAddress: string;
  aadharNumber: string;
  panNumber: string;
  educationalQualification: string;
  policeStation: string;
  photoUrl: string;
  signatureUrl: string;
  aadharUrl: string;
  panUrl: string;
  educationUrl: string;
  status: 'pending' | 'police_verified' | 'dispatched';
  policeVerified: boolean;
  officerVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
