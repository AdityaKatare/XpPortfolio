import { useState, useRef } from 'react';
import { useWindowStore } from '../store/windowStore';
import { useDraggable } from '../hooks/useDraggable';
import About from '../pages/About';
import Experience from '../pages/Experience';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';

interface XPWindowProps {
  window: {
    id: string;
    type: string;
    title: string;
    x: number;
    y: number;
    width: number;
    height: number;
    isMinimized: boolean;
    isMaximized: boolean;
    zIndex: number;
  };
}

const XPWindow = ({ window }: XPWindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const { closeWindow, minimizeWindow, maximizeWindow, focusWindow } = useWindowStore();
  const [originalSize, setOriginalSize] = useState({ width: 600, height: 400, x: 100, y: 50 });

  const { position, isDragging } = useDraggable(windowRef, {
    x: window.x,
    y: window.y,
    disabled: window.isMaximized || window.isMinimized,
    onDragStart: () => focusWindow(window.id),
  });

  const getWindowIcon = (type: string) => {
    const icons = {
      about: { icon: '👤', color: 'bg-blue-500' },
      experience: { icon: '💼', color: 'bg-green-500' },
      projects: { icon: '📁', color: 'bg-purple-500' },
      skills: { icon: '🔧', color: 'bg-orange-500' },
      contact: { icon: '📧', color: 'bg-red-500' },
    };
    return icons[type as keyof typeof icons] || { icon: '📄', color: 'bg-gray-500' };
  };

  const renderContent = () => {
    switch (window.type) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <div>Content not found</div>;
    }
  };

  const handleMinimize = () => {
    minimizeWindow(window.id);
  };

  const handleMaximize = () => {
    if (window.isMaximized) {
      setOriginalSize({ width: window.width, height: window.height, x: window.x, y: window.y });
    }
    maximizeWindow(window.id);
  };

  const handleClose = () => {
    closeWindow(window.id);
  };

  const windowIcon = getWindowIcon(window.type);

  if (window.isMinimized) {
    return null;
  }

  const windowStyle = window.isMaximized 
    ? { left: 0, top: 0, width: '100vw', height: 'calc(100vh - 40px)' }
    : { 
        left: position.x, 
        top: position.y, 
        width: window.width, 
        height: window.height 
      };

  return (
    <div
      ref={windowRef}
      className={`xp-window absolute window-appear ${isDragging ? 'cursor-move' : ''}`}
      style={{
        ...windowStyle,
        zIndex: window.zIndex,
      }}
      onMouseDown={() => focusWindow(window.id)}
    >
      <div className="xp-window-title h-6 flex items-center justify-between px-2 text-white text-xs font-bold cursor-move">
        <div className="flex items-center">
          <div className={`w-4 h-4 ${windowIcon.color} rounded text-white text-xs flex items-center justify-center mr-1`}>
            {windowIcon.icon}
          </div>
          <span>{window.title}</span>
        </div>
        <div className="flex space-x-1">
          <button 
            onClick={handleMinimize}
            className="window-btn w-4 h-4 xp-button text-xs flex items-center justify-center"
          >
            _
          </button>
          <button 
            onClick={handleMaximize}
            className="window-btn w-4 h-4 xp-button text-xs flex items-center justify-center"
          >
            □
          </button>
          <button 
            onClick={handleClose}
            className="window-btn w-4 h-4 xp-button text-xs flex items-center justify-center"
          >
            ×
          </button>
        </div>
      </div>
      <div className="xp-window-content flex-1 p-4 overflow-auto text-sm" style={{ height: 'calc(100% - 24px)' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default XPWindow;
