import { usePageChangeInfo } from "@/store/PageChange.store";
import React from "react";
import QuestionCategory from "./components/QuestionCategory";
import QuestionText from "./components/QuestionText";
import QuestionAnswres from "./components/QuestionAnswres";

export default function QuestionPage({ question, index }) {
  const { userName, currentStep, setCurrentStep } = usePageChangeInfo();
  
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-3 w-[80%]">
        <QuestionCategory
          category={question.category}
          difficulty={question.difficulty}
        />

        <QuestionText index={index} question={question.question} />

        <QuestionAnswres question={question} index={index} />

        <div className="flex gap-2">
          <button
            className="sm:px-5 px-3 py-1 sm:py-2 bg-red-800 text-white cursor-pointer "
            onClick={(e) => setCurrentStep(currentStep - 1)}
          >
            Back
          </button>
          <button
            className="sm:px-5 px-3 py-1 sm:py-2 bg-blue-800 text-white cursor-pointer "
            onClick={(e) => setCurrentStep(currentStep + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
