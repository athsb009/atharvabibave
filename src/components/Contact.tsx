
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Clock, Github, Linkedin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "abibave09@gmail.com",
      link: "mailto:abibave09@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+1 832-758-8177",
      link: "tel:+18327588177"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Houston, TX, USA",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Availability",
      value: "Open to new opportunities",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="absolute -left-20 top-20 w-60 h-60 bg-primary/10 rounded-full filter blur-3xl opacity-70 dark:bg-primary/5"></div>
      <div className="absolute -right-20 bottom-20 w-60 h-60 bg-accent/10 rounded-full filter blur-3xl opacity-70 dark:bg-accent/5"></div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-wider text-primary rounded-full bg-primary/10 border border-primary/20">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you and explore how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect and make something extraordinary happen.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    {info.link !== "#" ? (
                      <a 
                        href={info.link} 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/athsb009" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background border border-border hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/atharva-bibave" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background border border-border hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input px-4 py-3 bg-background/50 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-input px-4 py-3 bg-background/50 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input px-4 py-3 bg-background/50 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-input px-4 py-3 bg-background/50 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none resize-none transition-all"
                  placeholder="Tell me about your project, ideas, or how we can work together..."
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
