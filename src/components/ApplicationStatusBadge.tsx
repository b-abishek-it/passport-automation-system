
import { Badge } from '@/components/ui/badge';
import { PassportApplication } from '@/lib/types';

interface ApplicationStatusBadgeProps {
  application: PassportApplication;
}

const ApplicationStatusBadge = ({ application }: ApplicationStatusBadgeProps) => {
  const getStatusProps = () => {
    switch (application.status) {
      case 'pending':
        return {
          variant: 'outline' as const,
          text: 'Pending'
        };
      case 'police_verified':
        return {
          variant: 'secondary' as const,
          text: 'Police Verified'
        };
      case 'dispatched':
        return {
          variant: 'default' as const,
          text: 'Dispatched'
        };
      default:
        return {
          variant: 'outline' as const,
          text: 'Unknown Status'
        };
    }
  };
  
  const { variant, text } = getStatusProps();
  
  return (
    <Badge variant={variant}>{text}</Badge>
  );
};

export default ApplicationStatusBadge;
