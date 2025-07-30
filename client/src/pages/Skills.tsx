const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      color: "text-blue-600",
      bgColor: "bg-blue-500",
      skills: [
        { name: "Python", color: "bg-blue-100 text-blue-800" },
        { name: "Java", color: "bg-red-100 text-red-800" },
        { name: "MATLAB", color: "bg-orange-100 text-orange-800" },
        { name: "SQL", color: "bg-green-100 text-green-800" },
        { name: "JavaScript", color: "bg-yellow-100 text-yellow-800" }
      ]
    },
    {
      title: "Technologies & Frameworks",
      icon: "⚙️",
      color: "text-green-600",
      bgColor: "bg-green-500",
      skills: [
        { name: "React", color: "bg-cyan-100 text-cyan-800" },
        { name: "Git", color: "bg-gray-100 text-gray-800" },
        { name: "Spring", color: "bg-green-100 text-green-800" }
      ]
    },
    {
      title: "Libraries",
      icon: "📚",
      color: "text-purple-600",
      bgColor: "bg-purple-500",
      skills: [
        { name: "Mediapipe", color: "bg-indigo-100 text-indigo-800" },
        { name: "CV2", color: "bg-purple-100 text-purple-800" },
        { name: "Numpy", color: "bg-blue-100 text-blue-800" },
        { name: "Keras", color: "bg-orange-100 text-orange-800" },
        { name: "Tensorflow", color: "bg-red-100 text-red-800" }
      ]
    }
  ];

  const certifications = [
    "📊 Google Advanced Data Analytics Certificate",
    "🤖 Machine Learning by Stanford University and Andrew Ng",
    "⛓️ Blockchain Basics by University of Buffalo"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-900 border-b border-gray-400 pb-2">Technical Skills</h2>
      
      <div className="grid grid-cols-1 gap-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-4 border border-gray-300">
            <h3 className={`font-bold ${category.color} mb-3 flex items-center`}>
              <span className={`w-6 h-6 ${category.bgColor} rounded mr-2 flex items-center justify-center text-white text-xs`}>
                {category.icon}
              </span>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex}
                  className={`px-3 py-1 ${skill.color} rounded-full text-sm`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        <div className="bg-white p-4 border border-gray-300">
          <h3 className="font-bold text-orange-600 mb-3 flex items-center">
            <span className="w-6 h-6 bg-orange-500 rounded mr-2 flex items-center justify-center text-white text-xs">🏆</span>
            Certifications
          </h3>
          <div className="space-y-2 text-sm">
            {certifications.map((cert, index) => (
              <div key={index}>{cert}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
