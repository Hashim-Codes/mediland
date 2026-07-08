import React from 'react';
import { 
  Users, CheckCircle2, Activity, Shield, Stethoscope, Pill, Microscope, HeartPulse, Clipboard, BriefcaseMedical,
  Wind, Ear, Brain, User, Scissors, Baby, Bandage, Ambulance
} from 'lucide-react';

interface IconResolverProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export function IconResolver({ name, className, style }: IconResolverProps) {
  const Icon = (() => {
    switch (name.toLowerCase()) {
      case 'users': return Users;
      case 'check-circle': return CheckCircle2;
      case 'activity': return Activity;
      case 'shield': return Shield;
      case 'stethoscope': return Stethoscope;
      case 'pill': return Pill;
      case 'microscope': return Microscope;
      case 'heart-pulse': return HeartPulse;
      case 'clipboard': return Clipboard;
      case 'briefcase-medical': return BriefcaseMedical;
      case 'wind': return Wind;
      case 'ear': return Ear;
      case 'brain': return Brain;
      case 'user': return User;
      case 'scissors': return Scissors;
      case 'baby': return Baby;
      case 'band-aid': return Bandage; // lucide has Bandage, not BandAid
      case 'ambulance': return Ambulance;
      default: return Shield; // Fallback
    }
  })();

  return <Icon className={className} style={style} />;
}

