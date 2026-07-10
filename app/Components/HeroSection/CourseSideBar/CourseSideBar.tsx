import CourseTopics from "./CourseTopics";

const CourseSideBar = () => {
  return (
    <section className="w-full">
      <h2 className="mb-8 text-2xl font-semibold leading-tight text-[#111827]">
        Topics for This Course
      </h2>
      <CourseTopics />
    </section>
  );
};

export default CourseSideBar;
