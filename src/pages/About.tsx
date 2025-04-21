
import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";

const About = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      value: "10,000+",
      label: "Étudiants actifs",
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      value: "500+",
      label: "Cours disponibles",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      value: "15,000+",
      label: "Certifications délivrées",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      value: "50+",
      label: "Pays représentés",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-light to-accent-light py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre Mission
            </h1>
            <p className="text-xl text-gray-700">
              Rendre l'éducation de qualité accessible à tous, partout dans le monde.
              Nous croyons que chaque personne mérite d'avoir accès aux meilleures ressources
              d'apprentissage pour développer ses compétences et réaliser ses ambitions.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary-light mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Fondée en 2023, LearnCertify est née de la conviction que l'éducation
                    devrait être un droit fondamental accessible à tous. Notre plateforme
                    combine technologie de pointe et pédagogie innovante pour offrir une
                    expérience d'apprentissage unique.
                  </p>
                  <p className="text-gray-600">
                    Aujourd'hui, nous sommes fiers de compter plus de 10,000 étudiants
                    actifs et une communauté grandissante d'experts qui partagent leurs
                    connaissances à travers notre plateforme.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                  alt="Notre équipe"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "Nous nous engageons à fournir un contenu éducatif de la plus haute qualité.",
                },
                {
                  title: "Innovation",
                  description: "Nous repoussons constamment les limites de l'apprentissage en ligne.",
                },
                {
                  title: "Inclusion",
                  description: "Nous croyons que l'éducation doit être accessible à tous, sans exception.",
                },
              ].map((value, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
