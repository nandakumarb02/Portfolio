import { Card } from "@/components/ui/card";
import { GraduationCap, Heart, Target } from "lucide-react";
import useReveal from "@/hooks/useReveal";
import Section from "../layout/Section";

const About = () => {
  useReveal();
  return (
    <Section id="about">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
          About <span className="text-accent">Me</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Main Description */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gradient reveal">
              Passionate About User-Centered Design
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed reveal">
              I'm a passionate UI/UX Designer dedicated to crafting clean, intuitive, 
              and user-centered digital experiences. I aim to bridge the gap between 
              technology and users through thoughtful, purpose-driven design that not 
              only looks good but works seamlessly.
            </p>
            <p className="text-muted-foreground leading-relaxed reveal">
              My approach combines creativity with analytical thinking, ensuring every 
              design decision is backed by user research and usability principles. I 
              believe great design should be invisible - it should just work.
            </p>
          </div>

          {/* Key Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 reveal">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold">User-Centered</h4>
                <p className="text-sm text-muted-foreground">Always putting users first</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold">Purpose-Driven</h4>
                <p className="text-sm text-muted-foreground">Design with clear goals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Education */}
        <div className="space-y-6">
          <Card className="glass-card p-8 hover-lift reveal">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent">
                      B.E – Electrical and Electronics Engineering
                    </h4>
                    <p className="text-muted-foreground">
                      Ramco Institute of Technology
                    </p>
                    <p className="text-sm text-muted-foreground">2018 – 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-card p-6 text-center hover-lift reveal">
              <div className="text-3xl font-bold text-accent mb-2">1+</div>
              <div className="text-muted-foreground">Year Experience</div>
            </Card>
            <Card className="glass-card p-6 text-center hover-lift reveal">
              <div className="text-3xl font-bold text-accent mb-2">3+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
