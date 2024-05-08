"use client";
import React, { useEffect } from "react";
import { useQuestionFilterStore } from "@/store/QuestionFilter.store";
import { useGetCategoriesList } from "@/queries/Categories.api";
import * as Dialog from "@radix-ui/react-dialog";
import { useFetchQuestion, useGetQuestion } from "@/queries/Questions.api";
import { generateQuery } from "@/lib/utils";
import { useQuestionsStore } from "@/store/Question.store";
import { QueryClient } from "@tanstack/react-query";

export default function QuestionFilterForm() {
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
  const { data: categories, loading } = useGetCategoriesList();
  // Disable eslint rule for this line
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const saveFilter = async () => {
    const questions = await useFetchQuestion(queryString);
    if (questions) {
      setQuestions(questions);
    }
  };
  // Re-enable eslint rule for subsequent lines

  return (
    <>
      <fieldset className="mb-[15px] flex md:flex-row flex-col md:items-center gap-2">
        <label className=" w-[90px] text-[15px]" htmlFor="name">
          Amount
        </label>
        <select
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          {[...Array(50).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset className="mb-[15px] flex md:flex-row flex-col  gap-2 md:items-center">
        <label className="w-[90px] text-[15px]" htmlFor="name">
          Category
        </label>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 max-w-full"
        >
          {loading && <option value="">Category Loading ...</option>}
          {!loading && (
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
          )}
        </select>
      </fieldset>

      <fieldset className="mb-[15px] flex md:flex-row flex-col gap-2 md:items-center">
        <label className=" w-[90px] text-[15px]" htmlFor="name">
          Question Type
        </label>
        <select
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
        <label className=" w-[90px] text-[15px]" htmlFor="name">
          Difficulty
        </label>
        <select
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
            className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            onClick={saveFilter}
          >
            Save Filter
          </button>
        </Dialog.Close>
      </div>
    </>
  );
}
