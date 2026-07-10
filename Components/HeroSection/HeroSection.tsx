"use client";
import {
  CircuitBoard,
  LucideIcon,
  MessageCircleQuestion,
  MessageSquareText,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AskQuesModal from "../Modals/AskQuesModal";
import LeaderBoardModal from "../Modals/LeaderBoardModal";

interface CurriculumLinksTypes {
  href?: string;
  action?: "ask-question" | "leaderboard";
  icon: LucideIcon;
}

const CurriculumLinks: CurriculumLinksTypes[] = [
  {
    icon: MessageCircleQuestion,
    action: "ask-question",
  },
  {
    href: "#CourseComments",
    icon: MessageSquareText,
  },
  {
    action: "leaderboard",
    icon: CircuitBoard,
  },
];

const HeroSection = () => {
  const [activeModal, setActiveModal] = useState<
    "ask-question" | "leaderboard" | null
  >(null);

  return (
    <section className="contents">
      <div className="sticky max-w-179 top-0 z-10 mb-6 aspect-video w-full overflow-hidden rounded-lg sm:top-10 sm:mb-10 sm:static">
        <video
          src="/IT_Leader_VIDEO.mp4"
          preload="metadata"
          controls
          playsInline
          muted
          className="w-full rounded-lg"
        />
      </div>

      <div className="mt-5 flex items-center gap-4 sm:gap-4">
        {CurriculumLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <Link
              href={link.href || "#"}
              key={idx}
              type="button"
              onClick={() => {
                if (link.action === "ask-question") {
                  setActiveModal("ask-question");
                }
                if (link.action === "leaderboard") {
                  setActiveModal("leaderboard");
                }
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#64748B] transition hover:border-[#48BB98] hover:text-[#48BB98]"
            >
              <Icon className="h-4 w-4" />
            </Link>
          );
        })}
      </div>

      <AskQuesModal
        open={activeModal === "ask-question"}
        setOpen={(open) => setActiveModal(null)}
      />

      <LeaderBoardModal
        open={activeModal === "leaderboard"}
        setOpen={(open) => setActiveModal(null)}
      />
    </section>
  );
};

export default HeroSection;
