
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sophie L.",
    role: "Développeuse web",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "J'ai pu développer considérablement mes compétences grâce aux cours disponibles sur cette plateforme. Les certifications m'ont aidée à décrocher un nouveau poste !"
  },
  {
    name: "Thomas D.",
    role: "Étudiant en informatique",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Les quiz interactifs m'ont permis de consolider mes connaissances. Le format des cours est parfait pour apprendre à mon rythme."
  },
  {
    name: "Julie M.",
    role: "Chef de projet digital",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "En tant qu'enseignante sur la plateforme, j'apprécie la facilité avec laquelle je peux créer et partager du contenu avec mes étudiants."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Ce que disent nos utilisateurs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4" 
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
