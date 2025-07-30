import { useState, useEffect } from 'react';
import { useWindowStore } from '../store/windowStore';

interface TaskbarProps {
  onStartClick: () => void;
}

const Taskbar = ({ onStartClick }: TaskbarProps) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { windows, focusWindow, minimizeWindow, activeWindowId } = useWindowStore();

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
    <div className="fixed bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-blue-500 to-blue-800 border-t-2 border-blue-300 flex items-center px-1 z-30">
      {/* Start Button */}
      <button 
        onClick={onStartClick}
        className="start-button px-4 h-8 rounded text-sm flex items-center"
      >
        <div className="w-4 h-4 bg-green-400 rounded-full mr-2"></div>
        Start
      </button>
      
      {/* Taskbar Buttons Container */}
      <div className="flex-1 flex items-center ml-2 space-x-1">
        {windows.map((window) => (
          <button
            key={window.id}
            onClick={() => handleTaskbarButtonClick(window.id)}
            className={`taskbar-button px-3 h-6 text-xs truncate max-w-32 ${
              activeWindowId === window.id && !window.isMinimized ? 'active' : ''
            }`}
          >
            {window.title}
          </button>
        ))}
      </div>
      
      {/* System Tray */}
      <div className="flex items-center space-x-2 text-white text-xs pr-2">
        <div className="bg-blue-900 px-2 py-1 border border-blue-700">
          {formatTime(currentTime)}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
