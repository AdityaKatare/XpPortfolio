import { useWindowStore } from '../store/windowStore';

interface StartMenuProps {
  show: boolean;
  onHide: () => void;
}

const StartMenu = ({ show, onHide }: StartMenuProps) => {
  const { openWindow } = useWindowStore();

  const menuItems = [
    { id: 'about', title: 'About Me', icon: '👤', color: 'bg-blue-500' },
    { id: 'experience', title: 'Experience', icon: '💼', color: 'bg-green-500' },
    { id: 'projects', title: 'Projects', icon: '🚀', color: 'bg-purple-500' },
    { id: 'skills', title: 'Skills', icon: '⚡', color: 'bg-orange-500' },
    { id: 'contact', title: 'Contact', icon: '✉️', color: 'bg-red-500' },
  ];

  const handleMenuItemClick = (windowType: string) => {
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
                onClick={() => handleMenuItemClick(item.id)}
                className="p-2 hover:bg-blue-100 cursor-pointer rounded flex items-center"
              >
                <div className={`w-6 h-6 ${item.color} rounded mr-3 flex items-center justify-center text-xs text-white`}>
                  {item.icon}
                </div>
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
