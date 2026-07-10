"use client";

import { ChevronLeft, Clock3, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { jsExams } from "./exam";

interface ExamModalProps {
  selectedExam: number | null;
  setSelectedExam: (examId: number | null) => void;
}

const ExamModal = ({ selectedExam, setSelectedExam }: ExamModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const exam = useMemo(
    () => jsExams.find((item) => item.id === selectedExam),
    [selectedExam],
  );
  const [timeLeft, setTimeLeft] = useState<number>((exam?.duration ?? 0) * 60);

  useEffect(() => {
    if (!selectedExam || !exam) {
      return;
    }
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(exam.duration * 60);
  }, [selectedExam, exam]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedExam]);

  const handleAnswerSelect = (answerIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIdx;
    setAnswers(newAnswers);
  };

  const question = exam?.questions[currentQuestion];

  const formattedTime = useMemo(() => {
    return `${Math.floor(timeLeft / 60)} :${timeLeft % 60 < 10 ? "0" : ""}${timeLeft % 60}`;
  }, [timeLeft]);

  const handleCloseModal = () => {
    setSelectedExam(null);
  };

  if (!selectedExam || !exam) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/45 p-3 sm:p-6">
      <div className="w-full max-w-200 overflow-hidden rounded-[26px] bg-[#5673F1] sm:max-w-3xl">
        <div className="px-5 pb-4 pt-6 text-white">
          {/* Modal Header  */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleCloseModal}
              aria-label="Close exam modal"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white/10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="rounded-xl bg-[#FFD500] px-8 py-2 text-[#F8FBFF]">
              <p className="flex items-center gap-2 text-3xl font-bold tracking-wide">
                <Clock3 className="h-7 w-7" />
                <span>{formattedTime}</span>
              </p>
            </div>

            <span className="w-10" />
          </div>

          {/* Question Navigation  */}

          <div className="mt-14 flex items-center justify-center gap-3 sm:gap-4">
            {exam.questions.map((_, idx) => {
              const isCurrent = idx === currentQuestion;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentQuestion(idx)}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border text-2xl font-semibold ${
                    isCurrent
                      ? "border-white bg-white text-[#5673F1]"
                      : "border-white/60 bg-transparent text-white"
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Options Section  */}

        <div className="mx-2 mt-2 rounded-t-[34px] bg-[#F8FAFF] px-6 pb-8 pt-9 sm:mx-3 sm:px-8">
          {question && (
            <div>
              <h2 className="mt-4 text-[34px] font-semibold leading-[1.35] text-[#252A3E]">
                {question.id}. {question.question}
              </h2>

              <ul className="mt-8 space-y-5">
                {question.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion] === idx;

                  return (
                    <li key={idx}>
                      <button
                        onClick={() => handleAnswerSelect(idx)}
                        className={`flex w-full items-center overflow-hidden rounded-[14px] border text-left shadow-[0_6px_18px_rgba(17,24,39,0.08)] transition ${
                          isSelected
                            ? "border-[#5673F1] bg-[#5673F1] text-white"
                            : "border-[#E7EAF3] bg-white text-[#2E3448]"
                        }`}
                      >
                        <span
                          className={`flex h-19.5 w-18 items-center justify-center border-r ${
                            isSelected
                              ? "border-white/30 bg-[#4A68E6]"
                              : "border-[#E7EAF3] bg-[#FDFEFF]"
                          }`}
                        >
                          <span
                            className={`h-7 w-7 rounded-md border-2 ${
                              isSelected
                                ? "border-white bg-white/20"
                                : "border-[#8EA5FF]"
                            }`}
                          >
                            {isSelected && (
                              <span className="mx-auto mt-1.75 block h-2.5 w-2.5 rounded-full bg-white" />
                            )}
                          </span>
                        </span>

                        <span className="px-5 text-[36px] font-medium leading-none">
                          {option}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between">
            <button
              onClick={() =>
                setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
              }
              disabled={currentQuestion === 0}
              className="rounded-lg border border-[#D4DBEF] px-4 py-2 text-sm font-semibold text-[#3B4B8D] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            <button
              onClick={() =>
                setCurrentQuestion((prev) =>
                  prev < exam.questions.length - 1 ? prev + 1 : prev,
                )
              }
              disabled={currentQuestion === exam.questions.length - 1}
              className="rounded-lg border border-[#D4DBEF] px-4 py-2 text-sm font-semibold text-[#3B4B8D] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamModal;
