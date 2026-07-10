interface Questions {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface jsExamTypes {
  id: number;
  title: string;
  duration: number;
  questions: Questions[];
}

export const jsExams: jsExamTypes[] = [
  {
    id: 1,
    title: "JavaScript Basics",
    duration: 15,
    questions: [
      {
        id: 1,
        question: "Which keyword is used to declare a variable?",
        options: ["int", "var", "string", "define"],
        correctAnswer: 1,
      },
      {
        id: 2,
        question: "Which method adds an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        correctAnswer: 0,
      },
      {
        id: 3,
        question: "Which operator checks both value and type?",
        options: ["==", "=", "===", "!="],
        correctAnswer: 2,
      },
      {
        id: 4,
        question: "Which value is falsy?",
        options: ["[]", "{}", "'Hello'", "0"],
        correctAnswer: 3,
      },
      {
        id: 5,
        question: "What does array.length return?",
        options: [
          "First element",
          "Last element",
          "Number of elements",
          "Array type",
        ],
        correctAnswer: 2,
      },
    ],
  },
];
