
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import QuizComponent from "@/components/QuizComponent";
import { Quiz, Course, getQuizById, getCourseById } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

const QuizPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [course, setCourse] = useState<Course | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Simuler un appel API à votre backend Laravel
      const fetchedQuiz = getQuizById(id);
      
      if (fetchedQuiz) {
        setQuiz(fetchedQuiz);
        
        // Récupérer les informations du cours associé
        const fetchedCourse = getCourseById(fetchedQuiz.courseId);
        if (fetchedCourse) {
          setCourse(fetchedCourse);
        }
      }
    }
  }, [id]);

  const handleQuizComplete = (correct: number, total: number) => {
    setQuizCompleted(true);
    setScore({ correct, total });
    
    // Déterminer si l'utilisateur a réussi le quiz (70% de réussite)
    const success = correct / total >= 0.7;
    
    toast({
      title: success ? "Quiz réussi !" : "Quiz non réussi",
      description: success 
        ? `Félicitations ! Vous avez obtenu ${correct} sur ${total} questions.`
        : `Vous avez obtenu ${correct} sur ${total} questions. Essayez encore !`,
      variant: success ? "default" : "destructive",
    });
  };

  const handleGetCertificate = () => {
    // Simuler la génération d'un certificat (à remplacer par un appel à votre API Laravel)
    navigate(`/certificate/${course?.id}`);
  };

  if (!quiz || !course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Chargement du quiz...</h2>
          <p className="text-gray-500">Veuillez patienter</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            className="mb-6 flex items-center text-gray-600"
            onClick={() => navigate(`/course/${course.id}`)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au cours
          </Button>
          
          <Card className="mb-8">
            <CardHeader className="bg-primary text-white">
              <div className="flex items-center mb-2">
                <BookOpen className="h-6 w-6 mr-2" />
                <span className="text-sm opacity-80">{course.title}</span>
              </div>
              <CardTitle className="text-2xl">{quiz.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ce quiz contient {quiz.questions.length} questions.</li>
                  <li>• Répondez à toutes les questions pour terminer le quiz.</li>
                  <li>• Vous pouvez revenir en arrière pour modifier vos réponses.</li>
                  <li>• Un score de 70% ou plus est nécessaire pour réussir.</li>
                  <li>• Une fois le quiz terminé, vous verrez vos résultats.</li>
                  {quizCompleted && score.correct / score.total >= 0.7 && (
                    <li className="text-green-600 font-medium">
                      • Félicitations ! Vous pouvez maintenant obtenir votre certificat.
                    </li>
                  )}
                </ul>
              </div>
              
              {quizCompleted && score.correct / score.total >= 0.7 ? (
                <div className="flex justify-center mt-6">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary-dark flex items-center gap-2"
                    onClick={handleGetCertificate}
                  >
                    <BookOpen className="h-5 w-5" />
                    Obtenir mon certificat
                  </Button>
                </div>
              ) : (
                <QuizComponent 
                  questions={quiz.questions} 
                  onComplete={handleQuizComplete} 
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
