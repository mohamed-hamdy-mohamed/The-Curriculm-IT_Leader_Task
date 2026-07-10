import CourseComments from "../Components/Comments/CourseComments";
import BreadCrumbs from "../Components/CourseDetails/BreadCrumbs";
import CourseHeader from "../Components/CourseDetails/CourseHeader";
import CourseSideBar from "../Components/HeroSection/CourseSideBar/CourseSideBar";
import HeroSection from "../Components/HeroSection/HeroSection";
import CourseMaterial from "../Components/Materials/CourseMaterial";

const CourseDetailsPage = () => {
  return (
    <div className="mx-auto px-4 pb-12 sm:px-6 lg:px-8">
      <BreadCrumbs />
      <CourseHeader />

      <div className="mt-8 flex flex-col gap-8 lg:flex-row">
        {/* Left Content */}
        <main className="flex-1">
          <HeroSection />

          <div className="lg:hidden mt-8">
            <CourseSideBar />
          </div>

          <CourseMaterial />
          <CourseComments />
        </main>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <CourseSideBar />
        </aside>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
