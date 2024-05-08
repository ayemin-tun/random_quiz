"use client";
import ControlledStep from "@/components/ControlStep";
import { useState } from "react";
import HomePage from "@/components/ChangePage/HomePage";
import NameRequestPage from "@/components/ChangePage/NameRequestPage";
import QuestionFilterPage from "@/components/ChangePage/QuestionFilterPage";
import QuestionPage from "@/components/ChangePage/QuestionPage";
import { usePageChangeInfo } from "@/store/PageChange.store";
export default function Home() {
  const { currentStep, setCurrentStep } = usePageChangeInfo();
  const handleChangeSteps = (newStep) => {
    setCurrentStep(newStep);
  }
  return (
    <main className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <ControlledStep
        currentStep={currentStep}
        handleChangeSteps={handleChangeSteps}
      >
        <HomePage />
        <NameRequestPage />
        <QuestionFilterPage />
        <QuestionPage />
      </ControlledStep>
      {/* <button
        className="fixed z-50 bottom-0 px-2 py-1 bg-gray-700 text-white right-0"
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Next
      </button> */}
    </main>
  );
}
