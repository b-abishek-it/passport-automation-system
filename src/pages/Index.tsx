
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, FileCheck, User, Users, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen passport-gradient">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 leading-tight">
              Modern Passport <span className="text-primary">Management System</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-xl">
              A streamlined solution for secure passport application, verification,
              and digital passport management with enhanced security features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 max-w-md">
            <img
              src="/Pic.jpg"
              alt="Passport"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-secondary">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="step-circle">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Submit Application</h3>
              <p className="text-gray-600">
                Register and fill out the digital passport application form with your 
                personal details and required documentation
              </p>
            </div>

            <div className="text-center">
              <div className="step-circle">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Official Verification</h3>
              <p className="text-gray-600">
                Police verify your address and background while passport officers
                validate your application and supporting documents
              </p>
            </div>

            <div className="text-center">
              <div className="step-circle">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-medium mb-3">Receive Your Passport</h3>
              <p className="text-gray-600">
                Once approved, download your electronic passport instantly and track 
                physical passport delivery status
              </p>
            </div>
          </div>
        </div>

        {/* User Types Section */}
        <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Access Your Portal</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="auth-card border-t-4 border-t-blue-400">
            <CardHeader className="pb-3">
              <div className="mb-2 flex justify-center">
                <User className="h-10 w-10 text-blue-500" />
              </div>
              <CardTitle className="text-center">Applicant Portal</CardTitle>
              <CardDescription className="text-center">
                Apply for and manage your passport applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Submit new applications, track existing applications, upload required documents,
                and download your e-passport once approved.
              </p>
            </CardContent>
            <CardFooter>
              <div className="w-full space-y-3">
                <Link to="/register" className="w-full">
                  <Button className="w-full">Register Now</Button>
                </Link>
                <Link to="/login" className="w-full">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>

          <Card className="auth-card border-t-4 border-t-indigo-400">
            <CardHeader className="pb-3">
              <div className="mb-2 flex justify-center">
                <Shield className="h-10 w-10 text-indigo-500" />
              </div>
              <CardTitle className="text-center">Police Portal</CardTitle>
              <CardDescription className="text-center">
                For police verification officers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Access and verify applicant details, conduct address verification,
                approve or request additional information from applicants.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/login" className="w-full">
                <Button className="w-full" variant="secondary">
                  Police Login
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="auth-card border-t-4 border-t-green-400">
            <CardHeader className="pb-3">
              <div className="mb-2 flex justify-center">
                <FileCheck className="h-10 w-10 text-green-500" />
              </div>
              <CardTitle className="text-center">Passport Officer Portal</CardTitle>
              <CardDescription className="text-center">
                For passport issuing authorities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Review applications, verify submitted documents, manage passport
                issuance, and handle passport queries.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/login" className="w-full">
                <Button className="w-full" variant="secondary">
                  Officer Login
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Features Section */}
        <div className="bg-secondary/5 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="feature-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Digital Verification</h3>
                <p className="text-gray-600">
                  Secure document verification process with multi-level checks
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Real-time Tracking</h3>
                <p className="text-gray-600">
                  Monitor your application status at every step of the process
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">Secure Document Storage</h3>
                <p className="text-gray-600">
                  Encrypted storage for all your sensitive documents and information
                </p>
              </CardContent>
            </Card>
            <Card className="feature-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">E-Passport Support</h3>
                <p className="text-gray-600">
                  Download electronic passports immediately upon approval
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
