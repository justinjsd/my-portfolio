import { Database, TrendingUp, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const highlights = [
    {
      icon: Database,
      title: "Data Analytics",
      description: "Expert in SQL, Looker, DBT, and Python for transforming raw data into insights",
    },
    {
      icon: TrendingUp,
      title: "Business Innovation",
      description: "Driving data-driven decision making and automating complex analytical workflows",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Reducing analysis time from days to seconds through intelligent automation",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div ref={sectionRef} className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">About Me</h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light">
            Passionate about turning data into strategic business advantages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group relative card-matte border border-white/10 p-8 rounded-xl hover:scale-105 hover:border-white/20 transition-all duration-500 scroll-reveal spotlight overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors font-normal">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="group relative card-matte border border-white/10 p-8 md:p-12 rounded-xl space-y-6 scroll-reveal hover:border-white/20 transition-all duration-500 overflow-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">Who Am I?</h3>
            <div className="space-y-5 text-white/75 leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-base md:text-lg">
              <p>
                I'm currently working at the region's largest luxury retail company{" "}
                <span className="text-white font-semibold" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.3)' }}>
                  Chalhoub Group
                </span> as an Analytics
                Engineer with a keen interest in driving business development and innovation.
              </p>
              <p>
                I love delving deep into data and generating insights either by building on it or by
                visualizing information to create actionable insights.
              </p>
              <p>
                I have taken up various courses, certifications and built a portfolio of projects that
                have led me to believe that I can really be of good value to any data-driven team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
