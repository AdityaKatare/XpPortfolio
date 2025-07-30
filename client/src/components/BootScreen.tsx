import { useEffect, useState } from 'react';

const BootScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Play startup sound
    const audio = new Audio('/startup.wav');
    audio.play().catch(() => {
      // Ignore audio play errors (browser restrictions)
    });

    // Animate loading bar
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="boot-screen fixed inset-0 z-50 flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-6xl font-bold mb-4">Windows XP</div>
          <div className="text-xl">Professional</div>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div className="w-64 h-2 bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-sm">Loading Aditya's portfolio...</div>
        </div>
      </div>
    </div>
  );
};

export default BootScreen;
