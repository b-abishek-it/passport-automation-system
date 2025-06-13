
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
import { Shield, FileCheck, User, ArrowRight, UserCheck, ShieldCheck, FileSearch } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f0efff 0%, #e6e3ff 100%)' }}>
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#6A5ACD' }}>
              Modern Passport <span className="text-primary">Management System</span>
            </h1>
            <p className="text-lg mb-6 max-w-xl" style={{ color: 'rgba(106, 90, 205, 0.7)' }}>
              A streamlined solution for secure passport application, verification,
              and digital passport management with enhanced security features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="gap-2" style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" style={{ borderColor: '#6A5ACD', color: '#6A5ACD' }}>
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

        {/* Access Your Portal Section - New Design */}
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-10" style={{ backgroundColor: '#6A5ACD' }}></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: '#6A5ACD' }}></div>
          </div>
          
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border" style={{ borderColor: 'rgba(106, 90, 205, 0.2)' }}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#6A5ACD' }}>
                Access Your Portal
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(106, 90, 205, 0.7)' }}>
                Choose your role to access the appropriate dashboard and manage your passport services
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Applicant Portal */}
              <Card className="group relative overflow-hidden border-2 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl" style={{ borderColor: 'rgba(106, 90, 205, 0.3)' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(106, 90, 205, 0.05) 0%, rgba(106, 90, 205, 0.1) 100%)' }}></div>
                
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full blur-lg opacity-30" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <div className="relative rounded-full h-20 w-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(106, 90, 205, 0.1)' }}>
                        <UserCheck className="h-10 w-10" style={{ color: '#6A5ACD' }} />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold" style={{ color: '#6A5ACD' }}>Applicant Portal</CardTitle>
                  <CardDescription style={{ color: 'rgba(106, 90, 205, 0.7)' }}>
                    Apply for and manage your passport applications
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 px-6">
                  <div className="space-y-3 text-sm" style={{ color: 'rgba(106, 90, 205, 0.8)' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Submit new applications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Track application status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Download e-passport</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="relative z-10 pt-6">
                  <div className="w-full space-y-3">
                    <Link to="/register" className="w-full">
                      <Button className="w-full font-semibold" style={{ backgroundColor: '#6A5ACD', color: 'white' }}>
                        Register Now
                      </Button>
                    </Link>
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full" style={{ borderColor: '#6A5ACD', color: '#6A5ACD' }}>
                        Login
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>

              {/* Police Portal */}
              <Card className="group relative overflow-hidden border-2 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl" style={{ borderColor: 'rgba(106, 90, 205, 0.3)' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(106, 90, 205, 0.05) 0%, rgba(106, 90, 205, 0.1) 100%)' }}></div>
                
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full blur-lg opacity-30" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <div className="relative rounded-full h-20 w-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(106, 90, 205, 0.1)' }}>
                        <ShieldCheck className="h-10 w-10" style={{ color: '#6A5ACD' }} />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold" style={{ color: '#6A5ACD' }}>Police Portal</CardTitle>
                  <CardDescription style={{ color: 'rgba(106, 90, 205, 0.7)' }}>
                    For police verification officers
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 px-6">
                  <div className="space-y-3 text-sm" style={{ color: 'rgba(106, 90, 205, 0.8)' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Verify applicant details</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Conduct address verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Approve applications</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="relative z-10 pt-6">
                  <Link to="/login" className="w-full">
                    <Button className="w-full font-semibold" style={{ backgroundColor: 'rgba(106, 90, 205, 0.9)', color: 'white' }}>
                      Police Login
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Officer Portal */}
              <Card className="group relative overflow-hidden border-2 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl" style={{ borderColor: 'rgba(106, 90, 205, 0.3)' }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(106, 90, 205, 0.05) 0%, rgba(106, 90, 205, 0.1) 100%)' }}></div>
                
                <CardHeader className="relative z-10 text-center pb-4">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full blur-lg opacity-30" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <div className="relative rounded-full h-20 w-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(106, 90, 205, 0.1)' }}>
                        <FileSearch className="h-10 w-10" style={{ color: '#6A5ACD' }} />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold" style={{ color: '#6A5ACD' }}>Passport Officer Portal</CardTitle>
                  <CardDescription style={{ color: 'rgba(106, 90, 205, 0.7)' }}>
                    For passport issuing authorities
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 px-6">
                  <div className="space-y-3 text-sm" style={{ color: 'rgba(106, 90, 205, 0.8)' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Review applications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Verify documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#6A5ACD' }}></div>
                      <span>Issue passports</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="relative z-10 pt-6">
                  <Link to="/login" className="w-full">
                    <Button className="w-full font-semibold" style={{ backgroundColor: 'rgba(106, 90, 205, 0.9)', color: 'white' }}>
                      Officer Login
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
