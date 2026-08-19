import React, { useRef, useState } from 'react';
import { useDraggable } from '../hooks/useDraggable';
import { useWindowStore } from '../store/windowStore';
import { useIsMobile } from '../hooks/useIsMobile';
import XPIcon from './XPIcon';
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
  const isMobile = useIsMobile();

  const { position, isDragging } = useDraggable(windowRef, {
    x: window.x,
    y: window.y,
    disabled: window.isMaximized || window.isMinimized || isMobile,
    onDragStart: () => focusWindow(window.id),
  });

  const getWindowIcon = (type: string) => {
    const iconMap = {
      about: 'aboutMe' as const,
      experience: 'experience' as const,
      projects: 'projects' as const,
      skills: 'skills' as const,
      contact: 'contact' as const,
    };
    return iconMap[type as keyof typeof iconMap] || 'user' as const;
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

  const windowIconType = getWindowIcon(window.type);

  if (window.isMinimized) {
    return null;
  }

  // Mobile: Full screen windows
  let windowStyle;
  if (isMobile) {
    windowStyle = {
      left: 0,
      top: 0,
      width: '100vw',
      height: 'calc(100vh - 40px)'
    };
  } else if (window.isMaximized) {
    windowStyle = {
      left: 0,
      top: 0,
      width: '100vw',
      height: 'calc(100vh - 40px)'
    };
  } else {
    windowStyle = {
      left: position.x,
      top: position.y,
      width: window.width,
      height: window.height
    };
  }

  return (
    <div
      ref={windowRef}
      className={`xp-window absolute window-appear ${isDragging ? 'cursor-move' : ''} ${window.zIndex === 50 ? 'xp-window-focused' : ''}`}
      style={{
        ...windowStyle,
        zIndex: window.zIndex,
      }}
      onMouseDown={() => focusWindow(window.id)}
    >
      <div className={`xp-window-title-bar ${isMobile ? '' : 'cursor-move'}`}>
        <div className="flex items-center">
          <XPIcon type={windowIconType} size="small" className="mr-1" />
          <span className={`xp-window-title-text ${isMobile ? 'text-sm' : ''}`}>{window.title}</span>
        </div>
        <div className="title-bar-controls">
          {!isMobile && (
            <>
              <button
                onClick={handleMinimize}
                className="title-btn title-btn-minimize"
                title="Minimize"
              >
                <span className="mb-2">_</span>
              </button>
              <button
                onClick={handleMaximize}
                className="title-btn title-btn-maximize"
                title="Maximize"
              >
                <div className="w-3 h-3 border border-white"></div>
              </button>
            </>
          )}
          <button
            onClick={handleClose}
            className="title-btn title-btn-close"
            title="Close"
          >
            ×
          </button>
        </div>
      </div>
      <div className="xp-window-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default XPWindow;
