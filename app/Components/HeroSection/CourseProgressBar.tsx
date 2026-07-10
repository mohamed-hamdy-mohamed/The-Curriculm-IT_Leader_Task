"use client";

const CourseProgressBar = () => {
  const progress = 63;

  return (
    <div className="w-full pb-1">
      <div className="relative h-14">
        <div
          className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
          style={{ left: `${progress}%` }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D1D5DB] bg-white text-[11px] font-medium text-[#5A67A5] shadow-sm">
            You
          </div>
          <div className="mt-0.5 h-0 w-0 border-x-[5px] border-x-transparent border-t-[7px] border-t-[#C8C8C8]" />
        </div>
      </div>

      <div className="h-[5px] w-full rounded-full bg-[#E5E7EB]">
        <div
          className="h-full rounded-full bg-[#54C38F] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="relative mt-1 h-5">
        <span
          className="absolute -translate-x-1/2 text-xs font-medium text-[#5A67A5]"
          style={{ left: `${progress}%` }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default CourseProgressBar;
