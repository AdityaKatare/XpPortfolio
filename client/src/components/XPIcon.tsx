import React from 'react';

// Import all icons
import aboutMeIcon from '/assets/icons/aboutMe.png';
import contactIcon from '/assets/icons/contact.png';
import experienceIcon from '/assets/icons/experience.png';
import locationIcon from '/assets/icons/location.png';
import mailIcon from '/assets/icons/mail.png';
import phoneIcon from '/assets/icons/phone.png';
import projectsIcon from '/assets/icons/projects.png';
import skillsIcon from '/assets/icons/skills.png';

interface XPIconProps {
  type: 'mail' | 'phone' | 'github' | 'linkedin' | 'user' | 'folder' | 'send' | 'contact' | 'aboutMe' | 'experience' | 'projects' | 'skills' | 'location';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const XPIcon: React.FC<XPIconProps> = ({ type, size = 'medium', className = '' }) => {
  const iconMap = {
    mail: { emoji: '📧', iconPath: mailIcon, bgColor: 'bg-red-500' },
    phone: { emoji: '📱', iconPath: phoneIcon, bgColor: 'bg-green-500' },
    github: { emoji: '🐙', iconPath: locationIcon, bgColor: 'bg-gray-800' },
    linkedin: { emoji: '💼', iconPath: locationIcon, bgColor: 'bg-blue-700' },
    user: { emoji: '👤', iconPath: aboutMeIcon, bgColor: 'bg-blue-500' },
    folder: { emoji: '📁', iconPath: projectsIcon, bgColor: 'bg-yellow-600' },
    send: { emoji: '✉', iconPath: mailIcon, bgColor: 'bg-green-600' },
    contact: { emoji: '📞', iconPath: contactIcon, bgColor: 'bg-blue-600' },
    aboutMe: { emoji: '👤', iconPath: aboutMeIcon, bgColor: 'bg-blue-500' },
    experience: { emoji: '💼', iconPath: experienceIcon, bgColor: 'bg-green-500' },
    projects: { emoji: '📁', iconPath: projectsIcon, bgColor: 'bg-purple-500' },
    skills: { emoji: '🔧', iconPath: skillsIcon, bgColor: 'bg-orange-500' },
    location: { emoji: '📍', iconPath: locationIcon, bgColor: 'bg-gray-600' },
  };

  const sizeClasses = {
    small: 'w-4 h-4 text-xs',
    medium: 'w-6 h-6 text-sm',
    large: 'w-8 h-8 text-base',
  };

  const icon = iconMap[type];
  const sizeClass = sizeClasses[size];

  // Enable images for all icons we have physical files for
  const useImage = ['mail', 'phone', 'contact', 'send', 'aboutMe', 'experience', 'projects', 'skills', 'location'].includes(type);

  if (useImage) {
    return (
      <img 
        src={icon.iconPath} 
        alt={type} 
        className={`${sizeClass} ${className}`}
        style={{ imageRendering: 'pixelated' }} // For authentic pixelated look
      />
    );
  }

  // Fallback to styled emoji containers that look more XP-like
  return (
    <span className={`${sizeClass} ${icon.bgColor} rounded-sm flex items-center justify-center text-white font-bold border border-gray-400 shadow-sm ${className}`}>
      {icon.emoji}
    </span>
  );
};

export default XPIcon;
