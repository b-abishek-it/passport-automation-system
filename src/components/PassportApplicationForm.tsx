
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { PassportApplication } from '@/lib/types';
import { fileToBase64 } from '@/lib/utils';
import { auth } from '@/lib/auth';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';

interface PassportApplicationFormProps {
  onSubmit: (application: Omit<PassportApplication, 'id' | 'status' | 'policeVerified' | 'officerVerified' | 'createdAt' | 'updatedAt'>) => void;
}

const PassportApplicationForm = ({ onSubmit }: PassportApplicationFormProps) => {
  const currentUser = auth.getCurrentUser();
  
  const [formData, setFormData] = useState({
    fullName: currentUser?.fullName || '',
    fatherName: '',
    motherName: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    nationality: 'Indian',
    email: currentUser?.email || '',
    phoneNumber: '',
    currentAddress: '',
    permanentAddress: '',
    aadharNumber: '',
    panNumber: '',
    educationalQualification: '',
    policeStation: ''
  });
  
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [signatureFile, setSignatureFile] = useState<File | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPhotoFile(e.target.files[0]);
    }
  };
  
  const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSignatureFile(e.target.files[0]);
    }
  };
  
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setFormData({
        ...formData,
        dob: format(date, 'yyyy-MM-dd')
      });
    }
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    const requiredFields = [
      'fullName', 'fatherName', 'motherName', 'dob', 'gender',
      'maritalStatus', 'nationality', 'email', 'phoneNumber',
      'currentAddress', 'permanentAddress', 'aadharNumber',
      'panNumber', 'educationalQualification', 'policeStation'
    ];
    
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Validation Error",
        description: `Please fill all required fields: ${missingFields.join(', ')}`,
        variant: "destructive"
      });
      return;
    }
    
    if (!photoFile || !signatureFile) {
      toast({
        title: "Validation Error",
        description: "Please upload both photo and signature files",
        variant: "destructive"
      });
      return;
    }
    
    if (!currentUser?.id) {
      toast({
        title: "Authentication Error",
        description: "You must be logged in to submit an application",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Convert files to base64
      const photoBase64 = await fileToBase64(photoFile);
      const signatureBase64 = await fileToBase64(signatureFile);
      
      // Submit application
      onSubmit({
        ...formData,
        userId: currentUser.id,
        photoUrl: photoBase64,
        signatureUrl: signatureBase64
      });
      
      // Reset form
      setFormData({
        fullName: currentUser.fullName || '',
        fatherName: '',
        motherName: '',
        dob: '',
        gender: '',
        maritalStatus: '',
        nationality: 'Indian',
        email: currentUser.email || '',
        phoneNumber: '',
        currentAddress: '',
        permanentAddress: '',
        aadharNumber: '',
        panNumber: '',
        educationalQualification: '',
        policeStation: ''
      });
      setPhotoFile(null);
      setSignatureFile(null);
      setSelectedDate(undefined);
      
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while submitting your application",
        variant: "destructive"
      });
      console.error("Application submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="fatherName">Father's Name</Label>
            <Input
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="motherName">Mother's Name</Label>
            <Input
              id="motherName"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label>Date of Birth</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !selectedDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Select date of birth"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formData.gender}
              onValueChange={(value) => handleSelectChange('gender', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="maritalStatus">Marital Status</Label>
            <Select
              value={formData.maritalStatus}
              onValueChange={(value) => handleSelectChange('maritalStatus', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select marital status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Single">Single</SelectItem>
                <SelectItem value="Married">Married</SelectItem>
                <SelectItem value="Divorced">Divorced</SelectItem>
                <SelectItem value="Widowed">Widowed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="nationality">Nationality</Label>
            <Input
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        {/* Contact & Address */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Contact & Address</h2>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="currentAddress">Current Address</Label>
            <Textarea
              id="currentAddress"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="permanentAddress">Permanent Address</Label>
            <Textarea
              id="permanentAddress"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Identification */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Identification</h2>
          
          <div>
            <Label htmlFor="aadharNumber">Aadhar Number</Label>
            <Input
              id="aadharNumber"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="panNumber">PAN Number</Label>
            <Input
              id="panNumber"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="educationalQualification">Educational Qualification</Label>
            <Select
              value={formData.educationalQualification}
              onValueChange={(value) => handleSelectChange('educationalQualification', value)}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select qualification" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="High School">High School</SelectItem>
                <SelectItem value="Undergraduate">Undergraduate</SelectItem>
                <SelectItem value="Graduate">Graduate</SelectItem>
                <SelectItem value="Post Graduate">Post Graduate</SelectItem>
                <SelectItem value="Doctorate">Doctorate</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="policeStation">Police Station</Label>
            <Input
              id="policeStation"
              name="policeStation"
              value={formData.policeStation}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        {/* Documents */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Documents</h2>
          
          <div>
            <Label htmlFor="photo">Photo</Label>
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Upload a recent passport-sized photo
            </p>
          </div>
          
          <div>
            <Label htmlFor="signature">Signature</Label>
            <Input
              id="signature"
              type="file"
              accept="image/*"
              onChange={handleSignatureChange}
              required
            />
            <p className="text-xs text-muted-foreground mt-1">
              Upload a clear image of your signature
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
};

export default PassportApplicationForm;
