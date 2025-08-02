import { useWindowStore } from '../store/windowStore';
import { useIsMobile } from '../hooks/useIsMobile';

const DesktopIcons = () => {
  const { openWindow } = useWindowStore();
  const isMobile = useIsMobile();

  const icons = [
    { id: 'about', title: 'About Me', icon: '👤', color: 'bg-blue-500' },
    { id: 'experience', title: 'Experience', icon: '💼', color: 'bg-green-500' },
    { id: 'projects', title: 'Projects', icon: '📁', color: 'bg-purple-500' },
    { id: 'skills', title: 'Skills', icon: '🔧', color: 'bg-orange-500' },
    { id: 'contact', title: 'Contact', icon: '📧', color: 'bg-red-500' },
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
              <div className={`w-12 h-12 ${icon.color} rounded-lg mb-2 flex items-center justify-center text-lg`}>
                {icon.icon}
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
          <div className={`w-8 h-8 ${icon.color} rounded mb-1 flex items-center justify-center text-xs`}>
            {icon.icon}
          </div>
          <div className="text-xs text-center font-sans">{icon.title}</div>
        </div>
      ))}
    </div>
  );
};

export default DesktopIcons;
