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
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div ref={sectionRef} className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Skills & Certifications</h2>
          <p className="text-xl md:text-2xl text-white/70 font-light">
            Tools and technologies I work with daily
          </p>
        </div>

        <div className="mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group relative card-matte border border-white/10 p-8 rounded-xl hover:border-white/20 transition-all duration-500 scroll-reveal spotlight overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-default hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="group relative card-matte border border-white/10 p-8 rounded-xl scroll-reveal hover:border-white/20 transition-all duration-500 spotlight overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, certIndex) => (
                <div
                  key={cert.name}
                  className="group/cert p-4 bg-white/[0.005] border border-white/10 rounded-lg hover:border-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${certIndex * 50}ms` }}
                >
                  <p className="font-bold mb-1 text-white">{cert.name}</p>
                  <p className="text-sm text-white/70 group-hover/cert:text-white/90 transition-colors">
                    {cert.org} • {cert.platform}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="group relative card-matte border border-white/10 p-8 rounded-xl mt-8 text-center scroll-reveal hover:border-white/20 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <blockquote className="text-2xl md:text-3xl font-light italic text-white/90 mb-4 group-hover:text-white transition-colors">
              "Data really powers everything that we do"
            </blockquote>
            <p className="text-white/70 group-hover:text-white/90 transition-colors">— Jeff Weiner, Executive Chairman, LinkedIn</p>
          </div>
        </div>
      </div>
    </section>
  );
};
