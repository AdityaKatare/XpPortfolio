const Experience = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-900 border-b border-gray-400 pb-2">Work Experience</h2>
      
      <div className="bg-white p-4 border-2 border-gray-300 shadow-sm">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-blue-900">Indian Space Research Organization (ISRO)</h3>
            <p className="text-blue-600 font-semibold">Project Intern</p>
          </div>
          <div className="text-right text-sm text-gray-600">
            <p>📍 Bangalore, KA</p>
            <p>📅 Oct 2024 – Dec 2024</p>
          </div>
        </div>
        
        <div className="space-y-3 text-sm">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <p>Engineered a backend system to process raw satellite data, <strong>increasing processing efficiency by 30%</strong> that accelerated data throughput for research teams.</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <p>Designed intuitive GUIs for visualizing satellite orbits, <strong>reducing time spent on data interpretation by 25%</strong>, and improving accessibility for both technical and non-technical users.</p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <p>Developed an export feature enabling seamless data transfer for non-technical users, streamlining workflows and enhancing system integration for cross-departmental analysis.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 border border-blue-200 rounded">
        <h3 className="font-bold text-blue-900 mb-2">🏆 Key Achievements</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">30%</div>
            <div>Efficiency Increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">25%</div>
            <div>Time Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
