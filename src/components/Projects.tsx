import { Github, Heart, TrendingDown, Smile, Smartphone, Database, Link2, Gamepad2, BookOpen, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";

export const Projects = () => {
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
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Projects</h2>
          <p className="text-xl text-muted-foreground">
            A collection of data engineering, ML, and software projects from my GitHub
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass p-8 rounded-2xl hover:scale-105 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <project.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-primary/50 hover:bg-primary/10"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
