
import { Badge } from '@/components/ui/badge';
import { PassportApplication } from '@/lib/types';
import { CheckCircle2, Clock, Send } from 'lucide-react';

interface ApplicationStatusBadgeProps {
  application: PassportApplication;
  size?: 'default' | 'lg';
}

const ApplicationStatusBadge = ({ application, size = 'default' }: ApplicationStatusBadgeProps) => {
  const getStatusProps = () => {
    switch (application.status) {
      case 'pending':
        return {
          variant: 'outline' as const,
          text: 'Pending',
          icon: <Clock className={size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
        };
      case 'police_verified':
        return {
          variant: 'secondary' as const,
          text: 'Police Verified',
          icon: <CheckCircle2 className={size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
        };
      case 'dispatched':
        return {
          variant: 'default' as const,
          text: 'Dispatched',
          icon: <Send className={size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
        };
      default:
        return {
          variant: 'outline' as const,
          text: 'Unknown Status',
          icon: <Clock className={size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
        };
    }
  };
  
  const { variant, text, icon } = getStatusProps();
  
  return (
    <Badge 
      variant={variant} 
      className={`flex items-center gap-1.5 ${size === 'lg' ? 'text-sm py-1 px-3' : ''}`}
    >
      {icon}
      <span>{text}</span>
    </Badge>
  );
};

export default ApplicationStatusBadge;
