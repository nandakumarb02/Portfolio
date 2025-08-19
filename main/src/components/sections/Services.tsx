import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Monitor, ArrowRight } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import Section from "../layout/Section";

const Services = () => {
  useReveal();
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design for Apps and Websites",
      description: "Creating intuitive and engaging user interfaces that provide exceptional user experiences across all digital platforms.",
      features: [
        "User research and persona development",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing and iteration"
      ]
    },
    {
      icon: Monitor,
      title: "Web Design and Prototyping",
      description: "Designing responsive web experiences that work seamlessly across all devices and screen sizes.",
      features: [
        "Responsive web design",
        "Interactive prototypes",
        "Design system creation",
        "Frontend collaboration"
      ]
    }
  ];

  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
          My <span className="text-accent">Services</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto reveal">
          Comprehensive design solutions to bring your digital vision to life
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Card
              key={index}
              className="glass-card p-8 group relative overflow-hidden tilt-card reveal"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: 'hsl(var(--highlight))' }}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  variant="outline" 
                  className="group/btn w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <Card className="glass-card p-8 max-w-2xl mx-auto tilt-card reveal">
          <h3 className="text-2xl font-bold mb-4 reveal">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 reveal">
            Let's collaborate to create something amazing that your users will love.
          </p>
          <Button
            size="lg"
            variant="cta"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="reveal"
          >
            Let's Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </Section>
  );
};

export default Services;
