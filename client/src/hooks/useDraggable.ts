import { useState, useEffect, RefObject } from 'react';

interface DraggableOptions {
  x: number;
  y: number;
  disabled?: boolean;
  onDragStart?: () => void;
  onDragEnd?: () => void;
}

export const useDraggable = (
  ref: RefObject<HTMLElement>,
  options: DraggableOptions
) => {
  const [position, setPosition] = useState({ x: options.x, y: options.y });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({ x: options.x, y: options.y });
  }, [options.x, options.y]);

  useEffect(() => {
    if (options.disabled) return;

    const element = ref.current;
    if (!element) return;

    const handleMouseDown = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      // Only start dragging if clicking on the title bar (not buttons)
      const target = mouseEvent.target as HTMLElement;
      if (target.closest('.window-btn')) return;

      const rect = element.getBoundingClientRect();
      setDragOffset({
        x: mouseEvent.clientX - rect.left,
        y: mouseEvent.clientY - rect.top
      });
      setIsDragging(true);
      options.onDragStart?.();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      // Constrain to viewport
      const maxX = window.innerWidth - (element?.offsetWidth || 0);
      const maxY = window.innerHeight - (element?.offsetHeight || 0) - 40; // Account for taskbar

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        options.onDragEnd?.();
      }
    };

    // Add event listeners to title bar
    const titleBar = element.querySelector('.xp-window-title');
    if (titleBar) {
      titleBar.addEventListener('mousedown', handleMouseDown);
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (titleBar) {
        titleBar.removeEventListener('mousedown', handleMouseDown);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [ref, isDragging, dragOffset, options]);

  return { position, isDragging };
};
