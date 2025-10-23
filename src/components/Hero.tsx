import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background elements with enhanced effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-white/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

        {/* Rotating rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-rotate-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/[0.03] rounded-full animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      <div ref={heroRef} className="container mx-auto relative z-10 transition-transform duration-300 ease-out">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="gradient-text animate-glow-pulse">Justin David</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Data & Analytics Engineer 🚀
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Building the Data space for various clients across the Middle East at{" "}
            <span className="text-white font-semibold relative inline-block">
              TRKKN MENA
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></span>
            </span>
            . Passionate about driving business development through innovative data & analytics solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="group bg-white hover:bg-white/90 text-black px-8 py-6 text-lg rounded-lg font-medium spotlight transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-lg font-medium transition-all hover:scale-105 hover:border-white/40"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="pt-12 animate-bounce" style={{ animationDelay: "0.8s" }}>
            <ArrowDown className="w-8 h-8 mx-auto text-white/50" />
          </div>
        </div>
      </div>
    </section>
  );
};
