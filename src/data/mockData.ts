
// Note: This data is for development purposes only.
// In the actual implementation, this would be fetched from your Laravel backend.

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  duration: string;
  students: number;
  lessons: number;
  image: string;
  content?: string;
  price?: number;
  level?: 'Débutant' | 'Intermédiaire' | 'Avancé';
  quizId?: string;
}

export interface Quiz {
  id: string;
  title: string;
  courseId: string;
  questions: {
    id: string;
    text: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface Certificate {
  id: string;
  courseId: string;
  courseTitle: string;
  studentId: string;
  studentName: string;
  issueDate: Date;
  instructor: string;
}

// Mock data for courses
export const courses: Course[] = [
  {
    id: "1",
    title: "Introduction au développement web moderne",
    description: "Découvrez les fondamentaux du développement web avec HTML, CSS et JavaScript.",
    instructor: "Marie Dupont",
    category: "Développement Web",
    duration: "10 heures",
    students: 1249,
    lessons: 15,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
    level: "Débutant",
    quizId: "quiz1",
    content: "# Introduction au développement web moderne\n\nBienvenue dans ce cours d'introduction au développement web moderne. Dans ce cours, vous apprendrez les fondamentaux du développement web, y compris HTML, CSS et JavaScript.\n\n## Objectifs du cours\n\n- Comprendre les bases du HTML\n- Maîtriser les fondamentaux du CSS\n- Apprendre les principes de base de JavaScript\n- Créer votre premier site web interactif\n\n## Module 1: HTML - La structure de base\n\nHyperText Markup Language (HTML) est le langage standard pour créer des pages web. Il définit la structure et le contenu de vos pages.\n\nExemple de code HTML basique:\n\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Ma première page</title>\n</head>\n<body>\n  <h1>Bonjour le monde!</h1>\n  <p>Ceci est un paragraphe.</p>\n</body>\n</html>\n```\n"
  },
  {
    id: "2",
    title: "React.js pour les débutants",
    description: "Apprenez à créer des applications web modernes avec React, la bibliothèque JavaScript la plus populaire.",
    instructor: "Thomas Martin",
    category: "JavaScript",
    duration: "12 heures",
    students: 843,
    lessons: 20,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    level: "Intermédiaire",
    quizId: "quiz2"
  },
  {
    id: "3",
    title: "Bases de données avec MySQL",
    description: "Maîtrisez les concepts essentiels des bases de données relationnelles et le langage SQL.",
    instructor: "Sophie Bernard",
    category: "Bases de données",
    duration: "8 heures",
    students: 567,
    lessons: 12,
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhdGFiYXNlfGVufDB8fDB8fHww",
    level: "Débutant",
    quizId: "quiz3"
  },
  {
    id: "4",
    title: "Python pour la science des données",
    description: "Apprenez à utiliser Python pour l'analyse de données, la visualisation et l'apprentissage automatique.",
    instructor: "Pierre Durand",
    category: "Science des données",
    duration: "15 heures",
    students: 1892,
    lessons: 25,
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHB5dGhvbnxlbnwwfHwwfHx8MA%3D%3D",
    level: "Intermédiaire",
    quizId: "quiz4"
  },
  {
    id: "5",
    title: "DevOps et Intégration Continue",
    description: "Découvrez les pratiques modernes de déploiement et d'automatisation pour livrer des logiciels de meilleure qualité.",
    instructor: "Jeanne Moreau",
    category: "DevOps",
    duration: "20 heures",
    students: 421,
    lessons: 18,
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2b3BzfGVufDB8fDB8fHww",
    level: "Avancé",
    quizId: "quiz5"
  },
  {
    id: "6",
    title: "UX/UI Design Fundamentals",
    description: "Apprenez à concevoir des interfaces utilisateur intuitives et esthétiques pour vos applications web et mobiles.",
    instructor: "Camille Roux",
    category: "Design",
    duration: "14 heures",
    students: 735,
    lessons: 16,
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    level: "Débutant",
    quizId: "quiz6"
  }
];

// Mock data for quizzes
export const quizzes: Quiz[] = [
  {
    id: "quiz1",
    title: "Quiz: Introduction au développement web",
    courseId: "1",
    questions: [
      {
        id: "q1-1",
        text: "Quelle balise HTML est utilisée pour définir un paragraphe?",
        options: ["<paragraph>", "<p>", "<para>", "<text>"],
        correctAnswer: 1
      },
      {
        id: "q1-2",
        text: "Comment définit-on un style CSS en ligne?",
        options: [
          "Avec l'attribut 'style'",
          "Avec une balise <css>",
          "Avec l'attribut 'class'",
          "Avec l'attribut 'format'"
        ],
        correctAnswer: 0
      },
      {
        id: "q1-3",
        text: "Quelle fonction JavaScript est utilisée pour sélectionner un élément HTML par son ID?",
        options: [
          "document.query()",
          "document.findElement()",
          "document.getElementById()",
          "document.selectElement()"
        ],
        correctAnswer: 2
      },
      {
        id: "q1-4",
        text: "Quelle propriété CSS permet de définir la couleur du texte?",
        options: ["text-color", "font-color", "color", "text-style"],
        correctAnswer: 2
      },
      {
        id: "q1-5",
        text: "Dans quel élément HTML place-t-on le JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "quiz2",
    title: "Quiz: React.js pour les débutants",
    courseId: "2",
    questions: [
      {
        id: "q2-1",
        text: "Qu'est-ce que JSX dans React?",
        options: [
          "Une extension JavaScript qui permet d'écrire du HTML dans React",
          "Un nouveau langage de programmation",
          "Un outil de compilation JavaScript",
          "Une bibliothèque pour les animations"
        ],
        correctAnswer: 0
      },
      {
        id: "q2-2",
        text: "Comment créer un composant fonctionnel en React?",
        options: [
          "function MyComponent() { return <div>Hello</div>; }",
          "class MyComponent { render() { return <div>Hello</div>; } }",
          "const MyComponent = <div>Hello</div>;",
          "create.component(() => <div>Hello</div>);"
        ],
        correctAnswer: 0
      },
      {
        id: "q2-3",
        text: "Qu'est-ce que le 'state' dans React?",
        options: [
          "Un pays",
          "Un objet qui stocke des données pour un composant",
          "Une fonction pour mettre à jour le DOM",
          "Une bibliothèque externe à React"
        ],
        correctAnswer: 1
      }
    ]
  }
];

// Mock data for certificates
export const certificates: Certificate[] = [
  {
    id: "cert1",
    courseId: "1",
    courseTitle: "Introduction au développement web moderne",
    studentId: "student1",
    studentName: "Jean Dupont",
    issueDate: new Date("2023-04-15"),
    instructor: "Marie Dupont"
  },
  {
    id: "cert2",
    courseId: "3",
    courseTitle: "Bases de données avec MySQL",
    studentId: "student1",
    studentName: "Jean Dupont",
    issueDate: new Date("2023-05-20"),
    instructor: "Sophie Bernard"
  }
];

// Mock data for users (students and teachers)
export const users = {
  students: [
    {
      id: "student1",
      name: "Jean Dupont",
      email: "jean.dupont@example.com",
      enrolledCourses: ["1", "3", "4"],
      completedCourses: ["1", "3"],
      certificates: ["cert1", "cert2"]
    },
    {
      id: "student2",
      name: "Marie Martin",
      email: "marie.martin@example.com",
      enrolledCourses: ["2", "5"],
      completedCourses: [],
      certificates: []
    }
  ],
  teachers: [
    {
      id: "teacher1",
      name: "Marie Dupont",
      email: "marie.dupont@example.com",
      courses: ["1"]
    },
    {
      id: "teacher2",
      name: "Thomas Martin",
      email: "thomas.martin@example.com",
      courses: ["2"]
    },
    {
      id: "teacher3",
      name: "Sophie Bernard",
      email: "sophie.bernard@example.com",
      courses: ["3"]
    }
  ]
};

// Helper function to get a course by ID
export const getCourseById = (id: string): Course | undefined => {
  return courses.find(course => course.id === id);
};

// Helper function to get a quiz by ID
export const getQuizById = (id: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.id === id);
};

// Helper function to get a quiz by course ID
export const getQuizByCourseId = (courseId: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.courseId === courseId);
};

// Helper function to get certificates by student ID
export const getCertificatesByStudentId = (studentId: string): Certificate[] => {
  return certificates.filter(cert => cert.studentId === studentId);
};

// Helper function to get courses by teacher ID
export const getCoursesByTeacherId = (teacherId: string): Course[] => {
  const teacherCourseIds = users.teachers.find(t => t.id === teacherId)?.courses || [];
  return courses.filter(course => teacherCourseIds.includes(course.id));
};

// Helper function to get enrolled courses by student ID
export const getEnrolledCoursesByStudentId = (studentId: string): Course[] => {
  const enrolledCourseIds = users.students.find(s => s.id === studentId)?.enrolledCourses || [];
  return courses.filter(course => enrolledCourseIds.includes(course.id));
};
