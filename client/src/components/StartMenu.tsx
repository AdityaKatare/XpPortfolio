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
      className="xp-start-menu absolute bottom-[30px] left-0 w-[380px] z-40"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Header */}
      <div className="xp-start-header flex items-center">
        <div className="w-10 h-10 rounded border-2 border-white overflow-hidden mr-2 bg-[#D3E5FA] flex items-center justify-center">
          <XPIcon type="user" size="medium" />
        </div>
        <span className="text-white font-bold text-lg shadow-black drop-shadow-md">Aditya Katare</span>
      </div>

      {/* Body */}
      <div className="xp-menu-columns">
        {/* Left Column (White) */}
        <div className="xp-menu-left">
          <div className="text-gray-500 text-[10px] font-bold mb-1 ml-1">Internet</div>
          <div className="xp-menu-item" onClick={(e) => handleMenuItemClick('about', e)}>
            <XPIcon type="aboutMe" size="medium" className="mr-2" />
            <div>
              <div className="font-bold text-sm">About Me</div>
              <div className="text-[10px] text-gray-500">Browser</div>
            </div>
          </div>

          <div className="text-gray-500 text-[10px] font-bold mb-1 ml-1 mt-2">E-mail</div>
          <div className="xp-menu-item" onClick={(e) => handleMenuItemClick('contact', e)}>
            <XPIcon type="contact" size="medium" className="mr-2" />
            <div>
              <div className="font-bold text-sm">Contact</div>
              <div className="text-[10px] text-gray-500">E-mail</div>
            </div>
          </div>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d3d3d3] to-transparent my-2"></div>

          {menuItems.filter(item => !['about', 'contact'].includes(item.id)).map((item) => (
            <div
              key={item.id}
              onClick={(e) => handleMenuItemClick(item.id, e)}
              className="xp-menu-item"
            >
              <XPIcon type={item.iconType} size="medium" className="mr-2" />
              <span className="text-sm">{item.title}</span>
            </div>
          ))}

          <div className="mt-auto mb-2 text-center pt-10">
            <div className="xp-menu-item justify-center font-bold">
              All Programs <span className="ml-2">▶</span>
            </div>
          </div>
        </div>

        {/* Right Column (Blue) */}
        <div className="xp-menu-right text-sm">
          <div className="xp-menu-item font-bold">
            <span className="mr-2">📁</span> My Documents
          </div>
          <div className="xp-menu-item font-bold">
            <span className="mr-2">🖼️</span> My Pictures
          </div>
          <div className="xp-menu-item font-bold">
            <span className="mr-2">🎵</span> My Music
          </div>

          <div className="h-[1px] bg-[#95BDE7] my-2 shadow-[0_1px_0_rgba(255,255,255,0.3)]"></div>

          <div className="xp-menu-item">
            <span className="mr-2">💻</span> My Computer
          </div>
          <div className="xp-menu-item">
            <span className="mr-2">🔌</span> Control Panel
          </div>
          <div className="xp-menu-item">
            <span className="mr-2">🖨️</span> Printers and Faxes
          </div>

          <div className="h-[1px] bg-[#95BDE7] my-2 shadow-[0_1px_0_rgba(255,255,255,0.3)]"></div>

          <div className="xp-menu-item">
            <span className="mr-2">❓</span> Help and Support
          </div>
          <div className="xp-menu-item">
            <span className="mr-2">🔍</span> Search
          </div>
          <div className="xp-menu-item">
            <span className="mr-2">🏃</span> Run...
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="xp-start-footer">
        <div className="flex items-center cursor-pointer hover:brightness-110 mr-4">
          <div className="bg-[#E58933] p-1 rounded mr-1 border border-white">🔑</div>
          <span className="text-xs">Log Off</span>
        </div>
        <div className="flex items-center cursor-pointer hover:brightness-110">
          <div className="bg-[#D64734] p-1 rounded mr-1 border border-white">⏻</div>
          <span className="text-xs">Turn Off Computer</span>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
