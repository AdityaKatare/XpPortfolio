import { useState, useEffect } from 'react';
import { useWindowStore } from '../store/windowStore';
import { useIsMobile } from '../hooks/useIsMobile';

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
    <div className={`fixed bottom-0 left-0 right-0 ${isMobile ? 'h-12' : 'h-10'} bg-gradient-to-b from-blue-500 to-blue-800 border-t-2 border-blue-300 flex items-center px-1 z-30`}>
      {/* Start Button */}
      <button 
        onClick={onStartClick}
        className={`start-button ${isMobile ? 'px-6 h-10 text-base' : 'px-4 h-8 text-sm'} rounded flex items-center`}
      >
        Start
      </button>
      
      {/* Taskbar Buttons Container */}
      <div className="flex-1 flex items-center ml-2 space-x-1 overflow-x-auto">
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => handleTaskbarButtonClick(window.id)}
            className={`taskbar-button ${isMobile ? 'px-4 h-8 text-sm min-w-20' : 'px-3 h-6 text-xs max-w-32'} truncate ${
              activeWindowId === window.id && !window.isMinimized ? 'active' : ''
            }`}
          >
            {isMobile ? window.title.split(' - ')[0] : window.title}
          </button>
        ))}
      </div>
      
      {/* System Tray */}
      <div className={`flex items-center space-x-2 text-white ${isMobile ? 'text-sm' : 'text-xs'} pr-2`}>
        <div className="bg-blue-900 px-2 py-1 border border-blue-700">
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
