import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      period: "May 2023 - Present",
      title: "Data Analytics Associate",
      company: "Chalhoub Group",
      achievements: [
        "Developed comprehensive Logistics Location Optimization Report, reducing analysis time from days to 30-45 seconds",
        "Automated end-to-end analysis for FACES brand, driving efficiency through Scorecard Dashboard",
        "Engineered Python script for LookML code generation, achieving 80-90% reduction in coding time",
        "Led automated Sales & Stock reporting for Luxury Tech Joint Ventures (Dyson & Devialet)",
      ],
    },
    {
      period: "May 2022 - May 2023",
      title: "Data Analytics Trainee",
      company: "Chalhoub Group",
      achievements: [
        "Led Operation Look(er) Ahead: Migration of Group Finance reporting from Power BI to Looker",
        "Automated Daily Sales Reporting, reducing workload from 1.5 hours to zero with automatic scheduling",
        "Optimized Group Supply Chain Dashboard performance by 85%",
        "Implemented Data Maturity Assessment Framework for Christofle, generating ~$30K value",
      ],
    },
    {
      period: "January 2022 - July 2022",
      title: "Software Developer and Analytics Intern",
      company: "Synergein Technology",
      achievements: [
        "Built fully functional IT Service Desk System using C# .NET",
        "Provided data-driven insights for various clients using Microsoft Excel",
        "Built database and stored procedures using Microsoft SQL Server Studio",
      ],
    },
    {
      period: "June 2021 - August 2021",
      title: "AI & Cognitive Services Intern",
      company: "Alpha Data",
      achievements: [
        "Gained insights into IT service management systems (Agile and ITIL)",
        "Developed applications using Microsoft Azure's Logic Apps and Cognitive Service APIs",
        "Built Twitter Sentiment Analysis App for data-driven user trend insights",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey in data analytics</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title + exp.company}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />

              <div className="glass p-6 md:p-8 rounded-2xl ml-16 md:ml-0 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>

                <div className="flex items-start gap-3 mb-4">
                  <Briefcase className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-foreground/80 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-primary mt-1.5 flex-shrink-0">▪</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
