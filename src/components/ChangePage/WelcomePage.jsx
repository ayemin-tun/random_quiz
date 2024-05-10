import { usePageChangeInfo } from "@/store/PageChange.store";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function WelcomePage() {
  const { userName, currentStep, setCurrentStep } = usePageChangeInfo();

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="p-3">
        <h1 className="md:text-3xl text-2xl font-bold mb-5">
          Okay{" "}
          <span className="text-gray-600 font-extrabold font-4xl">
            {userName}
          </span>
          {"  ,let's see how far you will go ... "}
        </h1>

        <div className="flex gap-2">
          <button
            className="px-6 py-3 bg-red-800 text-white cursor-pointer "
            onClick={(e) => setCurrentStep(currentStep - 1)}
          >
            <FaAngleLeft />
          </button>

          <button
            className="px-6 py-3  sm:py-2 bg-blue-800 text-white cursor-pointer"
            onClick={(e) => setCurrentStep(currentStep + 1)}
          >
            Let Get Start
          </button>
        </div>
      </div>
    </div>
  );
}
