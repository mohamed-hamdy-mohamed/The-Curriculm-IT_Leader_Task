"use client";

import { leaderboard } from "@/constants/leader-board";
import useLockBodyScroll from "@/hooks/useLockBodyScroll";
import { Trophy, X, Medal } from "lucide-react";

interface LeaderboardModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const LeaderboardModal = ({ open, setOpen }: LeaderboardModalProps) => {
  useLockBodyScroll(open);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-100 p-6">
          <div>
            <p className="text-sm text-gray-400">JavaScript Basics</p>

            <h2 className="mt-1 flex items-center gap-2 text-2xl font-bold text-[#252A3E]">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Leaderboard
            </h2>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Message */}

        <div className="mx-6 mt-6 rounded-xl bg-[#F8FAFF] p-5 text-center">
          <p className="text-sm leading-7 text-[#475569]">
            💪 Great job!
            <br />
            You're performing better than
            <span className="font-bold text-[#48BB98]"> 63%</span> of students.
            <br />
            Keep going and you'll reach the top.
          </p>
        </div>

        {/* Ranking */}

        <div className="mt-6 px-6 pb-6">
          <div className="space-y-3">
            {leaderboard.map((student, idx) => (
              <div
                key={student.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-4 transition hover:border-[#48BB98]"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white
                    ${
                      idx === 0
                        ? "bg-yellow-500"
                        : idx === 1
                          ? "bg-gray-400"
                          : idx === 2
                            ? "bg-orange-500"
                            : "bg-[#48BB98]"
                    }`}
                  >
                    {idx < 3 ? <Medal className="h-5 w-5" /> : idx + 1}
                  </div>

                  <div>
                    <p className="font-semibold text-[#252A3E]">
                      {student.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Score: {student.score}
                    </p>
                  </div>
                </div>

                <span className="text-lg font-bold text-[#48BB98]">
                  #{idx + 1}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setOpen(false)}
            className="mt-6 w-full rounded-xl bg-[#48BB98] py-3 font-semibold text-white transition hover:bg-[#3ca785]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardModal;
