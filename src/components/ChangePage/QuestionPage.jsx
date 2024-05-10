import { usePageChangeInfo } from "@/store/PageChange.store";
import React from "react";
import QuestionCategory from "./components/QuestionCategory";
import QuestionText from "./components/QuestionText";
import QuestionAnswres from "./components/QuestionAnswres";
import { useQuestionFilterStore } from "@/store/QuestionFilter.store";
import ResetButton from "../ui/ResetButton";
import { MdOutlineLockReset } from "react-icons/md";
export default function QuestionPage({ question, index }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="absolute top-6 right-6">
        <ResetButton className={"px-2 py-2 rounded-full"}>
          <MdOutlineLockReset />
        </ResetButton>
      </div>
      <div className="p-5 md:w-[80%] w-full">
        <QuestionCategory
          category={question.category}
          difficulty={question.difficulty}
          index={index}
        />

        <QuestionText index={index} question={question.question} />

        <QuestionAnswres question={question} index={index} />
      </div>
    </div>
  );
}
