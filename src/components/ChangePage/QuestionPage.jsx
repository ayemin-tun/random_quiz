import React from "react";

export default function QuestionPage(question) {
  return (
    <div className="w-full h-screen bg-red-400 flex justify-center items-center">
      {question.question}
    </div>
  );
}