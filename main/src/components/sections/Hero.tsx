import React, { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Eye, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax]");

      parallaxElements.forEach((el) => {
        const parallaxType = el.dataset.parallax;
        let yPercent = 0;

        if (parallaxType === "bg") yPercent = -8;
        if (parallaxType === "text") yPercent = -5;
        if (parallaxType === "image") yPercent = -10;

        gsap.fromTo(
          el,
          { yPercent: 0 },
          {
            yPercent,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-section min-h-screen flex items-center justify-center relative code-bg parallax"
      data-parallax="bg"
    >
      <div className="px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div
            className="flex-1 text-center lg:text-left parallax"
            data-parallax="text"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold reveal">
                  <span className="text-gradient">Designing</span>
                  <br />
                  Purposeful
                  <br />
                  <span className="text-accent">Interfaces</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-muted-foreground reveal">
                  That Just Work
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl reveal">
                UI/UX Designer focused on clean, intuitive digital products that bridge 
                the gap between users and technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal">
                <Button 
                  size="lg" 
                  variant="cta" 
                  className="group"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </Button>
                <Button 
                  size="lg" 
                  variant="glass"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative flex items-center justify-center -mt-10">
              {/* soft glow */}
              <div className="absolute w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-blue-500 to-green-500 opacity-30 blur-3xl animate-pulse"></div>

              {/* circular photo */}
              <figure className="group relative w-[24rem] h-[24rem] rounded-full overflow-hidden border-[10px] border-white shadow-2xl animate-float">
                <img
                  src="/assets/profile.PNG"
                  alt="Nandakumar portrait"
                  className="block w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 scale-105"
                  style={{ objectPosition: "-40% -40%" }}
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-accent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
