"use client";
import { usePageChangeInfo } from "@/store/PageChange.store";
import { useQuestionsStore } from "@/store/Question.store";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
    const { setCurrentStep } = usePageChangeInfo();
    const { reset } = useQuestionsStore();
    const router = useRouter();
    const handleHome = () => {
        setCurrentStep(0);
        router.push('/');
        reset();
    }
    return (
        <main className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
            <div className="p-6">
                <h1 className="text-white font-extrabold text-4xl mb-2">
                    OOps!
                </h1>
                <p className="text-lg text-gray-600 font-bold">
                    {"You are requesting too rapidly. Please wait a moment and try your request again."}
                </p>
                <button className="px-6 py-3  sm:py-2 bg-blue-800 text-white cursor-pointer rounded-md mt-4" onClick={handleHome}>
                    Go to Home
                </button>
            </div>
        </main>
    );
}
