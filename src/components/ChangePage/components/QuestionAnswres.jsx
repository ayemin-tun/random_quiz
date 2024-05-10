"use client";
import React, { useState } from "react";
import { decodeHTMLEntities } from "@/lib/utils";
import { useQuestionsStore } from "@/store/Question.store";
import { usePageChangeInfo } from "@/store/PageChange.store";
import { useQuestionFilterStore } from "@/store/QuestionFilter.store";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
export default function QuestionAnswers({ question, index }) {
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

  const [selectedAnswer, setSelectedAnswer] = useState(
    userAnswers[index] || null
  );

  const { setUserAnswer } = useQuestionsStore(); // Get setUserAnswer action from store

  const handleItemClick = (answer) => {
    if (!checkAnswer) {
      setSelectedAnswer(answer);
      setUserAnswer(index, answer); // Update userAnswer in the store
    }
  };

  const handleCheckAnswer = () => {
    setCheckAnswer(true);
    setCurrentStep(currentStep + 1);
  };

  const answerCheckClass = (selectedAnswer, answer, correct_answer) => {
    let checkClass = "";
    if (checkAnswer) {
      if (answer === correct_answer) {
        checkClass = "bg-opacity-80 bg-green-500";
      }

      if (selectedAnswer === answer) {
        if (answer === correct_answer) {
          checkClass = "bg-opacity-80 bg-green-500";
        } else {
          checkClass = " bg-red-500 font-bold";
        }
      }
    } else {
      if (selectedAnswer === answer) {
        checkClass = "bg-opacity-80 bg-gray-200";
      }
    }
    return checkClass;
  };

  return (
    <>
      <ul className="flex gap-3 m-4 flex-wrap">
        {answersArray[index].map((answer, answerIndex) => (
          <li
            key={answerIndex}
            className={`rounded flex gap-2 border px-3 py-1 text-base cursor-pointer hover:bg-opacity-50 ${answerCheckClass(
              selectedAnswer,
              answer,
              question.correct_answer
            )}`}
            onClick={() => handleItemClick(answer)}
          >
            <input
              className="cursor-pointer"
              type="radio"
              disabled={checkAnswer}
              name={`question-${index}`}
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => {}}
            />
            {decodeHTMLEntities(answer)}
          </li>
        ))}
      </ul>

      {checkAnswer && (
        <p
          className={`w-full p-2 rounded-md ${
            isCorrect[index] ? "bg-green-400" : "bg-red-400"
          } m-2`}
        >
          {isCorrect[index] ? "Correct..." : "Incorrect..."}
        </p>
      )}

      <p className="flex justify-end">
        {index + 1} of {amount}
      </p>

      {!checkAnswer && (
        <div className="flex gap-2 mt-7">
          <button
            className={`px-6 py-3 ${
              currentStep === 4 ? "bg-gray-500" : "bg-red-800"
            } text-white cursor-pointer `}
            onClick={(e) => setCurrentStep(currentStep - 1)}
            disabled={currentStep === 4}
          >
            <FaAngleLeft />
          </button>

          {currentStep >= parseInt(amount) + 3 ? (
            <button
              disabled={!selectedAnswer}
              onClick={handleCheckAnswer}
              className={`px-6 py-3 ${
                selectedAnswer ? "bg-blue-800" : "bg-blue-500"
              } text-white cursor-pointer `}
            >
              Check Answer
            </button>
          ) : (
            <button
              className={`px-6 py-3 ${
                selectedAnswer ? "bg-blue-800" : "bg-blue-500"
              } text-white cursor-pointer `}
              onClick={(e) => setCurrentStep(currentStep + 1)}
              disabled={!selectedAnswer}
            >
              <FaAngleRight />
            </button>
          )}
        </div>
      )}

      {checkAnswer && (
        <div className="flex gap-2 justify-between mt-5">
          <div className="flex gap-2">
            <button
              className={`px-6 py-3 ${
                currentStep === 4 ? "bg-gray-500" : "bg-red-800"
              } text-white cursor-pointer `}
              onClick={(e) => setCurrentStep(currentStep - 1)}
              disabled={currentStep === 4}
            >
              <FaAngleLeft />
            </button>
            {/* {currentStep < parseInt(amount) + 3 && ( */}
            <button
              onClick={(e) => setCurrentStep(currentStep + 1)}
              className={`px-6 py-3 ${
                selectedAnswer ? "bg-blue-800" : "bg-blue-500"
              } text-white cursor-pointer sm:text-base text-sm`}
            >
              {currentStep >= parseInt(amount) + 3 ? (
                "Check My Score"
              ) : (
                <FaAngleRight />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
