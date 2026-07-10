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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-2 sm:p-4">
      <div className="flex h-[80vh] w-full max-w-lg flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:h-[80vh] sm:rounded-3xl">
        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-100 p-4 sm:p-6">
          <div>
            <p className="text-sm text-gray-400">JavaScript Basics</p>

            <h2 className="mt-1 flex items-center gap-2 text-xl font-bold text-[#252A3E] sm:text-2xl">
              <Trophy className="h-5 w-5 text-yellow-500 sm:h-6 sm:w-6" />
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

        <div className="mx-4 mt-4 rounded-xl bg-[#F8FAFF] p-4 text-center sm:mx-6 sm:mt-6 sm:p-5">
          <p className="text-sm leading-6 text-[#475569] sm:leading-7">
            💪 Great job!
            <br />
            You're performing better than
            <span className="font-bold text-[#48BB98]"> 63%</span> of students.
            <br />
            Keep going and you'll reach the top.
          </p>
        </div>

        {/* Ranking */}

        <div className="mt-4 flex-1 overflow-y-auto px-4 pb-4 sm:mt-6 sm:px-6 sm:pb-6">
          <div className="space-y-2.5 sm:space-y-3">
            {leaderboard.map((student, idx) => (
              <div
                key={student.id}
                className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-3 transition hover:border-[#48BB98] sm:px-4 sm:py-4"
              >
                <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white sm:h-10 sm:w-10
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

                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[#252A3E] sm:text-base">
                      {student.name}
                    </p>

                    <p className="text-xs text-gray-500 sm:text-sm">
                      Score: {student.score}
                    </p>
                  </div>
                </div>

                <span className="ml-3 shrink-0 text-base font-bold text-[#48BB98] sm:text-lg">
                  #{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 p-4 sm:px-6 sm:py-5">
          <button
            onClick={() => setOpen(false)}
            className="w-full rounded-xl bg-[#48BB98] py-3 font-semibold text-white transition hover:bg-[#3ca785]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardModal;
