import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      period: "2025 - Present",
      title: "Data Engineer",
      company: "Chalhoub Group",
      achievements: [
        "Leveraged BigQuery on GCP to transform data and deliver analytics in Looker; built custom ingestion pipelines in Python, data transformations in dbt, orchestration in Apache Airflow",
        "Transformed and modeled data in Google BigQuery using dbt and LookML to build a scalable Financial Reporting data mart supporting group-wide Finance and Accounting reporting",
        "Built Data Ingestion Pipelines using Python/Apache Airflow/Google Cloud Functions to load data into GCP Cloud Storage and BigQuery",
        "Worked with CI/CD pipelines in GitLab to automate testing and deployment of ingestion pipelines and dbt models",
        "Built scalable Javascript web apps to automate file ingestion into Cloud Storage and BigQuery using Retool",
        "Led code reviews and approvals for LookML and dbt merge requests, enforcing best practices and optimizing the Semantic Layer",
      ],
    },
    {
      period: "2023 - 2024",
      title: "Associate Analytics Engineer",
      company: "Chalhoub Group",
      achievements: [
        "Built the Finance & Operations (FinOps) Analytics Layer for the Group on Looker leveraging a Google (GCP) powered stack",
        "Created Data Transformation Models using Looker, LookML, SQL and dbt",
        "Recognized as Rookie of the Year (2024) for outstanding contributions in Data & Analytics",
      ],
    },
    {
      period: "2022",
      title: "Trainee - Data & Analytics",
      company: "Chalhoub Group",
      achievements: [
        "Modeled data on Looker built on Google Cloud Platform's BigQuery using LookML",
        "Participated in the migration of the Group Finance's Commercial Data into Google BigQuery and finally into Looker enhancing data governance, security, and adoption",
        "Automated and optimized Daily Sales Reporting to the Group's President reducing manual daily reporting in Power BI (1.5 hours/day) to an automated scheduled Looker report with zero manual effort",
      ],
    },
    {
      period: "2021",
      title: "Project Intern: Cognitive Services",
      company: "Alpha Data",
      achievements: [
        "Developed a Twitter Sentiment Analysis App built on Azure's Web App Services, extracting sentiment from hashtag-based tweets and displaying results in Excel",
        "Hands-on experience in IT management frameworks such as Agile and ITIL",
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
