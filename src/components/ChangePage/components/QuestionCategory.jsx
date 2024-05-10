import { decodeHTMLEntities } from "@/lib/utils";
import React from "react";
export const difficultyColor = (value) => {
  let color = "";
  if (value === "hard") color = "bg-red-500";
  if (value === "medium") color = "bg-orange-500";
  if (value === "easy") color = "bg-green-500";
  return color;
};

export default function QuestionCategory({ category, difficulty }) {
  return (
    <div className="mb-3 flex justify-end">
      <div className="flex gap-2">
        <span className="px-2 py-1 bg-gray-700 text-white sm:text-base text-xs rounded-md">
          {decodeHTMLEntities(category)}
        </span>
        <span
          className={`px-2 py-1 ${difficultyColor(
            difficulty
          )} text-black sm:text-base text-xs rounded-md`}
        >
          {difficulty}
        </span>
      </div>
    </div>
  );
}
