import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Trophy, TrendingUp, Users, GraduationCap } from "lucide-react";

const ExperiencePage = () => {
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

  const achievements = [
    {
      icon: TrendingUp,
      title: "User Engagement",
      value: "40%",
      description: "Increased user engagement through improved UX flows"
    },
    {
      icon: Users,
      title: "User Retention",
      value: "60%",
      description: "Improved user retention with mobile-first design"
    },
    {
      icon: Trophy,
      title: "Projects Delivered",
      value: "25+",
      description: "Successfully delivered projects on time"
    }
  ];

  const responsibilities = [
    "Designed mobile-first platforms with user-centric layouts",
    "Enhanced UX flows to improve conversion and retention rates",
    "Conducted comprehensive usability testing and implemented feedback",
    "Collaborated with cross-functional teams including developers and product managers",
    "Created design systems and maintained consistency across products",
    "Performed user research and competitive analysis"
  ];

  return (
    <div className="min-h-screen py-20 parallax-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            My <span className="text-gradient">Experience</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey in creating exceptional digital experiences
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="mb-16 scroll-reveal">
          <Card className="glass-card p-12 hover-lift">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">UI/UX Designer</h2>
                    <p className="text-primary text-lg font-medium">Opseazy Solutions Private Limited</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="h-5 w-5" />
                    <span>Dec 2023 – Present</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5" />
                    <span>Remote • Full-time</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Badge variant="outline" className="border-highlight text-highlight text-sm px-4 py-2">
                    Current Position
                  </Badge>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold mb-6">Key Responsibilities</h3>
                <div className="grid gap-4">
                  {responsibilities.map((responsibility, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/20 hover:bg-card/80 transition-all duration-300 hover-lift"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 scroll-reveal">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="glass-card p-8 text-center hover-lift tilt-3d scroll-reveal-scale"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary/10 flex items-center justify-center hover-float">
                    <achievement.icon className="h-10 w-10 text-primary" />
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-highlight mb-4">
                  {achievement.value}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{achievement.title}</h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="scroll-reveal">
          <h2 className="text-4xl font-bold text-center mb-12">
            Professional <span className="text-gradient">Timeline</span>
          </h2>
          
          <Card className="glass-card p-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
              
              <div className="space-y-12">
                {/* Current Role */}
                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-primary text-white">2023 - Present</Badge>
                      <Badge variant="outline" className="border-highlight text-highlight">Current</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">UI/UX Designer</h3>
                    <p className="text-primary text-lg font-medium mb-4">Opseazy Solutions Private Limited</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Leading design initiatives for mobile-first platforms, focusing on user-centric design 
                      approaches that enhance user engagement and drive business growth.
                    </p>
                  </div>
                </div>

                {/* Education */}
                <div className="relative flex items-start gap-8">
                  <div className="w-16 h-16 rounded-full bg-highlight flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-highlight text-white">2018 - 2022</Badge>
                      <Badge variant="outline">Education</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">B.E – Electrical and Electronics Engineering</h3>
                    <p className="text-highlight text-lg font-medium mb-4">Ramco Institute of Technology</p>
                    <p className="text-muted-foreground leading-relaxed">
                      Built strong analytical and problem-solving foundations that support my design thinking 
                      and technical understanding of user interface development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;