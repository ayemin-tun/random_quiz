"use client";
import React, { useState } from "react";
import { decodeHTMLEntities, getTotalCorrectAnswer } from "@/lib/utils";
import { useQuestionsStore } from "@/store/Question.store";
import { usePageChangeInfo } from "@/store/PageChange.store";
import { useQuestionFilterStore } from "@/store/QuestionFilter.store";
import Image from "next/image";
import ResetButton from "@/components/ui/ResetButton";

export default function CheckAnswer() {
  const { userName, currentStep, setCurrentStep, setCheckAnswer, checkAnswer } =
    usePageChangeInfo();
  const { amount } = useQuestionFilterStore();
  const { answersArray, userAnswers, isCorrect } = useQuestionsStore(
    (store) => ({
      answersArray: store.answersArray,
      userAnswers: store.userAnswers,
      isCorrect: store.isCorrect,
    })
  );

  const handleCheckAnswer = () => {
    setCheckAnswer(true);
    setCurrentStep(4);
  };

  const getTextForUser = () => {
    const correctPercentage = (getTotalCorrectAnswer(isCorrect) / amount) * 100;
    if (correctPercentage >= 75) {
      return "Great job! Excellent Work.";
    } else if (correctPercentage >= 35) {
      return "Good job! Not Bad ... Not Bad.";
    } else {
      return "Keep Going! You could do better.";
    }
  };
  const getImagePath = () => {
    const correctPercentage = (getTotalCorrectAnswer(isCorrect) / amount) * 100;
    if (correctPercentage >= 75) {
      return "/img/wow.jpg";
    } else if (correctPercentage >= 35) {
      return "/img/notbad.jpg";
    } else {
      return "/img/bad.jpg";
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="p-3">
        <div className="w-full flex justify-center mb-5">
          <Image
            src={getImagePath()}
            alt="image"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>

        <h1 className="md:text-3xl text-2xl font-bold mb-2 text-center">
          {`You got ${getTotalCorrectAnswer(
            isCorrect
          )}/${amount} answers correct.`}
        </h1>
        <p className="text-gray-800 text-lg font-bold mb-4 text-center">
          {getTextForUser()}
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={handleCheckAnswer}
            className={`px-6 py-3 bg-blue-700 text-white cursor-pointer `}
          >
            Check Answers
          </button>

          <ResetButton className={"px-6 py-3"}>Try Again</ResetButton>
        </div>
      </div>
    </div>
    // <div>
    //   {getTotalCorrectAnswer(isCorrect)}{" "}
    //   <button
    //     onClick={handleCheckAnswer}
    //     className={`sm:px-5 px-3 py-1 sm:py-2 bg-blue-500 text-white cursor-pointer `}
    //   >
    //     Check Answer
    //   </button>
    // </div>
  );
}
