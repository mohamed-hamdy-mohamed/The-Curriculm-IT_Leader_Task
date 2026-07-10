import Image from "next/image";
import {
  CircuitBoard,
  LucideIcon,
  MessageCircleQuestion,
  MessageSquareText,
} from "lucide-react";
import HeroImage from "@/public/IT_LEADER_IMAGE.png";
import Link from "next/link";

interface LinksIconsTypes {
  href: string;
  icon: LucideIcon;
}

const LinksIcons: LinksIconsTypes[] = [
  {
    href: "",
    icon: MessageCircleQuestion,
  },
  {
    href: "#CourseComments",
    icon: MessageSquareText,
  },
  {
    href: "#",
    icon: CircuitBoard,
  },
];

const HeroSection = () => {
  return (
    <section className="w-full order-1 lg:order-2">
      <div>
        <Image
          src={HeroImage}
          alt="Course preview"
          width={1000}
          height={800}
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div className="mt-5 flex items-center gap-3 sm:gap-4">
        {LinksIcons.map((link, idx) => {
          const Icon = link.icon;
          return (
            <button
              key={idx}
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#64748B] transition hover:border-[#48BB98] hover:text-[#48BB98]"
            >
              <Link href={link.href}>
                <Icon className="h-4 w-4" />
              </Link>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSection;
