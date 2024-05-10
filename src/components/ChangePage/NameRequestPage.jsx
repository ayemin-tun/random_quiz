import { usePageChangeInfo } from "@/store/PageChange.store";
import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";

export default function NameRequestPage() {
  const [error, setError] = useState(false);
  const { userName, setUserName, currentStep, setCurrentStep } =
    usePageChangeInfo();
  const handleName = () => {
    if (userName.trim() === "") {
      setError("true");
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="p-3">
        <h1 className="md:text-3xl text-2xl font-bold mb-2">
          {"What's your name, "}
          <span className="text-gray-800 font-extrabold font-4xl">
            challenger
          </span>
          ?
        </h1>
        <p className="text-gray-800 text-lg font-bold mb-4">
          Just your first one is fine. Or a nickname.
        </p>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          className={`w-full border-0 border-b-2 bg-transparent text-black placeholder-gray-800 p-2 text-base focus:border-0 focus:border-b-2 focus:border-b-blue-800 transition-all duration-200 text-lg ${
            !error && "mb-4 "
          } ${error && "border-b-red-500"}`}
          placeholder="Type Your answre Here ..."
        />
        {error && (
          <p className="text-red-700 text-md mb-4">Please Enter Name ...</p>
        )}

        <div className="flex gap-2">
          <button
            className="px-6 py-3 sm:py-2 bg-red-800 text-white cursor-pointer "
            onClick={(e) => setCurrentStep(currentStep - 1)}
          >
            <FaAngleLeft />
          </button>

          <button
            className="px-6 py-3 bg-blue-800 text-white cursor-pointer"
            onClick={handleName}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
