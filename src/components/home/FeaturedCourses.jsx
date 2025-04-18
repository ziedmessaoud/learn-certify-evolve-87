
import { Button } from "@/components/ui/button";
import CourseCard from "@/components/CourseCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { courses } from "@/data/mockData";

const FeaturedCourses = () => {
  const [featuredCourses] = useState(courses.slice(0, 3));

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Cours populaires</h2>
          <Link to="/courses">
            <Button variant="ghost" className="text-primary hover:text-primary-dark">
              Voir tous les cours
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/register">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Rejoindre la communauté
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
