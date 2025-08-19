import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// Import project images
import projectLetsDrive from "@/assets/project-letsdrive.jpg";
import projectTripoid from "@/assets/project-tripoid.jpg";
import projectRevibe from "@/assets/project-revibe.jpg";

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

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

  const projects = [
    {
      id: 1,
      title: "LET'S DRIVE",
      category: "Mobile App",
      description: "A mobile app improving the bike rental experience for short to medium-distance travel. Designed for urban users seeking convenience and eco-friendly transport.",
      fullDescription: "LET'S DRIVE revolutionizes urban mobility by providing a seamless bike rental experience. The app features intuitive booking, real-time bike availability, route optimization, and integrated payment systems. The design focuses on quick decision-making and reducing friction in the rental process.",
      image: projectLetsDrive,
      tools: ["Figma", "FigJam", "Adobe Illustrator"],
      features: [
        "Real-time bike availability mapping",
        "Integrated payment gateway",
        "Route optimization and navigation",
        "User rating and feedback system",
        "Eco-friendly impact tracking"
      ],
      link: "#",
      github: "#",
      status: "Live",
      year: "2024"
    },
    {
      id: 2,
      title: "Tripoid",
      category: "Web Application",
      description: "An AI-powered travel planner that simplifies trip planning and budgeting with personalized recommendations.",
      fullDescription: "Tripoid leverages artificial intelligence to create personalized travel experiences. The platform analyzes user preferences, budget constraints, and travel history to suggest optimal itineraries, accommodations, and activities. The interface prioritizes clarity and ease of use for stress-free trip planning.",
      image: projectTripoid,
      tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      features: [
        "AI-powered trip recommendations",
        "Budget optimization tools",
        "Collaborative trip planning",
        "Real-time price tracking",
        "Local insights and recommendations"
      ],
      link: "#",
      github: "#",
      status: "In Development",
      year: "2024"
    },
    {
      id: 3,
      title: "Revibe.codes",
      category: "Educational Platform",
      description: "A code walkthrough platform that helps beginners learn from real-world projects through visual code structures and guided explanations.",
      fullDescription: "Revibe.codes bridges the gap between theory and practice in programming education. The platform offers interactive code walkthroughs, visual code structure mapping, and step-by-step explanations of real-world projects. The design emphasizes clarity and progressive learning.",
      image: projectRevibe,
      tools: ["Figma"],
      features: [
        "Interactive code walkthroughs",
        "Visual code structure mapping",
        "Progressive learning paths",
        "Community-driven content",
        "Real-world project examples"
      ],
      link: "#",
      github: "#",
      status: "Coming Soon",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen py-20 parallax-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 scroll-reveal">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            My <span className="text-gradient">Projects</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing digital experiences that solve real problems and delight users
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="glass-card overflow-hidden hover-lift tilt-3d group cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <Badge 
                  className={`absolute top-4 right-4 ${
                    project.status === 'Live' ? 'bg-green-500' :
                    project.status === 'In Development' ? 'bg-highlight' :
                    'bg-primary'
                  } text-white`}
                >
                  {project.status}
                </Badge>

                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="lg" 
                    className="magnetic-btn bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                  >
                    <Eye className="mr-2 h-5 w-5" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-primary text-primary">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <Badge 
                      key={toolIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 magnetic-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle external link
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 magnetic-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Handle github link
                    }}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto glass-card border-border/20">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 z-10"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl mb-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6">
                    <Badge 
                      className={`mb-4 ${
                        selectedProject.status === 'Live' ? 'bg-green-500' :
                        selectedProject.status === 'In Development' ? 'bg-highlight' :
                        'bg-primary'
                      } text-white`}
                    >
                      {selectedProject.status}
                    </Badge>
                    <h2 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-white/80 text-lg">{selectedProject.category} • {selectedProject.year}</p>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">About the Project</h3>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      {selectedProject.fullDescription}
                    </p>

                    <h4 className="text-xl font-bold mb-4">Tools Used</h4>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {selectedProject.tools.map((tool: string, index: number) => (
                        <Badge key={index} className="bg-primary text-white">
                          {tool}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button className="magnetic-btn">
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Live Demo
                      </Button>
                      <Button variant="outline" className="magnetic-btn">
                        <Github className="mr-2 h-5 w-5" />
                        View Code
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-6">Key Features</h4>
                    <div className="space-y-4">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;