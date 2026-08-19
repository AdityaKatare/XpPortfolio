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
    <div className="boot-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="flex flex-col items-center">
        <div className="mb-16 flex items-center">
          {/* Windows Logo Approximation */}
          <div className="grid grid-cols-2 gap-1 mr-4">
            <div className="w-8 h-8 bg-[#f25d31] rounded-tl-lg"></div>
            <div className="w-8 h-8 bg-[#7ec633] rounded-tr-lg"></div>
            <div className="w-8 h-8 bg-[#0295ee] rounded-bl-lg"></div>
            <div className="w-8 h-8 bg-[#ffc30f] rounded-br-lg"></div>
          </div>
          <div>
            <div className="text-4xl font-bold font-sans tracking-tighter">Microsoft</div>
            <div className="text-6xl font-bold font-sans tracking-tighter leading-none">
              Windows<span className="text-[#f25d31] align-top text-3xl ml-1">xp</span>
            </div>
          </div>
        </div>

        <div className="w-48 h-4 border-2 border-[#555] rounded p-[2px] relative overflow-hidden bg-black">
          <div className="absolute top-[2px] bottom-[2px] w-12 bg-gradient-to-r from-transparent via-[#288EFF] to-transparent animate-[loading_2s_linear_infinite]"
            style={{
              animation: 'loading 2s linear infinite',
              left: '-50px'
            }}
          ></div>
        </div>

        <div className="mt-4 text-xs text-gray-400">Copyright © 1985-2001 Microsoft Corporation</div>
      </div>
    </div>
  );
};

export default BootScreen;
