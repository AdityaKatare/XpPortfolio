import { useWindowStore } from '../store/windowStore';

const DesktopIcons = () => {
  const { openWindow } = useWindowStore();

  const icons = [
    { id: 'about', title: 'About Me', icon: '👤', color: 'bg-blue-500' },
    { id: 'experience', title: 'Experience', icon: '💼', color: 'bg-green-500' },
    { id: 'projects', title: 'Projects', icon: '📁', color: 'bg-purple-500' },
    { id: 'skills', title: 'Skills', icon: '🔧', color: 'bg-orange-500' },
    { id: 'contact', title: 'Contact', icon: '📧', color: 'bg-red-500' },
  ];

  const handleDoubleClick = (windowType: string) => {
    console.log('Double-clicking desktop icon:', windowType);
    openWindow(windowType);
  };

  return (
    <div className="absolute top-4 left-4 space-y-4">
      {icons.map((icon) => (
        <div
          key={icon.id}
          onDoubleClick={() => handleDoubleClick(icon.id)}
          className="desktop-icon flex flex-col items-center p-2 rounded text-white cursor-pointer"
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
