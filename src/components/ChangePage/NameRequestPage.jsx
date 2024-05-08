import { usePageChangeInfo } from "@/store/PageChange.store";
import React from "react";

export default function NameRequestPage() {
  const { currentStep, setCurrentStep } = usePageChangeInfo();
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <button
        className="bg-cyan-800 text-white font-bold text-base px-5 rounded py-2"
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        Back ...
      </button>
    </div>
  );
}
