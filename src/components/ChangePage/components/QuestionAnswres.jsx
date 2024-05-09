"use client";
import { decodeHTMLEntities, shuffleArray } from "@/lib/utils";
import { useQuestionsStore } from "@/store/Question.store";
import React, { useMemo } from "react";

export default function QuestionAnswres({ question, index }) {
  const allAnswers = [question.correct_answer, ...question.incorrect_answers];
  const { questionsArr, setQuestions } = useQuestionsStore((store) => store);
  const shuffledAnswers = useMemo(() => {
    console.log("Calculating shuffledAnswers...");
    return shuffleArray(allAnswers);
  }, [questionsArr]);

  console.log("Rendering QuestionAnswers:", shuffledAnswers);
  return (
    <ul className="flex gap-3 m-4 flex-wrap">
      {shuffledAnswers.map((answer, answerIndex) => (
        <li
          key={answerIndex}
          className="flex gap-2 border px-3 py-1 text-base bg-opacity-20 backdrop-blur-lg bg-gray-200 "
        >
          <input
            className="cursor-pointer"
            type="radio"
            name={`question-${index}`}
            value={answer}
          />
          {answer === question.correct_answer ? (
            <span className="font-extrabold">{decodeHTMLEntities(answer)}</span>
          ) : (
            <i>{decodeHTMLEntities(answer)}</i>
          )}
        </li>
      ))}
    </ul>
  );
}
