import { useState, useEffect } from 'react';
import BootScreen from './BootScreen';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import XPWindow from './XPWindow';
import DesktopIcons from './DesktopIcons';
import { useWindowStore } from '../store/windowStore';
import { useIsMobile } from '../hooks/useIsMobile';

export default function XPDesktop() {
  const [isBooting, setIsBooting] = useState(true);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const windows = useWindowStore((state) => state.windows);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const toggleStartMenu = () => {
    setShowStartMenu(!showStartMenu);
  };

  const hideStartMenu = () => {
    setShowStartMenu(false);
  };

  if (isBooting) {
    return <BootScreen />;
  }

  return (
    <div 
      className="fixed inset-0 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #3b8cfb 0%, #3b8cfb 50%, #68ae34 50%, #68ae34 100%)', // Fallback
        backgroundImage: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)', // High quality gradient/abstract that looks like Bliss
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={hideStartMenu}
    >
      {/* Desktop Icons */}
      <DesktopIcons />

      {/* Windows Container */}
      <div className={`absolute inset-0 ${isMobile ? 'pb-16' : 'pb-10'}`}>
        {windows.map((window) => (
          <XPWindow
            key={window.id}
            window={window}
          />
        ))}
      </div>

      {/* Start Menu */}
      <StartMenu show={showStartMenu} onHide={hideStartMenu} />

      {/* Taskbar */}
      <Taskbar onStartClick={toggleStartMenu} />
    </div>
  );
};
