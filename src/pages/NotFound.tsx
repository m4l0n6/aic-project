import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      <div className="text-center">
        <h1 className="mb-4 font-bold text-4xl">404</h1>
        <p className="mb-4 text-gray-600 text-xl">Oops! Page not found</p>
        <Button variant="outline" asChild>
          <Link to="/">Return to Home</Link>
        </Button>

      </div>
    </div>
  );
};

export default NotFound;
