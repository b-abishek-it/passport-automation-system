
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { PassportApplication } from '@/lib/types';
import db from '@/lib/db';
import ApplicationDetails from '@/components/ApplicationDetails';
import { Input } from '@/components/ui/input';

const PoliceDashboard = () => {
  const [applications, setApplications] = useState<PassportApplication[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    // Load all applications
    const allApplications = db.getApplications();
    setApplications(allApplications);
  }, []);
  
  const handleVerify = (id: string, type: 'police' | 'officer') => {
    try {
      if (type === 'police') {
        const updatedApplication = db.updateApplication(id, { policeVerified: true });
        
        if (updatedApplication) {
          setApplications(prevApplications =>
            prevApplications.map(app => 
              app.id === id ? updatedApplication : app
            )
          );
          
          toast({
            title: "Application Verified",
            description: "The passport application has been verified by police"
          });
        }
      }
    } catch (error) {
      toast({
        title: "Verification Error",
        description: "Failed to verify the application",
        variant: "destructive"
      });
      console.error("Application verification error:", error);
    }
  };
  
  const filteredApplications = applications.filter(app => 
    app.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.id.includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Police Dashboard</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Passport Applications</CardTitle>
          <CardDescription>
            Verify applicant information for passport applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <Input
              placeholder="Search by name or application ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
          
          {filteredApplications.length > 0 ? (
            <div className="space-y-6">
              {filteredApplications.map((application) => (
                <ApplicationDetails
                  key={application.id}
                  application={application}
                  showActions={true}
                  onVerify={handleVerify}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">
                {searchTerm ? "No matching applications found." : "No passport applications available."}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PoliceDashboard;
