import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";
import BehanceIcon from "@/components/ui/BehanceIcon";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const elementsToReveal = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale');
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nandakumarb02@gmail.com",
      link: "mailto:nandakumarb02@gmail.com"
    },
    {
      icon: ExternalLink,
      title: "LinkedIn",
      value: "nanda-kumar-balasubramanian",
      link: "https://linkedin.com/in/nanda-kumar-balasubramanian"
    },
    {
      icon: BehanceIcon,
      title: "Behance",
      value: "nandakumarb",
      link: "https://behance.net/nandakumarb"
    }
  ];

  return (
    <div className="min-h-screen py-20 parallax-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate to bring your digital vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="glass-card p-10 hover-lift scroll-reveal">
            <h2 className="text-3xl font-bold mb-8">Send me a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-14 text-lg border-border/20 focus:border-primary"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-14 text-lg border-border/20 focus:border-primary"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="min-h-32 text-lg border-border/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full magnetic-btn group h-14 text-lg"
              >
                <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 scroll-reveal-scale">
            <Card className="glass-card p-10">
              <h2 className="text-3xl font-bold mb-8">Let's connect</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Ready to start your next project? I'd love to hear about your ideas and 
                how we can work together to create something amazing.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card/50 hover:bg-card/80 transition-all duration-300 hover-lift group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.title}</div>
                      <div className="font-semibold group-hover:text-primary transition-colors">
                        {contact.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
