import { Github, Heart, TrendingDown, Smile, Smartphone, Database, Link2, Gamepad2, BookOpen, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

export const Projects = () => {
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
  const projects = [
    {
      icon: Smartphone,
      title: "iOS Todo App",
      description:
        "A completely Vibe Coded beautiful, modern todo application with iOS design patterns and smooth animations.",
      github: "https://github.com/justinjsd/ios-todo-app",
      tags: ["CSS", "UI/UX", "iOS Design"],
    },
    {
      icon: Database,
      title: "Stock Market Data Pipeline",
      description:
        "Building a comprehensive data pipeline using Apache Airflow for stock market data processing and analysis.",
      github: "https://github.com/justinjsd/stock-market-data-pipeline",
      tags: ["Python", "Airflow", "Apache Spark", "PostgreSQL", "MinIO"],
    },
    {
      icon: Link2,
      title: "Blockchain Implementation",
      description:
        "My own take on the implementation of a simple blockchain from scratch. Work in Progress.",
      github: "https://github.com/justinjsd/blockchain",
      tags: ["Python", "Blockchain", "Cryptography"],
    },
    {
      icon: Gamepad2,
      title: "PyGame Projects",
      description:
        "A set of fun short Python pygame projects that I've worked on and continue to add to.",
      github: "https://github.com/justinjsd/pygame",
      tags: ["Python", "PyGame", "Game Dev"],
    },
    {
      icon: BookOpen,
      title: "Python Programming MOOC",
      description:
        "Python MOOC from University of Helsinki completed as of 1st Feb 2025. Advanced Python topics and exercises.",
      github: "https://github.com/justinjsd/python-exercises",
      tags: ["Python", "Learning", "Exercises"],
    },
    {
      icon: BarChart3,
      title: "Analytics Engineering with DBT",
      description:
        "A repository focusing on analytics engineering, particularly using dbt on the Northwind Sample dataset.",
      github: "https://github.com/justinjsd/analytics-engineering",
      tags: ["BigQuery", "SQL", "DBT"],
    },
    {
      icon: Smile,
      title: "Real Time Human Sentiment Analyzer",
      description:
        "AI-based project that analyzes human emotions and maps them onto emoticons using sentiment analysis.",
      github: "https://github.com/justinjsd/Sentiment-Analysis-to-Select-Revelant-Emoticons",
      tags: ["AI", "Python", "Sentiment Analysis"],
    },
    {
      icon: Heart,
      title: "Heart Disease Prediction Model",
      description:
        "Research on predicting heart disease using various machine learning algorithms with feature importance analysis.",
      github: "https://github.com/justinjsd/HeartDiseasePrediction",
      tags: ["Machine Learning", "Healthcare", "Jupyter"],
    },
    {
      icon: TrendingDown,
      title: "Stock Price Prediction Comparison",
      description:
        "Compares three models (LSTM, BI-LSTM and ARIMA) for stock price prediction and analyzes RMSE to find the best model.",
      github: "https://github.com/justinjsd/StockPredictionModelComparison",
      tags: ["Deep Learning", "Finance", "Time Series"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div ref={sectionRef} className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Projects</h2>
          <p className="text-xl md:text-2xl text-white/70 font-light">
            A collection of data engineering, ML, and software projects from my GitHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative card-matte border border-white/10 p-8 rounded-xl hover:scale-105 hover:border-white/20 transition-all duration-500 flex flex-col scroll-reveal spotlight overflow-hidden ${
                index === projects.length - 1 && projects.length % 3 === 1 ? 'lg:col-start-2' : ''
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <project.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-white/70 leading-relaxed mb-6 flex-grow group-hover:text-white/90 transition-colors">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-white/20 hover:bg-white hover:text-black text-white mt-auto transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
