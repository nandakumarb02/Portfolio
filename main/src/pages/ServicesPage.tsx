import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Monitor, Smartphone, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

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

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Design",
      description: "Creating intuitive and engaging mobile experiences that users love. From wireframes to high-fidelity prototypes.",
      features: ["iOS & Android Design", "User Flow Optimization", "Interactive Prototypes"],
      price: "Starting at $2,500"
    },
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Responsive websites that look stunning and perform flawlessly across all devices and browsers.",
      features: ["Responsive Design", "User Experience", "Frontend Development"],
      price: "Starting at $3,000"
    },
    {
      icon: Palette,
      title: "UI/UX Consultation",
      description: "Expert guidance on improving your existing products or planning new digital experiences.",
      features: ["Design Audits", "User Research", "Strategy Planning"],
      price: "Starting at $150/hour"
    }
  ];

  return (
    <div className="min-h-screen py-20 parallax-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            My <span className="text-gradient">Services</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="glass-card p-10 hover-lift tilt-3d scroll-reveal text-center"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-8 hover-float">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>
              
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-highlight"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-2xl font-bold text-primary mb-8">{service.price}</div>
              
              <Button 
                className="w-full magnetic-btn group"
                onClick={() => navigate('/contact')}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;