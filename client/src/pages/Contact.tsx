import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "adityamkatare@gmail.com",
      link: "mailto:adityamkatare@gmail.com",
      color: "bg-red-500"
    },
    {
      icon: "📱",
      label: "Phone",
      value: "9611071712",
      link: "tel:+919611071712",
      color: "bg-green-500"
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "AdityaKatare",
      link: "https://github.com/AdityaKatare",
      color: "bg-gray-800"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "adityamkatare",
      link: "https://linkedin.com/in/adityamkatare",
      color: "bg-blue-700"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-blue-900 border-b border-gray-400 pb-2">Contact Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 border border-gray-300">
            <h3 className="font-bold text-blue-600 mb-3">📞 Get in Touch</h3>
            <div className="space-y-3 text-sm">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center">
                  <span className={`w-8 h-8 ${contact.color} rounded-full flex items-center justify-center text-white mr-3`}>
                    {contact.icon}
                  </span>
                  <div>
                    <div className="font-semibold">{contact.label}</div>
                    <a 
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 border border-gray-300">
          <h3 className="font-bold text-green-600 mb-3">✉️ Send Message</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-bold mb-1">Name:</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-gray-400 text-sm" 
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Email:</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-gray-400 text-sm" 
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Message:</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-2 py-1 border border-gray-400 text-sm h-20 resize-none" 
                placeholder="Your message here..."
                required
              />
            </div>
            <button type="submit" className="xp-button px-4 py-2 text-sm font-bold">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 border border-blue-200 rounded text-center">
        <p className="text-sm text-gray-700">
          💡 <strong>Currently open to opportunities</strong> in Software Development, Machine Learning, and Full-Stack Development roles.
        </p>
      </div>
    </div>
  );
};

export default Contact;
