"use client";
import { BookText, Lock, LucideIcon } from "lucide-react";
import CourseProgressBar from "../CourseProgressBar";
import { useState } from "react";
import ExamModal from "../../Modals/ExamModal";
import SelectedModal from "../../Modals/SelectedModal";
import { CourseItems } from "@/types/curriculum";
import { courseTopics } from "@/constants/course-topics";

const CourseTopics = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedExam, setSelectedExam] = useState<number | null>(null);

  const handleSelectItem = (item: CourseItems) => {
    switch (item.type) {
      case "pdf":
        setSelectedPdf(item.file || null);
        break;
      case "exam":
        setSelectedExam(item.examId || null);
        break;
      default:
        break;
    }
  };

  return (
    <article className="space-y-7">
      <CourseProgressBar />
      <div className="flex flex-col gap-7">
        {courseTopics.map((topic) => (
          <div
            key={topic.id}
            className="border border-[#E5E7EB] bg-white px-4 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.03)] sm:px-5"
          >
            <div>
              <h3 className="text-[15px] font-semibold text-[#111827] sm:text-lg">
                {topic.period}
              </h3>
              <p className="mt-1 max-w-[280px] text-sm leading-6 text-[#94A3B8]">
                {topic.description}
              </p>
            </div>
            {topic.courseList.map((course, index) => (
              <div key={index} className="mt-4 border-t border-[#E5E7EB] pt-4">
                <ul className="space-y-0">
                  {course.list.map((item, idx) => (
                    <li
                      onClick={() => handleSelectItem(item)}
                      key={idx}
                      className="flex items-center justify-between cursor-pointer hover:bg-amber-50 gap-2 border-b border-[#E5E7EB] py-3 text-sm leading-6 text-[#374151] last:border-b-0"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <course.firstIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[#6B7280]" />
                        {item.title}
                      </div>
                      <div className="flex flex-row items-center gap-2">
                        {item.questions && (
                          <p className="ml-2 bg-green-100 border border-[#E5E7EB] rounded-md px-4 py-2 text-green-500 text-xs font-medium">
                            {item.questions}
                          </p>
                        )}
                        {item.duration && (
                          <p className="ml-2 bg-red-100 border border-[#E5E7EB] rounded-md px-4 py-2  text-red-500 text-xs font-medium">
                            {item.duration}
                          </p>
                        )}
                        {item.locked && (
                          <Lock className="ml-2 h-3.5 w-3.5 shrink-0 text-[#6B7280]" />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* PDF Modal  */}
        <SelectedModal
          selectedPdf={selectedPdf}
          setSelectedPdf={setSelectedPdf}
        />
        {/*  Exam Modal  */}
        <ExamModal
          selectedExam={selectedExam}
          setSelectedExam={setSelectedExam}
        />
      </div>
    </article>
  );
};

export default CourseTopics;
