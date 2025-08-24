import React from 'react';
import { IService } from '../types';

export function renderIcon(icon: IService['icon'], className = '') {
  if (!icon) return null;
  if (typeof icon === 'string') {
    // emoji or string
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
