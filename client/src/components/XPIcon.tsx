import React from 'react';

interface XPIconProps {
  type: 'mail' | 'phone' | 'github' | 'linkedin' | 'user' | 'folder' | 'send' | 'contact' | 'aboutMe' | 'experience' | 'projects' | 'skills' | 'location';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const XPIcon: React.FC<XPIconProps> = ({ type, size = 'medium', className = '' }) => {
  const iconMap = {
    mail: { emoji: '📧', iconPath: '/assets/icons/mail.png', bgColor: 'bg-red-500' },
    phone: { emoji: '📱', iconPath: '/assets/icons/phone.png', bgColor: 'bg-green-500' },
    github: { emoji: '🐙', iconPath: '/assets/icons/location.png', bgColor: 'bg-gray-800' },
    linkedin: { emoji: '💼', iconPath: '/assets/icons/location.png', bgColor: 'bg-blue-700' },
    user: { emoji: '👤', iconPath: '/assets/icons/aboutMe.png', bgColor: 'bg-blue-500' },
    folder: { emoji: '📁', iconPath: '/assets/icons/projects.png', bgColor: 'bg-yellow-600' },
    send: { emoji: '✉', iconPath: '/assets/icons/mail.png', bgColor: 'bg-green-600' },
    contact: { emoji: '📞', iconPath: '/assets/icons/contact.png', bgColor: 'bg-blue-600' },
    aboutMe: { emoji: '👤', iconPath: '/assets/icons/aboutMe.png', bgColor: 'bg-blue-500' },
    experience: { emoji: '💼', iconPath: '/assets/icons/experience.png', bgColor: 'bg-green-500' },
    projects: { emoji: '📁', iconPath: '/assets/icons/projects.png', bgColor: 'bg-purple-500' },
    skills: { emoji: '🔧', iconPath: '/assets/icons/skills.png', bgColor: 'bg-orange-500' },
    location: { emoji: '📍', iconPath: '/assets/icons/location.png', bgColor: 'bg-gray-600' },
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
