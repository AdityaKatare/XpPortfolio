import { useState, useEffect } from 'react';
import { useWindowStore } from '../store/windowStore';
import { useIsMobile } from '../hooks/useIsMobile';
import startMenuIcon from '/assets/icons/startMenu.png';

interface TaskbarProps {
  onStartClick: () => void;
}

const Taskbar = ({ onStartClick }: TaskbarProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { windows, focusWindow, minimizeWindow, activeWindowId } = useWindowStore();
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTaskbarButtonClick = (windowId: string) => {
    const window = windows.find(w => w.id === windowId);
    if (!window) return;

    if (window.isMinimized) {
      focusWindow(windowId);
    } else if (activeWindowId === windowId) {
      minimizeWindow(windowId);
    } else {
      focusWindow(windowId);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`xp-taskbar fixed bottom-0 left-0 right-0 ${isMobile ? 'h-12' : 'h-[30px]'} flex items-center px-0 z-30`}>
      {/* Start Button */}
      <button
        onClick={onStartClick}
        className={`xp-start-button ${isMobile ? 'h-10 text-base' : 'h-[24px]'} flex items-center ml-0 mr-2`}
      >
        <img
          src={startMenuIcon}
          alt="Start"
          className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'} mr-1`}
          style={{ imageRendering: 'pixelated' }}
        />
        Start
      </button>

      {/* Taskbar Buttons Container */}
      <div className="flex-1 flex items-center space-x-1 overflow-x-auto px-1">
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => handleTaskbarButtonClick(window.id)}
            className={`taskbar-button ${isMobile ? 'px-4 h-8 text-sm min-w-20' : 'px-2 h-[22px] text-xs max-w-[150px]'} truncate flex items-center w-40 text-left ${activeWindowId === window.id && !window.isMinimized
                ? 'bg-[#1e52b7] shadow-inner text-white'
                : 'bg-[#3c81f3] hover:bg-[#5394fa] text-white shadow-md'
              }`}
            style={{
              border: '1px solid rgba(0,0,0,0.2)',
              borderRadius: '2px',
              background: activeWindowId === window.id && !window.isMinimized
                ? '#1e52b7'
                : 'linear-gradient(180deg, #3c81f3 0%, #1e52b7 100%)'
            }}
          >
            <XPIcon type={window.type === 'about' ? 'aboutMe' : window.type as any} size="small" className="mr-1 opacity-100" />
            {isMobile ? window.title.split(' - ')[0] : window.title}
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className={`flex items-center h-full bg-[#1290E8] border-l border-[#1941A5] pl-2 pr-2 ml-1 shadow-inner text-white ${isMobile ? 'text-sm' : 'text-xs'}`}>
        <div className="mr-2">
          {/* Placeholder for tray icons */}
          <div className="w-4 h-4 rounded-full bg-white opacity-20"></div>
        </div>
        <div className="">
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
