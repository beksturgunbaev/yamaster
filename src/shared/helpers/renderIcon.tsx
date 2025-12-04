import React from 'react';
import {
  Wrench,
  Droplets,
  Bath,
  Waves,
  FlaskConical as Pipe,
  Flame,
  Gauge,
  Filter,
  Settings,
  ShowerHead as Shower,
  Thermometer,
  Shield,
} from 'lucide-react';
import { IService } from '../types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench,
  Droplets,
  Bath,
  Waves,
  Pipe,
  Flame,
  Gauge,
  Filter,
  Settings,
  Shower,
  Thermometer,
  Shield,
};

export function renderIcon(icon: IService['icon'], className = '') {
  if (!icon) return null;

  if (typeof icon === 'string') {
    // Check if it's a lucide icon name
    const IconComponent = iconMap[icon];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }

    // Otherwise treat as emoji or text
    return (
      <span aria-hidden className={`text-2xl md:text-3xl ${className}`}>
        {icon}
      </span>
    );
  }

  if (React.isValidElement(icon)) {
    return <span className={className}>{icon}</span>;
  }

  const IconComp = icon as React.ElementType;
  try {
    return (
      <span className={className}>
        <IconComp size={24} />
      </span>
    );
  } catch {
    return null;
  }
}
