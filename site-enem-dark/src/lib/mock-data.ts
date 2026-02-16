export const studentDashboardData = {
  user: {
    name: "João Silva",
    plan: "Premium ENEM",
    progress: 68,
    streak: 12
  },
  recentLessons: [
    {
      id: "mat-01",
      subject: "Matemática",
      title: "Geometria Analítica: Retas e Planos",
      duration: "45 min",
      completed: false,
      progress: 30
    },
    {
      id: "fis-03",
      subject: "Física",
      title: "Cinemática: Movimento Uniforme",
      duration: "32 min",
      completed: true,
      progress: 100
    }
  ],
  performance: [
    { subject: "Matemática", score: 85 },
    { subject: "Natureza", score: 70 },
    { subject: "Humanas", score: 92 },
    { subject: "Linguagens", score: 78 },
    { subject: "Redação", score: 900 }
  ]
};

export const lessonData = {
  id: "mat-01",
  title: "Geometria Analítica: Equação da Reta",
  subject: "Matemática",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", 
  questions: [
    {
      id: "q1",
      text: "Determine o coeficiente angular da reta que passa pelos pontos A(2, 3) e B(4, 7).",
      options: [
        { id: "a", text: "1" },
        { id: "b", text: "2" },
        { id: "c", text: "3" },
        { id: "d", text: "4" }
      ],
      correctOption: "b"
    }
  ]
};