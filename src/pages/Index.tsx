
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)' }}>
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-20">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#1e40af' }}>
              Modern Passport <span style={{ color: '#2563eb' }}>Management System</span>
            </h1>
            <p className="text-lg mb-6 max-w-xl" style={{ color: '#475569' }}>
              A streamlined solution for secure passport application, verification,
              and digital passport management with enhanced security features.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button size="lg" className="gap-2" style={{ backgroundColor: '#2563eb', color: 'white' }}>
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" style={{ borderColor: '#2563eb', color: '#2563eb' }}>
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
              style={{ filter: 'hue-rotate(210deg) saturate(1.1)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
