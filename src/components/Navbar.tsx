
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, LogIn, Menu, UserPlus, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">LearnCertify</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary-dark">Accueil</Link>
          <Link to="/courses" className="text-gray-700 hover:text-primary-dark">Cours</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary-dark">À propos</Link>
          <Link to="/login">
            <Button variant="ghost" className="flex items-center gap-1">
              <LogIn className="h-4 w-4 mr-1" />
              Se connecter
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-primary hover:bg-primary-dark text-white flex items-center gap-1">
              <UserPlus className="h-4 w-4 mr-1" />
              S'inscrire
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white p-4 rounded-md shadow-md">
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              to="/courses" 
              className="text-gray-700 hover:text-primary-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cours
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <Link 
              to="/login" 
              className="text-gray-700 hover:text-primary-dark py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Se connecter
            </Link>
            <Link to="/register" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary-dark text-white flex items-center justify-center gap-1">
                <UserPlus className="h-4 w-4 mr-1" />
                S'inscrire
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
