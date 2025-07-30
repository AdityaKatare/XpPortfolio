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
      className="fixed inset-0 overflow-hidden bg-gradient-to-b from-blue-400 via-green-400 to-green-500"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #5BB0E8 0%, #87D987 100%)',
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
