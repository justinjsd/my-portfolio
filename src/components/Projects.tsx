import { Github, Heart, TrendingDown, Smile } from "lucide-react";
import { Button } from "./ui/button";

export const Projects = () => {
  const projects = [
    {
      icon: Heart,
      title: "Heart Disease Prediction Model",
      description:
        "Provided a comparative study of Heart Disease Prediction Model to determine the best one and further go on to use Feature Importance to reduce parameters.",
      github: "https://github.com/justinjsd/HeartDiseasePrediction",
      tags: ["Machine Learning", "Python", "Healthcare"],
    },
    {
      icon: TrendingDown,
      title: "Stock Price Prediction Models",
      description:
        "Comparative Study on the LSTM, BI-LSTM and ARIMA models for stock price prediction based on their RMSE value.",
      github: "https://github.com/justinjsd/StockPredictionModelComparison",
      tags: ["Deep Learning", "Finance", "Time Series"],
    },
    {
      icon: Smile,
      title: "Real Time Human Sentiment Analyzer",
      description:
        "Built an AI-based project that could analyze human emotions and map them onto emoticons using Python with the Keras API.",
      github: "https://github.com/justinjsd/Sentiment-Analysis-to-Select-Revelant-Emoticons",
      tags: ["AI", "Computer Vision", "Keras"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Projects</h2>
          <p className="text-xl text-muted-foreground">
            Innovative solutions built during my time at BITS Pilani
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
