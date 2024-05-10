import { usePageChangeInfo } from "@/store/PageChange.store";
import React, { useState } from "react";
import FilterQuestion from "../FilterQuestion";
import { FaAngleLeft } from "react-icons/fa";

export default function QuestionFilterPage() {
  const { userName, currentStep, setCurrentStep } = usePageChangeInfo();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="p-3">
        <h1 className="md:text-2xl text-xl font-bold mb-5">
          {"Before you get started, please filter the questions ..."}
        </h1>

        <div className="flex gap-2  md:justify-start justify-center">
          <button
            className="sm:px-5 px-3 py-1 sm:py-2 bg-red-800 text-white cursor-pointer "
            onClick={(e) => setCurrentStep(currentStep - 1)}
          >
            <FaAngleLeft />
          </button>

          <FilterQuestion />
        </div>
      </div>
    </div>
  );
}
