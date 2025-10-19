import { Database, TrendingUp, Zap } from "lucide-react";

export const About = () => {
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
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about turning data into strategic business advantages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass p-8 md:p-12 rounded-2xl space-y-6">
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
