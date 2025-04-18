
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary-light via-white to-accent-light py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apprenez, certifiez, <span className="text-primary">évoluez</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Développez vos compétences avec notre plateforme e-learning complète. Accédez à des cours de qualité, passez des quiz et obtenez des certifications reconnues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary-dark gap-2">
                <UserPlus className="h-5 w-5" />
                Commencer maintenant
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="gap-2">
                Se connecter
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="E-learning Platform" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
