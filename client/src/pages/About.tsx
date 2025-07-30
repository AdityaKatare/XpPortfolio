const About = () => {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
          AK
        </div>
        <h2 className="text-2xl font-bold text-blue-900">Aditya Katare</h2>
        <p className="text-gray-600">Software Development Engineer</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-white p-3 border border-gray-300">
          <h3 className="font-bold text-blue-900 mb-2">📍 Location</h3>
          <p>Bangalore, India</p>
        </div>
        <div className="bg-white p-3 border border-gray-300">
          <h3 className="font-bold text-blue-900 mb-2">📧 Email</h3>
          <a 
            href="mailto:adityamkatare@gmail.com"
            className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
          >
            adityamkatare@gmail.com
          </a>
        </div>
        <div className="bg-white p-3 border border-gray-300">
          <h3 className="font-bold text-blue-900 mb-2">📱 Phone</h3>
          <p>9611071712</p>
        </div>
        <div className="bg-white p-3 border border-gray-300">
          <h3 className="font-bold text-blue-900 mb-2">🎓 GPA</h3>
          <p>9.18 / 10.0</p>
        </div>
      </div>
      
      <div className="bg-white p-4 border border-gray-300">
        <h3 className="font-bold text-blue-900 mb-3">🎓 Education</h3>
        <div className="space-y-2">
          <p><strong>Ramaiah University of Applied Sciences</strong></p>
          <p>B.Tech in Computer Science (Dec 2021 – Present)</p>
          <p className="text-green-600">GPA: 9.18</p>
        </div>
      </div>
      
      <div className="bg-white p-4 border border-gray-300">
        <h3 className="font-bold text-blue-900 mb-3">🔗 Connect with Me</h3>
        <div className="flex flex-wrap gap-3">
          <a 
            href="https://linkedin.com/in/adityamkatare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
          >
            💼 LinkedIn
          </a>
          <a 
            href="https://github.com/AdityaKatare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 bg-gray-800 text-white text-sm rounded hover:bg-gray-900 transition-colors"
          >
            🐙 GitHub
          </a>
          <a 
            href="mailto:adityamkatare@gmail.com"
            className="inline-flex items-center px-3 py-2 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
          >
            📧 Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
