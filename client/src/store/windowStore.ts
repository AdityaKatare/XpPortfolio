import { create } from 'zustand';

interface WindowState {
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
}

interface WindowStore {
  windows: WindowState[];
  activeWindowId: string | null;
  nextZIndex: number;
  openWindow: (type: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
}

const getWindowTitle = (type: string): string => {
  const titles = {
    about: 'About Me - Aditya Katare',
    experience: 'Work Experience',
    projects: 'Projects Portfolio',
    skills: 'Technical Skills',
    contact: 'Contact Information'
  };
  return titles[type as keyof typeof titles] || 'Window';
};

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  activeWindowId: null,
  nextZIndex: 1000,

  openWindow: (type: string) => {
    console.log('openWindow called with type:', type);
    const { windows, nextZIndex } = get();
    
    // Check if window already exists
    const existingWindow = windows.find(w => w.type === type);
    if (existingWindow) {
      console.log('Existing window found, focusing it');
      // Focus existing window
      set({
        windows: windows.map(w => ({
          ...w,
          isMinimized: w.id === existingWindow.id ? false : w.isMinimized,
          zIndex: w.id === existingWindow.id ? nextZIndex : w.zIndex
        })),
        activeWindowId: existingWindow.id,
        nextZIndex: nextZIndex + 1
      });
      return;
    }

    // Create new window
    const newWindow: WindowState = {
      id: `${type}-${Date.now()}`,
      type,
      title: getWindowTitle(type),
      x: 100 + (windows.length * 30),
      y: 50 + (windows.length * 30),
      width: 600,
      height: 400,
      isMinimized: false,
      isMaximized: false,
      zIndex: nextZIndex
    };

    console.log('Creating new window:', newWindow);

    set({
      windows: [...windows, newWindow],
      activeWindowId: newWindow.id,
      nextZIndex: nextZIndex + 1
    });
  },

  closeWindow: (id: string) => {
    const { windows, activeWindowId } = get();
    const newWindows = windows.filter(w => w.id !== id);
    
    set({
      windows: newWindows,
      activeWindowId: activeWindowId === id ? (newWindows[0]?.id || null) : activeWindowId
    });
  },

  minimizeWindow: (id: string) => {
    set({
      windows: get().windows.map(w => ({
        ...w,
        isMinimized: w.id === id ? true : w.isMinimized
      })),
      activeWindowId: get().activeWindowId === id ? null : get().activeWindowId
    });
  },

  maximizeWindow: (id: string) => {
    const { windows, nextZIndex } = get();
    
    set({
      windows: windows.map(w => ({
        ...w,
        isMaximized: w.id === id ? !w.isMaximized : w.isMaximized,
        isMinimized: w.id === id ? false : w.isMinimized,
        zIndex: w.id === id ? nextZIndex : w.zIndex
      })),
      activeWindowId: id,
      nextZIndex: nextZIndex + 1
    });
  },

  focusWindow: (id: string) => {
    const { windows, nextZIndex } = get();
    
    set({
      windows: windows.map(w => ({
        ...w,
        isMinimized: w.id === id ? false : w.isMinimized,
        zIndex: w.id === id ? nextZIndex : w.zIndex
      })),
      activeWindowId: id,
      nextZIndex: nextZIndex + 1
    });
  },

  updateWindowPosition: (id: string, x: number, y: number) => {
    set({
      windows: get().windows.map(w => ({
        ...w,
        x: w.id === id ? x : w.x,
        y: w.id === id ? y : w.y
      }))
    });
  }
}));
