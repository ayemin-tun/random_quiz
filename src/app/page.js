"use client";
import ControlledStep from "@/components/ControlStep";
import { useEffect, useState } from "react";
import HomePage from "@/components/ChangePage/HomePage";
import NameRequestPage from "@/components/ChangePage/NameRequestPage";
import QuestionFilterPage from "@/components/ChangePage/QuestionFilterPage";
import QuestionPage from "@/components/ChangePage/QuestionPage";
import { usePageChangeInfo } from "@/store/PageChange.store";
import WelcomePage from "@/components/ChangePage/WelcomePage";
import { useQuestionsStore } from "@/store/Question.store";
import CheckAnswer from "@/components/ChangePage/components/CheckAnswer";
import { useFetchToken } from "@/queries/Token.api";
import Cookies from 'js-cookie';
import SomeThingsWrongPage from "@/components/ChangePage/SomeThingsWrongPage";

export default function Home() {
  const { currentStep, setCurrentStep, checkAnswer } = usePageChangeInfo();
  const { questionsArr, setQuestions } = useQuestionsStore();
  const handleChangeSteps = (newStep) => {
    setCurrentStep(newStep);
  }
  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await useFetchToken();
        if (token) {
          Cookies.set('questionToken', token, { expires: 1 });
          console.log('Token stored in cookie:', token);
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    getToken();
  }, []);
  return (
    <main className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <ControlledStep
        currentStep={currentStep}
        handleChangeSteps={handleChangeSteps}
      >
        <HomePage />
        <NameRequestPage />
        <WelcomePage />
        <QuestionFilterPage />
        {
          questionsArr.length > 0 ? (
            questionsArr.map((question, index) => (
              <QuestionPage question={question} key={index} index={index} />
            ))) : (
            <SomeThingsWrongPage />
          )
        }
        {checkAnswer && (<CheckAnswer />)}
      </ControlledStep>

    </main>
  );
}
