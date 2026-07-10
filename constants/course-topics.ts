import { BookText, Lock } from "lucide-react";
import { CourseTopicTypes } from "../types/curriculum";

export const courseTopics: CourseTopicTypes[] = [
  {
    id: 1,
    period: "Week 1-4",
    description:
      "Advanced Story telling techniques for writers Personas,Characters,Plots",
    courseList: [
      {
        list: [
          { title: "Introduction", locked: true },
          {
            title: "Course Overview",
            type: "lesson",
            locked: true,
          },
          {
            title: "Course Exercises/References Files",
            type: "pdf",
            file: "/Js-basics.pdf",
          },
          {
            title: "Code Editor Installation (Optional if you have one)",
            locked: true,
          },
          {
            title: "Embedding PHP to HTML",
            examId: 1,
            type: "exam",
            questions: "1 QUESTIONS",
            duration: "15 MINUTES",
          },
        ],
        firstIcon: BookText,
        lastIcon: Lock,
      },
    ],
  },
  {
    id: 2,
    period: "Week 5-8",
    description:
      "Advanced Story telling techniques for writers Personas,Characters,Plots",
    courseList: [
      {
        list: [
          { title: "Defining Functions", type: "lesson", locked: true },
          { title: "Function Parameters", type: "lesson", locked: true },
          {
            title: "Return Values From Functions",
            type: "lesson",
            locked: true,
          },
          { title: "Global Variable and Scope", type: "lesson", locked: true },
          {
            title: "Newly Way of creating a Constant",
            type: "lesson",
            locked: true,
          },
          { title: "Constants", type: "lesson", locked: true },
        ],
        firstIcon: BookText,
        lastIcon: Lock,
      },
    ],
  },
  {
    id: 3,
    period: "Week 5-8",
    description:
      "Advanced Story telling techniques for writers Personas,Characters,Plots",
    courseList: [
      {
        list: [
          { title: "Defining Functions", type: "lesson", locked: true },
          { title: "Function Parameters", type: "lesson", locked: true },
          {
            title: "Return Values From Functions",
            type: "lesson",
            locked: true,
          },
          { title: "Global Variable and Scope", type: "lesson", locked: true },
          {
            title: "Newly Way of creating a Constant",
            type: "lesson",
            locked: true,
          },
          { title: "Constants", type: "lesson", locked: true },
        ],
        firstIcon: BookText,
        lastIcon: Lock,
      },
    ],
  },
];
