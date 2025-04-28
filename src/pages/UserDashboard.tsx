
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { auth } from '@/lib/auth';
import { PassportApplication } from '@/lib/types';
import db from '@/lib/db';
import PassportApplicationForm from '@/components/PassportApplicationForm';
import ApplicationDetails from '@/components/ApplicationDetails';

const UserDashboard = () => {
  const [applications, setApplications] = useState<PassportApplication[]>([]);
  const currentUser = auth.getCurrentUser();
  
  useEffect(() => {
    if (currentUser) {
      const userApplications = db.getApplicationsByUserId(currentUser.id);
      setApplications(userApplications);
    }
  }, [currentUser]);
  
  const handleApplicationSubmit = (application: Omit<PassportApplication, 'id' | 'status' | 'policeVerified' | 'officerVerified' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newApplication = db.createApplication(application);
      setApplications([...applications, newApplication]);
      
      toast({
        title: "Application Submitted",
        description: "Your passport application has been successfully submitted"
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Failed to submit your application",
        variant: "destructive"
      });
      console.error("Application submission error:", error);
    }
  };
  
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      
      <Tabs defaultValue="apply">
        <TabsList className="mb-8">
          <TabsTrigger value="apply">Apply for Passport</TabsTrigger>
          <TabsTrigger value="status">Check Status</TabsTrigger>
        </TabsList>
        
        <TabsContent value="apply">
          <Card>
            <CardHeader>
              <CardTitle>Passport Application</CardTitle>
              <CardDescription>
                Fill out the form below to apply for a new passport
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PassportApplicationForm onSubmit={handleApplicationSubmit} />
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="status">
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
              <CardDescription>
                View the status of your passport applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              {applications.length > 0 ? (
                <div className="space-y-6">
                  {applications.map((application) => (
                    <ApplicationDetails
                      key={application.id}
                      application={application}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">
                    You haven't submitted any passport applications yet.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserDashboard;
