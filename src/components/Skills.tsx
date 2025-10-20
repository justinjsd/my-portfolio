import { Award, Database } from "lucide-react";
import { useEffect, useRef } from "react";

export const Skills = () => {
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
  const skillCategories = [
    {
      icon: Database,
      title: "Data & Analytics Engineering",
      skills: [
        "SQL",
        "Python",
        "dbt (Data Build Tool)",
        "Apache Airflow",
        "Google Cloud Platform (GCP)",
        "BigQuery",
        "Looker & LookML",
        "Retool",
        "Git",
      ],
    },
  ];

  const certifications = [
    { name: "Analytics Engineer Bootcamp", org: "dbt Labs", platform: "dbt Labs" },
    { name: "Preparing your data with BigQuery", org: "Google", platform: "Google Cloud" },
    { name: "Certified SAFe Agile Practitioner", org: "Scaled Agile", platform: "SAFe" },
    { name: "Python Data Structures", org: "Coursera", platform: "Coursera" },
    { name: "Git & GitHub", org: "Google", platform: "Coursera" },
    { name: "Business Intelligence with Tableau", org: "Codecademy", platform: "Codecademy" },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      
      <div ref={sectionRef} className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Certifications</h2>
          <p className="text-xl text-muted-foreground">
            Tools and technologies I work with daily
          </p>
        </div>

        <div className="mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass p-8 rounded-2xl hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all duration-300 scroll-reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-2xl scroll-reveal hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
              >
                <p className="font-semibold mb-1">{cert.name}</p>
                <p className="text-sm text-muted-foreground">
                  {cert.org} • {cert.platform}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-8 rounded-2xl mt-8 text-center scroll-reveal hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all duration-300">
          <blockquote className="text-2xl md:text-3xl font-light italic text-foreground/90 mb-4">
            "Data really powers everything that we do"
          </blockquote>
          <p className="text-muted-foreground">— Jeff Weiner, Executive Chairman, LinkedIn</p>
        </div>
      </div>
    </section>
  );
};
