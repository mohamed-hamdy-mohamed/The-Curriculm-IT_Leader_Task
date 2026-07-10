import { LucideIcon } from "lucide-react";

export interface CourseCommentsTypes {
  avatarColor: string;
  initials: string;
  name: string;
  date: string;
  comment: string;
}

export interface CourseMaterialTypes {
  duration: string;
  lessons: number;
  enrolled: string;
  language: string;
}

export type CourseItems = {
  title: string;
  type?: "exam" | "lesson" | "pdf";
  questions?: string;
  duration?: string;
  locked?: boolean;
  examId?: number;
  file?: string;
};

export type CourseTopicTypes = {
  id: number;
  period: string;
  description: string;
  courseList: {
    list: CourseItems[];
    firstIcon: LucideIcon;
    lastIcon: LucideIcon;
  }[];
};
