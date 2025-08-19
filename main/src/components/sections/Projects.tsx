import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import letsDriveImage from "@/assets/Lets Drive.png";
import tripoidImage from "@/assets/Tripoid.png";
import revibeImage from "@/assets/Revibe.png";
import useReveal from "@/hooks/useReveal";
import Section from "../layout/Section";

const Projects = () => {
  useReveal();
  const projects = [
    {
      title: "LET'S DRIVE",
      description: "A mobile app improving the bike rental experience for short to medium-distance travel. Designed for urban users seeking convenience and eco-friendly transport.",
      image: letsDriveImage,
      tools: ["Figma", "FigJam", "Adobe Illustrator"],
      category: "Bike Rental App Design",
      status: "Completed"
    },
    {
      title: "Tripoid",
      description: "An AI-powered travel planner that simplifies trip planning and budgeting with personalized recommendations.",
      image: tripoidImage,
      tools: ["Figma", "Illustrator", "Photoshop"],
      category: "Travel App Design",
      status: "Completed"
    },
    {
      title: "Revibe.codes",
      description: "A code walkthrough platform that helps beginners learn from real-world projects through visual code structures and guided explanations.",
      image: revibeImage,
      tools: ["Figma"],
      category: "Educational Platform",
      status: "Completed"
    }
  ];

  return (
    <Section id="projects">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto reveal">
          A showcase of my recent work in UI/UX design and digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="card-container tilt-card glass-card overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="card-content">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
                <Badge
                  className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {project.status}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <Badge variant="outline" className="border-blue-500 text-blue-500 mb-4 text-sm px-3 py-1">
                  {project.category}
                </Badge>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div>
                  <h4 className="text-sm font-bold mb-3 text-gray-500 tracking-widest">TOOLS USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="secondary" className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
