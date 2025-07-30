import { useState, useEffect } from 'react';
import BootScreen from './BootScreen';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import XPWindow from './XPWindow';
import DesktopIcons from './DesktopIcons';
import { useWindowStore } from '../store/windowStore';

const XPDesktop = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [showStartMenu, setShowStartMenu] = useState(false);
  const { windows } = useWindowStore();

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
        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
      onClick={hideStartMenu}
    >
      {/* Desktop Icons */}
      <DesktopIcons />

      {/* Windows Container */}
      <div className="absolute inset-0 pb-10">
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

export default XPDesktop;
