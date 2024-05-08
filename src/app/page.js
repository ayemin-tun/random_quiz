"use client"
import { useGetCategoriesList } from "@/queries/Categories.api";
import { useGetQuestion } from "@/queries/Questions.api";

export default function Home() {
  return (
    <main className="w-full h-screen bg-gray-900">
      <h1 className="text-white">Hello Next Js</h1>
    </main>
  );
}
