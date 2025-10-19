import { Award, Code, Database } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Analytics/Science",
      skills: [
        "SQL",
        "Google Big Query",
        "Looker",
        "LookML",
        "DBT",
        "Python",
        "Tableau",
        "Looker Studio",
        "Git",
        "MS Excel",
      ],
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "Java", "C", "C++"],
    },
  ];

  const certifications = [
    { name: "Python for Everybody", org: "University of Michigan", platform: "Coursera" },
    { name: "Python Data Structures", org: "Coursera", platform: "Coursera" },
    { name: "Git & GitHub", org: "Google", platform: "Coursera" },
    { name: "Analyze Data with Excel", org: "Codecademy", platform: "Codecademy" },
    { name: "BI Dashboards with Tableau", org: "Codecademy", platform: "Codecademy" },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Certifications</h2>
          <p className="text-xl text-muted-foreground">
            Tools and technologies I work with daily
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass p-8 rounded-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
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

        <div className="glass p-8 rounded-2xl">
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

        <div className="glass p-8 rounded-2xl mt-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic text-foreground/90 mb-4">
            "Data really powers everything that we do"
          </blockquote>
          <p className="text-muted-foreground">— Jeff Weiner, Executive Chairman, LinkedIn</p>
        </div>
      </div>
    </section>
  );
};
