"use client";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { X } from "lucide-react";
import { useState } from "react";

interface AskQuesModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AskQuesModal = ({ open, setOpen }: AskQuesModalProps) => {
  const [question, setQuestion] = useState<string>("");
  useLockBodyScroll(open);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-2xl rounded-3xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-[#252A3E]">
            Ask a Question
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Body */}
        <div className="mt-6">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows={6}
            placeholder="Type your question here..."
            className="w-full resize-none rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#48BB98]"
          />
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg border border-gray-300 px-5 py-2.5 transition hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            className="rounded-lg bg-[#48BB98] px-5 py-2.5 text-white transition hover:bg-[#3ca785]"
            onClick={() => {
              setQuestion("");
              setOpen(false);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AskQuesModal;
