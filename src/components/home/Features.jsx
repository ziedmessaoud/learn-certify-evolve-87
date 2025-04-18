
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, CheckCircle, GraduationCap } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Cours de qualité",
    description: "Accédez à des cours créés par des experts reconnus dans leur domaine.",
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-primary" />,
    title: "Quiz interactifs",
    description: "Testez vos connaissances avec des quiz interactifs à la fin de chaque cours.",
  },
  {
    icon: <GraduationCap className="h-12 w-12 text-primary" />,
    title: "Certifications",
    description: "Obtenez des certifications reconnues pour valoriser vos compétences.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-accent-light to-primary-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pourquoi choisir notre plateforme ?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-10 px-6 text-center">
                <div className="mb-4 inline-flex p-3 rounded-full bg-primary-light text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
