import { usePageChangeInfo } from "@/store/PageChange.store";
import React from "react";
export default function SomeThingsWrongPage() {
  const { setCurrentStep } = usePageChangeInfo();
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="p-3">
        <h1 className="md:text-3xl text-2xl font-bold mb-5 text-red-500">
          OOP {"  ,Some thing went Wrong in my page ... "}
        </h1>

        <div className="flex gap-2">
          <button
            className="px-6 py-3  sm:py-2 bg-blue-800 text-white cursor-pointer"
            onClick={(e) => setCurrentStep(0)}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}
