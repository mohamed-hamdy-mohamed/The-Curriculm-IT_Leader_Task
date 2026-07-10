import CourseComments from "./Components/Comments/CourseComments";
import BreadCrumbs from "./Components/CourseDetails/BreadCrumbs";
import CourseHeader from "./Components/CourseDetails/CourseHeader";
import CourseSideBar from "./Components/HeroSection/CourseSideBar/CourseSideBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import CourseMaterial from "./Components/Materials/CourseMaterial";

const CourseDetailsPage = () => {
  return (
    <div className="mx-auto px-4 pb-12 sm:px-6 lg:px-8">
      <BreadCrumbs />
      <CourseHeader />
      <div className="mt-8 flex flex-col gap-12 lg:flex-row lg:gap-8">
        <main>
          <HeroSection />
          <CourseMaterial />
          <CourseComments />
        </main>
        <aside className="min-w-0">
          <CourseSideBar />
        </aside>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
