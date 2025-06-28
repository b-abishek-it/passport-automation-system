
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}>
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#1565c0' }}>
              Modern Passport <span style={{ color: '#1976d2' }}>Management System</span>
            </h1>
            <p className="text-lg mb-6 max-w-xl" style={{ color: '#424242' }}>
              A streamlined solution for secure passport application, verification,
              and digital passport management with enhanced security features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="gap-2" style={{ backgroundColor: '#1976d2', color: 'white' }}>
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" style={{ borderColor: '#1976d2', color: '#1976d2' }}>
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
      </div>
    </div>
  );
};

export default Index;
