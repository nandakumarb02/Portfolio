import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, User, Heart, Target } from "lucide-react";

const AboutPage = () => {
  useEffect(() => {
    // Scroll reveal animation
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

  return (
    <div className="min-h-screen py-20 parallax-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            About <span className="text-gradient">Me</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences that connect users with technology
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Personal Story */}
          <div className="scroll-reveal">
            <Card className="glass-card p-10 hover-lift">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-full bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">My Story</h2>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I'm a passionate UI/UX Designer dedicated to crafting clean, intuitive, and 
                  user-centered digital experiences. My journey in design started with a curiosity 
                  about how technology can better serve human needs.
                </p>
                
                <p>
                  I believe that great design is invisible – it works so seamlessly that users 
                  don't have to think about it. My approach combines user research, creative 
                  problem-solving, and technical understanding to create interfaces that not 
                  only look beautiful but function flawlessly.
                </p>
                
                <p>
                  Every project I undertake is an opportunity to bridge the gap between complex 
                  technology and simple, delightful user experiences. I'm constantly learning 
                  and evolving my craft to stay at the forefront of design innovation.
                </p>
              </div>
            </Card>
          </div>

          {/* Education */}
          <div className="scroll-reveal-scale">
            <Card className="glass-card p-10 hover-lift">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-full bg-highlight/10">
                  <GraduationCap className="h-8 w-8 text-highlight" />
                </div>
                <h2 className="text-3xl font-bold">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-primary rounded-full"></div>
                  <div className="pl-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="border-primary text-primary">
                        2018 - 2022
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      B.E – Electrical and Electronics Engineering
                    </h3>
                    <p className="text-xl text-primary font-medium mb-4">
                      Ramco Institute of Technology
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      During my engineering studies, I developed strong analytical thinking 
                      and problem-solving skills that I now apply to user experience design. 
                      The technical foundation has given me a unique perspective on how 
                      users interact with complex systems.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Values & Philosophy */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Heart,
              title: "User-Centered",
              description: "Every design decision starts with understanding user needs and pain points",
              color: "text-red-500"
            },
            {
              icon: Target,
              title: "Purpose-Driven",
              description: "Creating interfaces that solve real problems and add genuine value",
              color: "text-primary"
            },
            {
              icon: GraduationCap,
              title: "Continuous Learning",
              description: "Staying updated with latest design trends and technological advances",
              color: "text-highlight"
            }
          ].map((value, index) => (
            <Card 
              key={index} 
              className="glass-card p-8 text-center hover-lift tilt-3d scroll-reveal"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center hover-float">
                  <value.icon className={`h-10 w-10 ${value.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Skills Overview */}
        <div className="text-center scroll-reveal">
          <Card className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-8 text-gradient">
              Design Philosophy
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              "Great design is not just about making things look beautiful. It's about 
              making complex things simple, intuitive things delightful, and ensuring 
              that every interaction feels natural and purposeful."
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "50+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "∞", label: "Passion for Design" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;