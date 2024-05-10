import { usePageChangeInfo } from "@/store/PageChange.store";
import React from "react";
import QuestionCategory from "./components/QuestionCategory";
import QuestionText from "./components/QuestionText";
import QuestionAnswres from "./components/QuestionAnswres";
import { useQuestionFilterStore } from "@/store/QuestionFilter.store";

export default function QuestionPage({ question, index }) {
  const { userName, currentStep, setCurrentStep, setCheckAnswer } =
    usePageChangeInfo();
  const { amount } = useQuestionFilterStore();
  const handleCheckAnswer = () => {
    setCheckAnswer(true);
    setCurrentStep(currentStep - (parseInt(amount) - 1));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-3 w-[80%]">
        <QuestionCategory
          category={question.category}
          difficulty={question.difficulty}
        />

        <QuestionText index={index} question={question.question} />

        <QuestionAnswres question={question} index={index} />
      </div>
    </div>
  );
}
