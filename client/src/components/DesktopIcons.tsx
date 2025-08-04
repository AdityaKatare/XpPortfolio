import { useWindowStore } from '../store/windowStore';
import { useIsMobile } from '../hooks/useIsMobile';
import XPIcon from './XPIcon';

const DesktopIcons = () => {
  const { openWindow } = useWindowStore();
  const isMobile = useIsMobile();

  const icons = [
    { id: 'about', title: 'About Me', iconType: 'aboutMe' as const },
    { id: 'experience', title: 'Experience', iconType: 'experience' as const },
    { id: 'projects', title: 'Projects', iconType: 'projects' as const },
    { id: 'skills', title: 'Skills', iconType: 'skills' as const },
    { id: 'contact', title: 'Contact', iconType: 'contact' as const },
  ];

  const handleClick = (windowType: string, e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Click detected on:', windowType);
    openWindow(windowType);
  };

  // Mobile layout: horizontal scrollable icons at bottom
  if (isMobile) {
    return (
      <div className="fixed bottom-16 left-0 right-0 z-10 px-4">
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {icons.map((icon) => (
            <div
              key={icon.id}
              onClick={(e) => handleClick(icon.id, e)}
              className="desktop-icon flex flex-col items-center p-3 rounded text-white cursor-pointer select-none flex-shrink-0"
              style={{ zIndex: 100, minWidth: '80px' }}
            >
              <div className="mb-2">
                <XPIcon type={icon.iconType} size="large" />
              </div>
              <div className="text-xs text-center font-sans whitespace-nowrap">{icon.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop layout: vertical icons on left
  return (
    <div className="absolute top-4 left-4 space-y-4 z-10">
      {icons.map((icon) => (
        <div
          key={icon.id}
          onClick={(e) => handleClick(icon.id, e)}
          className="desktop-icon flex flex-col items-center p-2 rounded text-white cursor-pointer select-none"
          style={{ zIndex: 100 }}
        >
          <div className="mb-1">
            <XPIcon type={icon.iconType} size="medium" />
          </div>
          <div className="text-xs text-center font-sans">{icon.title}</div>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;
