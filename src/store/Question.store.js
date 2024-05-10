"use client"
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { shuffleArray } from '@/lib/utils';

const useQuestionsStore = create(
    persist(
        (set) => ({
            questionsArr: [],
            answersArray: [], // Array of shuffled answers for each question
            userAnswers: [], // Array to store user's selected answers
            isCorrect: [], // Array to track correctness of user's answers
            setQuestions: (questions) => {
                const answersArray = questions.map((question) => {
                    const allAnswers = [question.correct_answer, ...question.incorrect_answers];
                    return shuffleArray(allAnswers);
                });

                // Initialize userAnswers and isCorrect arrays based on questions length
                const userAnswers = Array(questions.length).fill(null);
                const isCorrect = Array(questions.length).fill(null);

                set({ questionsArr: questions, answersArray, userAnswers, isCorrect });
            },
            // Action to update userAnswers based on selected answer
            setUserAnswer: (questionIndex, selectedAnswer) => {
                set((state) => {
                    const updatedUserAnswers = [...state.userAnswers];
                    updatedUserAnswers[questionIndex] = selectedAnswer;

                    const isCorrect = [...state.isCorrect];
                    const correctAnswer = state.questionsArr[questionIndex].correct_answer;
                    isCorrect[questionIndex] = selectedAnswer === correctAnswer;
                    return { userAnswers: updatedUserAnswers, isCorrect };
                });
            },
            reset: () => {
                set({
                    questionsArr: [],
                    answersArray: [],
                    userAnswers: [],
                    isCorrect: [],
                });
            }
        }),
        {
            name: 'Question_store', // Name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (Optional) Use localStorage for persistence
        }
    )
);

export { useQuestionsStore };
