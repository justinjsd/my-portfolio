import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState, useEffect, useRef } from "react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "5s" }} />
      
      <div ref={sectionRef} className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Let's Connect</h2>
          <p className="text-xl text-muted-foreground">
            Have a project in mind or just want to chat? Reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="glass p-6 rounded-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all scroll-reveal">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">Get in touch via email</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all cursor-pointer scroll-reveal">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Connect professionally</p>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all cursor-pointer scroll-reveal">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 w-12 h-12 rounded-xl flex items-center justify-center">
                  <Github className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-sm text-muted-foreground">Check out my code</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl scroll-reveal hover:shadow-[0_0_40px_rgba(14,165,233,0.2)] transition-all">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
