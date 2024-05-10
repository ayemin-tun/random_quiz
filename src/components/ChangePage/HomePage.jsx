import React from "react";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineScience } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { usePageChangeInfo } from "@/store/PageChange.store";
export default function HomePage() {
  const { currentStep, setCurrentStep } = usePageChangeInfo();
  return (
    <div className="w-full h-screen grid md:grid-cols-2 grid-cols-1">
      <div className="flex flex-col md:justify-center justify-end md:bg-gradient-to-r md:from-blue-400 md:to-cyan-500 p-6">
        <h1 className="md:flex gap-2 items-center font-extrabold md:text-5xl text-4xl text-wrap mb-4">
          <LuBrainCircuit className="text-white font-extrabold mb-2" /> Test
          Your Knowledge
        </h1>
        <h1 className="mt-5 text-lg text-white font-medium md:hidden">
          If you get a high score, you probably spend way too much time on
          Wikipedia.
        </h1>
      </div>
      <div className="flex flex-col md:justify-center justify-start mt-5 items-center">
        <div className="w-[90%] grid grid-cols-4 gap-3">
          <div className="bg-red-500 rounded text-white flex justify-center items-center w-full md:h-28 h-20 font-extrabold md:text-6xl text-4xl">
            <MdOutlineScience />
          </div>
          <div className="bg-blue-700 rounded text-white flex justify-center items-center w-full md:h-28 h-20 font-extrabold md:text-6xl text-4xl">
            <MdMovie />
          </div>

          <div className="bg-cyan-600 rounded text-white flex justify-center items-center w-full md:h-28 h-20 font-extrabold md:text-6xl text-4xl">
            <MdOutlineScience />
          </div>

          <div className="bg-green-500 rounded text-white flex justify-center items-center w-full md:h-28 h-20 font-extrabold md:text-6xl text-4xl">
            <BsThreeDots />
          </div>
        </div>

        <div>
          <h1 className="mt-5 text-xl text-white font-medium px-10 text-center md:block hidden">
            If you get a high score, you probably spend way too much time on
            Wikipedia.
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="bg-cyan-800 text-white font-bold text-base px-6 py-3 rounded "
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Let Get Started ...
          </button>
        </div>
      </div>
    </div>
  );
}
