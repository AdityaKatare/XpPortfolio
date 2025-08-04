import { useWindowStore } from '../store/windowStore';
import XPIcon from './XPIcon';

interface StartMenuProps {
  show: boolean;
  onHide: () => void;
}

const StartMenu = ({ show, onHide }: StartMenuProps) => {
  const { openWindow } = useWindowStore();

  const menuItems = [
    { id: 'about', title: 'About Me', iconType: 'aboutMe' as const },
    { id: 'experience', title: 'Experience', iconType: 'experience' as const },
    { id: 'projects', title: 'Projects', iconType: 'projects' as const },
    { id: 'skills', title: 'Skills', iconType: 'skills' as const },
    { id: 'contact', title: 'Contact', iconType: 'contact' as const },
  ];

  const handleMenuItemClick = (windowType: string, e: React.MouseEvent) => {
    e.stopPropagation();
    openWindow(windowType);
    onHide();
  };

  if (!show) return null;

  return (
    <div 
      className="absolute bottom-10 left-0 w-80 bg-stone-200 border-2 border-gray-500 shadow-lg z-40"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex">
        <div className="w-8 bg-gradient-to-b from-blue-500 to-blue-800 flex items-center justify-center">
          <div className="text-white font-bold text-lg transform -rotate-90 whitespace-nowrap">
            Aditya Katare
          </div>
        </div>
        <div className="flex-1 p-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <div
                key={item.id}
                onClick={(e) => handleMenuItemClick(item.id, e)}
                className="p-2 hover:bg-blue-100 cursor-pointer rounded flex items-center"
              >
                <XPIcon type={item.iconType} size="medium" className="mr-3" />
                {item.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
