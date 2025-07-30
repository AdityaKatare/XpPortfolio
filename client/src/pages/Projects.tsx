const Projects = () => {
  const projects = [
    {
      title: "Animal Shelter Link",
      icon: "🔗",
      color: "text-purple-600",
      description: "Designed and deployed an n-tier web architecture using RESTful web services and JavaServer Faces (JSF), providing the shelter with a scalable platform for online adoption using Apache Derby and SQL.",
      technologies: "Java, JSF, Apache Derby, SQL",
      githubRepo: "Pet-Adoption"
    },
    {
      title: "Full Stack E-commerce Website",
      icon: "🛒",
      color: "text-blue-600",
      description: "Engineered a single-page, full-stack application with React, backed by Firebase and Firestore. Integrated Firebase Authentication and Stripe API for PCI-compliant payments.",
      technologies: "React, Firebase, Firestore, Stripe API",
      githubRepo: "amazon-clone"
    },
    {
      title: "Twitter Bot",
      icon: "🤖",
      color: "text-cyan-600",
      description: "Designed an autonomous Twitter account using TwitterAPI to locate and share nearby COVID resources. Automated 500+ tweets, assisting 1,000+ users in finding critical resources.",
      technologies: "Python, TwitterAPI, COVID API",
      githubRepo: "covid-twitter-bot"
    },
    {
      title: "Kiosk Touchless Agent",
      icon: "✋",
      color: "text-green-600",
      description: "Engineered an open-source multimodal HCI framework with MediaPipe hand-tracking and Whisper STT. Achieved 93% fusion accuracy and 150ms response times.",
      technologies: "MediaPipe, Whisper, LangChain, PyAutoGUI",
      githubRepo: "touchless-kiosk-agent"
    },
    {
      title: "Timerly Chrome Extension",
      icon: "⏰",
      color: "text-orange-600",
      description: "Developed a time-limited site blocker for YouTube and Netflix with background tracking and user-configurable limits, enabling effective screen time management.",
      technologies: "JavaScript, Chrome Extension API",
      githubRepo: "timerly-chrome-extension"
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-blue-900 border-b border-gray-400 pb-2">Featured Projects</h2>
      
      <div className="space-y-4 max-h-80 overflow-y-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-4 border border-gray-300 shadow-sm">
            <h3 className={`font-bold ${project.color} mb-2 flex items-center justify-between`}>
              <span className="flex items-center">
                <span className="mr-2">{project.icon}</span>
                {project.title}
              </span>
              <a 
                href={`https://github.com/AdityaKatare/${project.githubRepo}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
                title="View on GitHub"
              >
                🐙 GitHub
              </a>
            </h3>
            <p className="text-sm mb-2">{project.description}</p>
            <div className="text-xs text-gray-600">
              <strong>Technologies:</strong> {project.technologies}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
