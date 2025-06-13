
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
import { Shield, FileCheck, User, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen passport-gradient">
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-passport-blue mb-4 leading-tight">
              Modern Passport <span className="text-primary">Management System</span>
            </h1>
            <p className="text-lg text-passport-blue/70 mb-6 max-w-xl">
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

        {/* User Types Section - Updated Styling */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
          <h2 className="text-3xl font-bold mb-8 text-center text-passport-blue">Access Your Portal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-300 border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="pb-3 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-passport-blue">Applicant Portal</CardTitle>
                <CardDescription className="text-passport-blue/70">
                  Apply for and manage your passport applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-passport-blue/70 text-center">
                  Submit new applications, track existing applications, upload required documents,
                  and download your e-passport once approved.
                </p>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-3">
                  <Link to="/register" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary/90">Register Now</Button>
                  </Link>
                  <Link to="/login" className="w-full">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">Login</Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="pb-3 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-passport-blue">Police Portal</CardTitle>
                <CardDescription className="text-passport-blue/70">
                  For police verification officers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-passport-blue/70 text-center">
                  Access and verify applicant details, conduct address verification,
                  approve or request additional information from applicants.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/login" className="w-full">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Police Login
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-300 border-2 border-primary/20 hover:border-primary shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-primary/5">
              <CardHeader className="pb-3 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FileCheck className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-passport-blue">Passport Officer Portal</CardTitle>
                <CardDescription className="text-passport-blue/70">
                  For passport issuing authorities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-passport-blue/70 text-center">
                  Review applications, verify submitted documents, manage passport
                  issuance, and handle passport queries.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/login" className="w-full">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Officer Login
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
