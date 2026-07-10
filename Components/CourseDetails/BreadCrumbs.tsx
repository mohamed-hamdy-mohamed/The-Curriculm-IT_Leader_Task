import { ChevronRight } from "lucide-react";

interface BreadCrumbsTypes {
  label: string;
}

const breadCrumbsPage: BreadCrumbsTypes[] = [
  {
    label: "Home",
  },
  {
    label: "Courses",
  },
  {
    label: "Course Details",
  },
];

const BreadCrumbs = () => {
  return (
    <nav aria-label="Breadcrumb" className="mb-3 pt-4 sm:pt-6">
      <ul className="flex flex-wrap items-center gap-y-1 text-sm font-medium text-[#5F6C80]">
        {breadCrumbsPage.map((item, index) => {
          const isLast = index === breadCrumbsPage.length - 1;

          return (
            <li key={item.label} className="flex items-center">
              <span className={isLast ? "text-[#1F2937]" : "text-[#5F6C80]"}>
                {item.label}
              </span>

              {!isLast && (
                <ChevronRight className="mx-1.5 h-4 w-4 text-[#94A3B8] sm:mx-2" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
