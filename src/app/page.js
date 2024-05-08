"use client"
import FilterQuestion from "@/components/FilterQuestion";
import { useQuestionsStore } from "@/store/Question.store";
export default function Home() {
  const { questionsArr, setQuestions } = useQuestionsStore((store) => store);

  return (
    <main className="w-full h-screen">
      <h1 className="text-white">Hello Next Js</h1>
      <FilterQuestion />
      <ul>
        {questionsArr.map((question) => <li key={question.id}>{question?.question}</li>)}
      </ul>
    </main>
  );
}
