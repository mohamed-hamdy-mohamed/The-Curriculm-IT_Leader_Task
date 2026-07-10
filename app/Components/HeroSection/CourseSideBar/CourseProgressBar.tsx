"use client";

const CourseProgressBar = () => {
  const progress = 63;

  return (
    <div className="w-full">
      {/* Bubble area */}
      <div className="relative h-16">
        <div
          className="absolute flex flex-col items-center -translate-x-1/2"
          style={{ left: `${progress}%` }}
        >
          {/* "You" badge */}
          <div className="flex h-11 w-11 items-center justify-center rounded-full border-3 border-[#C8C8C8] text-sm text-[#485293] font-semibold ">
            You
          </div>
          {/* Downward triangle */}
          <div className="border-x-[5px] border-x-transparent border-t-[7px] border-t-[#C8C8C8] mt-0.5" />
        </div>
      </div>

      {/* Progress bar track */}
      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-[#6ABD8A] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage label */}
      <div className="relative h-6 mt-1">
        <span
          className="absolute -translate-x-1/2 text-[#485293] font-semibold text-sm"
          style={{ left: `${progress}%` }}
        >
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default CourseProgressBar;
