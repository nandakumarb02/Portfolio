import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Monitor, Code, Lightbulb, Zap, Star } from "lucide-react";

const SkillsPage = () => {
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

  const skillCategories = [
    {
      icon: Palette,
      title: "Design Tools",
      description: "Professional design software and platforms",
      skills: [
        { name: "Figma", level: 95 },
        { name: "Adobe Illustrator", level: 90 },
        { name: "Adobe Photoshop", level: 85 }
      ],
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      icon: Lightbulb,
      title: "UI/UX",
      description: "User experience and interface design",
      skills: [
        { name: "UX Research", level: 90 },
        { name: "Wireframing", level: 95 },
        { name: "Responsive Design", level: 92 }
      ],
      color: "text-highlight",
      bgColor: "bg-highlight/10"
    },
    {
      icon: Code,
      title: "Development",
      description: "Frontend technologies and markup",
      skills: [
        { name: "HTML", level: 88 },
        { name: "CSS", level: 85 }
      ],
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Monitor,
      title: "Platforms",
      description: "Design and prototyping platforms",
      skills: [
        { name: "Web Design", level: 93 },
        { name: "Mobile Design", level: 90 },
        { name: "Prototyping", level: 88 }
      ],
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    }
  ];

  return (
    <div className="min-h-screen py-20 parallax-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            My <span className="text-gradient">Skills</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-10 hover-lift tilt-3d scroll-reveal"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${category.bgColor} flex items-center justify-center hover-float`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-lg">{skill.name}</span>
                        <Badge variant="outline" className={`${category.color.replace('text-', 'border-')} ${category.color}`}>
                          {skill.level}%
                        </Badge>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${category.bgColor.replace('/10', '')} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Featured Skills */}
        <div className="mb-20 scroll-reveal">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="text-gradient">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Rapid Prototyping",
                description: "Quick iteration from concept to interactive prototype",
                highlight: "24hr turnaround"
              },
              {
                icon: Star,
                title: "Design Systems",
                description: "Creating scalable and consistent design frameworks",
                highlight: "Systematic approach"
              },
              {
                icon: Monitor,
                title: "Cross-Platform",
                description: "Seamless experience across all devices and platforms",
                highlight: "Universal design"
              }
            ].map((feature, index) => (
              <Card 
                key={index}
                className="glass-card p-8 text-center hover-lift scroll-reveal-scale"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center hover-float">
                    <feature.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                
                <Badge className="bg-highlight text-white mb-4">{feature.highlight}</Badge>
                
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="scroll-reveal">
          <Card className="glass-card p-12 max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8 text-gradient">
              Today's Top Picks for Designer
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { number: "5+", label: "Design Tools", icon: Palette },
                { number: "3+", label: "UX Methods", icon: Lightbulb },
                { number: "2+", label: "Languages", icon: Code },
                { number: "∞", label: "Creativity", icon: Star }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Skill Philosophy */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                "Mastery comes not from knowing every tool, but from understanding how to choose the right tool 
                for each unique challenge and wielding it with precision and creativity."
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;