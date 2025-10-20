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
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning data into strategic business advantages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass p-8 rounded-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all duration-300 scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass p-8 md:p-12 rounded-2xl space-y-6 scroll-reveal hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all duration-300">
          <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              I'm currently working at the region's largest luxury retail company{" "}
              <span className="text-primary font-semibold">Chalhoub Group</span> as an Analytics
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
    </section>
  );
};
