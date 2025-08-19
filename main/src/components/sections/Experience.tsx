import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, CheckCircle } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import Section from "../layout/Section";

const Experience = () => {
  useReveal();
  const responsibilities = [
    "Designed mobile-first platforms with user-focused layouts",
    "Optimized UX flows to boost conversion rates and retention",
    "Conducted usability testing and applied actionable feedback",
    "Collaborated with cross-functional teams to deliver seamless experiences"
  ];

  return (
    <Section id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
          Work <span className="text-accent">Experience</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>

          {/* Experience Card */}
          <div className="relative mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 border-4 border-background"></div>
            
            {/* Content */}
            <div className="ml-20 md:ml-0 md:w-1/2 md:pr-8 relative overflow-hidden tilt-card reveal">
              <Card className="glass-card p-8 h-full group">
                {/* Background Glow */}
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">UI/UX Designer</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Building2 className="h-5 w-5 text-accent" />
                        <span className="text-lg text-accent font-semibold">
                          Opseazy Solutions Private Limited
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">Dec 2023 – Present</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      Current
                    </Badge>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4 text-left">
                    <h4 className="text-lg font-semibold mb-4">Key Responsibilities:</h4>
                    <ul className="space-y-3">
                      {responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Used */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Tools & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Figma", "Adobe Illustrator", "User Research", "Wireframing", "Prototyping"].map((skill) => (
                        <Badge key={skill} variant="outline" className="border-accent/30 text-accent">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Add more experience items here if needed */}
        </div>
    </Section>
  );
};

export default Experience;
