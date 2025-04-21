
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";
import CourseCard from "@/components/CourseCard";
import { courses, courseCategories } from "@/data/mockData";

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [level, setLevel] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  // Filter courses based on search query, category, and level
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || course.category === selectedCategory;
    const matchesLevel = !level || course.level === level;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Sort courses
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return parseInt(b.id) - parseInt(a.id);
      case "popular":
        return b.students - a.students;
      case "price-low":
        return (a.price || 0) - (b.price || 0);
      case "price-high":
        return (b.price || 0) - (a.price || 0);
      default:
        return 0;
    }
  });

  // Group courses by category for the category tabs
  const coursesByCategory = courseCategories.reduce((acc, category) => {
    acc[category.name] = filteredCourses.filter(course => course.category === category.name);
    return acc;
  }, {} as Record<string, typeof courses>);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gradient-to-r from-primary-light to-accent-light py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explorez nos cours</h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Découvrez une large gamme de cours pour développer vos compétences et obtenir des certifications reconnues
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher des cours..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
            <Button className="bg-primary hover:bg-primary-dark">
              Rechercher
            </Button>
          </div>
        </div>
      </div>
      
      <main className="flex-grow bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filtres */}
            <div className="lg:w-1/4">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Filter className="h-5 w-5 mr-2" />
                        Filtres
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Catégorie</label>
                          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger>
                              <SelectValue placeholder="Toutes les catégories" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="">Toutes les catégories</SelectItem>
                              {courseCategories.map(category => (
                                <SelectItem key={category.id} value={category.name}>
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Niveau</label>
                          <Select value={level} onValueChange={setLevel}>
                            <SelectTrigger>
                              <SelectValue placeholder="Tous les niveaux" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="">Tous les niveaux</SelectItem>
                              <SelectItem value="Débutant">Débutant</SelectItem>
                              <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                              <SelectItem value="Avancé">Avancé</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Trier par</label>
                          <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger>
                              <SelectValue placeholder="Les plus récents" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="newest">Les plus récents</SelectItem>
                              <SelectItem value="popular">Les plus populaires</SelectItem>
                              <SelectItem value="price-low">Prix croissant</SelectItem>
                              <SelectItem value="price-high">Prix décroissant</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Catégories populaires</h3>
                      <div className="flex flex-wrap gap-2">
                        {courseCategories.map(category => (
                          <Badge 
                            key={category.id}
                            variant={selectedCategory === category.name ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setSelectedCategory(selectedCategory === category.name ? "" : category.name)}
                          >
                            {category.name}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Liste des cours */}
            <div className="lg:w-3/4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {sortedCourses.length} cours disponibles
                </h2>
              </div>
              
              <Tabs defaultValue="all" className="mb-8">
                <TabsList>
                  <TabsTrigger value="all">Tous</TabsTrigger>
                  {courseCategories.map(category => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <TabsContent value="all" className="mt-6">
                  {sortedCourses.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {sortedCourses.map(course => (
                        <CourseCard key={course.id} {...course} />
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="pt-6 text-center py-12">
                        <p className="text-gray-500">Aucun cours ne correspond à vos critères de recherche.</p>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>
                
                {courseCategories.map(category => (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    {coursesByCategory[category.name]?.length > 0 ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {coursesByCategory[category.name].map(course => (
                          <CourseCard key={course.id} {...course} />
                        ))}
                      </div>
                    ) : (
                      <Card>
                        <CardContent className="pt-6 text-center py-12">
                          <p className="text-gray-500">Aucun cours disponible dans cette catégorie.</p>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>
                ))}
              </Tabs>
              
              {/* Pagination (exemple simple) */}
              {sortedCourses.length > 0 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center gap-1">
                    <Button variant="outline" size="sm" disabled>
                      Précédent
                    </Button>
                    <Button variant="outline" size="sm" className="bg-primary text-white">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      Suivant
                    </Button>
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
