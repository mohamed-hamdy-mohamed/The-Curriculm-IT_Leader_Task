"use client";
import { courseComments } from "@/constants/course-comments";
import { CourseCommentsTypes } from "@/types/curriculum";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const COURSE_COMMENTS_STORAGE_KEY = "courseComments";

const CourseComments = () => {
  const [comments, setComments] =
    useState<CourseCommentsTypes[]>(courseComments);

  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    const storedComments = localStorage.getItem(COURSE_COMMENTS_STORAGE_KEY);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(COURSE_COMMENTS_STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newComment.trim() === "") {
      return;
    }

    const newCommentObj: CourseCommentsTypes = {
      avatarColor: "bg-[#D9EAFE]",
      initials: "YO",
      name: "You",
      date: new Date().toLocaleDateString(),
      comment: newComment,
    };

    const updatedComments = [...comments, newCommentObj];

    setComments(updatedComments);

    setNewComment("");
  };

  return (
    <section className="mt-12 sm:mt-14" id="CourseComments">
      <div className="space-y-6">
        <div>
          <h2 className="text-[32px] font-bold leading-tight text-[#111827]">
            Comments
          </h2>
        </div>

        <div>
          {comments.map((comment, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 border-b border-[#E5E7EB] py-6 last:border-b-0"
            >
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-[#334155] ${comment.avatarColor}`}
              >
                {comment.initials}
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#374151]">
                  {comment.name}
                </h3>
                <p className="mt-1 text-sm text-[#94A3B8]">{comment.date}</p>
                <p className="mt-3 max-w-160 text-sm leading-7 text-[#6B7280]">
                  {comment.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="mt-8" onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment"
          className="w-full rounded-sm border border-[#E5E7EB] px-4 py-4 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#48BB98]"
          rows={6}
        />

        <button
          type="submit"
          className="mt-5 inline-flex items-center gap-2 rounded-sm bg-[#48BB98] px-6 py-3 text-sm font-medium text-white hover:bg-[#3FA887]"
        >
          Submit Review
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
};

export default CourseComments;
