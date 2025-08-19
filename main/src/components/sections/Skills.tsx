import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Monitor, Code, Lightbulb } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import Section from "../layout/Section";

const Skills = () => {
  useReveal();
  const skillCategories = [
    {
      icon: Palette,
      title: "Design Tools",
      description: "Professional design software and platforms",
      skills: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      color: "text-red-400"
    },
    {
      icon: Lightbulb,
      title: "UI/UX",
      description: "User experience and interface design",
      skills: ["UX Research", "Wireframing", "Responsive Design"],
      color: "text-yellow-400"
    },
    {
      icon: Code,
      title: "Development",
      description: "Frontend technologies and markup",
      skills: ["HTML", "CSS"],
      color: "text-blue-400"
    },
    {
      icon: Monitor,
      title: "Platforms",
      description: "Design and prototyping platforms",
      skills: ["Balsamiq", "Miro"],
      color: "text-green-400"
    }
  ];

  return (
    <Section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
          My <span className="text-accent">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto reveal">
          A comprehensive toolkit for creating exceptional digital experiences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <Card
              key={index}
              className="glass-card p-8 text-center tilt-card group relative overflow-hidden reveal"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div 
                    className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    style={{ backgroundColor: 'hsl(var(--highlight))' }}
                  >
                    <IconComponent className={`h-8 w-8 text-white`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {category.description}
                </p>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group/skill">
                      <Badge 
                        variant="outline" 
                        className="w-full py-2 border-accent/30 text-accent hover:bg-accent/10 group-hover/skill:scale-105 transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Skills Summary */}
      <div className="mt-16 text-center">
        <Card className="glass-card p-8 max-w-4xl mx-auto tilt-card group relative overflow-hidden reveal">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <h3 className="text-2xl font-bold mb-6 text-gradient reveal">
            My Creative & Technical Toolkit
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">5+</div>
              <div className="text-muted-foreground">Design Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">UX Methods</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">2+</div>
              <div className="text-muted-foreground">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">∞</div>
              <div className="text-muted-foreground">Creativity</div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

export default Skills;
