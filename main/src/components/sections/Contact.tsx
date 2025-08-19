import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, ExternalLink, Send } from "lucide-react";
import BehanceIcon from "@/components/ui/BehanceIcon";
import { useState } from "react";
import useReveal from "@/hooks/useReveal";
import Section from "../layout/Section";

const Contact = () => {
  useReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "28544709-7d0e-4586-b51b-c25f37a505eb",
    from_name: "Nanda kumar portfolio"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage("Message sent successfully!");
        setFormData(prev => ({ ...prev, name: "", email: "", message: "" }));
      } else {
        setResponseMessage("Failed to send message, please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "nandakumarb02@gmail.com",
      href: "mailto:nandakumarb02@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "nanda-kumar-balasubramanian",
      href: "https://linkedin.com/in/nanda-kumar-balasubramanian"
    },
    {
      icon: BehanceIcon,
      label: "Behance",
      value: "nandakumarb",
      href: "https://behance.net/nandakumarb"
    }
  ];

  return (
    <Section id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto reveal">
          Ready to bring your ideas to life? Let's start a conversation about your next project.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8 reveal">
          <div>
            <h3 className="text-2xl font-bold mb-6 reveal">Let's Connect</h3>
            <p className="text-muted-foreground leading-relaxed mb-8 reveal">
              I'm always excited to discuss new projects and opportunities. 
              Whether you have a specific idea in mind or just want to explore 
              possibilities, I'd love to hear from you.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card key={index} className="glass-card p-6 hover-lift group reveal">
                  <a 
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold group-hover:text-accent transition-colors">
                        {contact.label}
                      </h4>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Dribbble Coming Soon */}
          {/* <Card className="glass-card p-6 border-dashed border-accent/30 reveal">
            <div className="flex items-center space-x-4 opacity-60">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <ExternalLink className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Dribbble</h4>
                <p className="text-muted-foreground">Coming Soon</p>
              </div>
            </div>
          </Card> */}
        </div>

        {/* Contact Form */}
        <Card className="glass-card p-8 reveal">
          <h3 className="text-2xl font-bold mb-6 reveal text-left">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="access_key" value={formData.access_key} />
            <div className="reveal">
              <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="glass-card border-white/10"
                required
              />
            </div>

            <div className="reveal">
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="glass-card border-white/10"
                required
              />
            </div>

            <div className="reveal">
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="glass-card border-white/10 resize-none"
                required
              />
            </div>

            <Button type="submit" size="lg" variant="cta" className="w-full reveal" disabled={isSubmitting}>
              <Send className="mr-2 h-5 w-5" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
            {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default Contact;
