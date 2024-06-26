"use client";
import React from "react";
import { useQuestionFilterStore } from "@/store/QuestionFilter.store";
import { useGetCategoriesList } from "@/queries/Categories.api";
import * as Dialog from "@radix-ui/react-dialog";
import { useFetchQuestion } from "@/queries/Questions.api";
import { generateQuery } from "@/lib/utils";
import { useQuestionsStore } from "@/store/Question.store";
import { usePageChangeInfo } from "@/store/PageChange.store";
import LoadingSpinner from "./ui/LoadingSpinner";
import { useRouter } from "next/navigation";

export default function QuestionFilterForm() {
  const { userName, currentStep, setCurrentStep, setCheckAnswer } =
    usePageChangeInfo();
  const {
    amount,
    setAmount,
    category,
    setCategory,
    difficulty,
    setDifficulty,
    type,
    setType,
  } = useQuestionFilterStore((store) => store);
  const { questionsArr, setQuestions } = useQuestionsStore((store) => store);
  const queryString = generateQuery();
  const { data: categories, isLoading } = useGetCategoriesList();
  const router = useRouter();
  // Disable eslint rule for this line
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const saveFilter = async () => {
    try {
      const questions = await useFetchQuestion(queryString);
      if (questions) {
        setQuestions(questions);
        setCheckAnswer(false);
        setCurrentStep(currentStep + 1);
      }
    } catch (error) {
      if (error.isAxiosError) {
        if (error.code === "ERR_BAD_REQUEST") {
          router.push("error");
        }
      }
    }
  };

  return (
    <>
      <fieldset className="mb-[15px] flex md:flex-row flex-col md:items-center gap-2">
        <label className=" w-[90px] text-[15px]" htmlFor="amount">
          Amount
        </label>
        <select
          name="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
        >
          {[...Array(46).keys()].map((num) => (
            <option key={num + 5} value={num + 5}>
              {num + 5}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset className="mb-[15px] flex md:flex-row flex-col  gap-2 md:items-center">
        <label className="w-[90px] text-[15px]" htmlFor="category">
          Category
        </label>
        {isLoading && (
          <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full">
            <span className="flex">
              <LoadingSpinner />
            </span>
          </div>
        )}
        {!isLoading && (
          <select
            name="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full"
          >
            <>
              <option value="">Any Categories</option>
              {categories &&
                categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.id}
                    className="text-sm"
                  >
                    {category.name}
                  </option>
                ))}
            </>
          </select>
        )}
      </fieldset>

      <fieldset className="mb-[15px] flex md:flex-row flex-col gap-2 md:items-center">
        <label className=" w-[90px] text-[15px]" htmlFor="type">
          Question Type
        </label>
        <select
          name="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
      </fieldset>

      <fieldset className="mb-[15px] flex md:flex-row flex-col gap-2 md:items-center">
        <label className=" w-[90px] text-[15px]" htmlFor="difficulty">
          Difficulty
        </label>
        <select
          name="difficulty"
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option value="">Any</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </fieldset>

      <div className="mt-[25px] flex justify-end">
        <Dialog.Close asChild>
          <button
            className={`${
              !isLoading ? "bg-blue-700" : "bg-gray-500"
            } text-white focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none`}
            onClick={saveFilter}
            disabled={isLoading}
          >
            Save Filter
          </button>
        </Dialog.Close>
      </div>
    </>
  );
}
