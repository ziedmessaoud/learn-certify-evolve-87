
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-accent to-primary-dark text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer votre parcours d'apprentissage ?</h2>
        <p className="text-xl mb-8 text-white/90">
          Rejoignez notre communauté d'apprenants et commencez à développer vos compétences dès aujourd'hui.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/register">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              S'inscrire gratuitement
            </Button>
          </Link>
          <Link to="/login">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Se connecter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
