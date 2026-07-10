import { BookUser, Clock3, Globe, LibraryBig } from "lucide-react";

interface CourseMaterialTypes {
  duration: string;
  lessons: number;
  enrolled: string;
  language: string;
}

const courseMaterial: CourseMaterialTypes[] = [
  {
    duration: "3 weeks",
    lessons: 8,
    enrolled: "65 students",
    language: "English",
  },
];

const CourseMaterial = () => {
  return (
    <section className="mt-12">
      {/* Title  */}
      <h2 className="text-4xl font-bold mb-8">Course Materials</h2>
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2].map((_, columnIdx) => (
            <div
              className={`${columnIdx === 1 ? "hidden md:block" : ""} space-y-6`}
              key={columnIdx}
            >
              {courseMaterial.map((material, idx) => (
                <div key={idx}>
                  {/* Duration + Icon  */}
                  <div className="flex items-center justify-between border-b border-gray-300 pb-5">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock3 size={20} />
                      <span>Duration:</span>
                    </div>
                    <span className="font-medium">{material.duration}</span>
                  </div>

                  {/* Lessons + Icon  */}
                  <div className="flex items-center justify-between border-b border-gray-300 py-5">
                    <div className="flex items-center gap-3 text-gray-600">
                      <LibraryBig size={20} />
                      <span>Lessons:</span>
                    </div>
                    <span className="font-medium">{material.lessons}</span>
                  </div>

                  {/* Enrolled + Icon  */}
                  <div className="flex items-center justify-between border-b border-gray-300 py-5">
                    <div className="flex items-center gap-3 text-gray-600">
                      <BookUser size={20} />
                      <span>Enrolled:</span>
                    </div>

                    <span className="font-medium">{material.enrolled}</span>
                  </div>

                  {/* Language + Icon  */}
                  <div className="flex items-center justify-between pt-5">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Globe size={20} />
                      <span>Language:</span>
                    </div>
                    <span className="font-medium">{material.language}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseMaterial;
