
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen passport-gradient">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-passport-blue mb-4">
            Passport Automation System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern solution for seamless passport application, verification, and management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className="auth-card">
            <CardHeader>
              <CardTitle>User Registration</CardTitle>
              <CardDescription>
                Create a new account to apply for a passport
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Register as a new user to submit passport applications and track their status.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/register" className="w-full">
                <Button className="w-full">Register Now</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="auth-card">
            <CardHeader>
              <CardTitle>User Login</CardTitle>
              <CardDescription>
                Access your account to manage applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Log in with your username and password to check application status or apply for a passport.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/login" className="w-full">
                <Button className="w-full" variant="outline">Login</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="auth-card">
            <CardHeader>
              <CardTitle>Official Login</CardTitle>
              <CardDescription>
                For police and passport officers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Login credentials for officials:<br />
                <span className="font-medium">Police:</span> username: police, password: 12345<br />
                <span className="font-medium">Officer:</span> username: officer, password: 12345
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/login" className="w-full">
                <Button className="w-full" variant="secondary">Official Login</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-medium mb-2">Submit Application</h3>
              <p className="text-sm text-gray-600">
                Register and fill out the passport application form with your personal details
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-medium mb-2">Verification</h3>
              <p className="text-sm text-gray-600">
                Police and passport officers verify your information and approve your application
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-medium mb-2">Get Your Passport</h3>
              <p className="text-sm text-gray-600">
                Once approved, download your electronic passport instantly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
