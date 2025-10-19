import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold gradient-text">404</h1>
        <p className="text-2xl text-muted-foreground">Oops! Page not found</p>
        <p className="text-foreground/60">The page you're looking for doesn't exist.</p>
        <Button
          onClick={() => window.location.href = "/"}
          className="bg-primary hover:bg-primary/90 text-primary-foreground mt-6"
          size="lg"
        >
          <Home className="w-4 h-4 mr-2" />
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
