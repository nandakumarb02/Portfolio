import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Eye, Mail, MousePointer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profileImage from "@/assets/profile-image.jpg";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      const follower = document.querySelector('.custom-cursor-follower') as HTMLElement;
      
      if (cursor && follower) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        
        follower.style.left = e.clientX - 20 + 'px';
        follower.style.top = e.clientY - 20 + 'px';
      }
    };

    const handleMouseEnter = () => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      const follower = document.querySelector('.custom-cursor-follower') as HTMLElement;
      
      if (cursor && follower) {
        cursor.style.transform = 'scale(1.5)';
        follower.style.transform = 'scale(1.5)';
      }
    };

    const handleMouseLeave = () => {
      const cursor = document.querySelector('.custom-cursor') as HTMLElement;
      const follower = document.querySelector('.custom-cursor-follower') as HTMLElement;
      
      if (cursor && follower) {
        cursor.style.transform = 'scale(1)';
        follower.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    const interactiveElements = document.querySelectorAll('button, a, .hover-lift');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    });

    const elementsToReveal = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale');
    elementsToReveal.forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div className="custom-cursor"></div>
      <div className="custom-cursor-follower"></div>

      <div className="min-h-screen flex items-center justify-center relative parallax-bg page-enter">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left scroll-reveal">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 hover-float">
                      <MousePointer className="h-4 w-4" />
                      <span>Hello, I'm Nanda Kumar</span>
                    </div>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                    <span className="text-shimmer block">Designing</span>
                    <span className="text-gradient block">Purposeful</span>
                    <span className="text-foreground block">Interfaces</span>
                  </h1>
                  
                  <h2 className="text-3xl md:text-4xl text-primary font-light">
                    That Just Work
                  </h2>
                </div>
                
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  UI/UX Designer focused on clean, intuitive digital products that bridge 
                  the gap between users and technology.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    variant="cta" 
                    className="group magnetic-btn morph-btn hover-lift text-lg px-8 py-6"
                    onClick={() => navigate('/projects')}
                  >
                    <Eye className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                    View Projects
                    <div className="pulse-ring bg-highlight/20"></div>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="group magnetic-btn hover-lift text-lg px-8 py-6 border-2 hover:border-primary"
                    onClick={() => navigate('/contact')}
                  >
                    <Mail className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex-1 flex justify-center lg:justify-end scroll-reveal-scale">
              <div className="relative">
                <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden glass-card p-4 hover-lift tilt-3d">
                  <img
                    src={profileImage}
                    alt="Nanda Kumar - UI/UX Designer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 glass-card px-6 py-3 rounded-full hover-float">
                  <span className="text-lg font-semibold text-primary">UI/UX</span>
                </div>
                <div className="absolute -bottom-8 -left-8 glass-card px-6 py-3 rounded-full hover-float" style={{animationDelay: '1s'}}>
                  <span className="text-lg font-semibold text-highlight">Designer</span>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <ArrowDown className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;