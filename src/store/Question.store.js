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
                const isCorrect = Array(questions.length).fill(false);

                set({ questionsArr: questions, answersArray, userAnswers, isCorrect });
            },
            setUserAnswer: (index, answer) =>
                set((state) => {
                    const userAnswers = [...state.userAnswers];
                    userAnswers[index] = answer;
                    return { userAnswers };
                }),
            checkUserAnswers: () =>
                set((state) => {
                    const { questionsArr, answersArray, userAnswers, isCorrect } = state;
                    const newIsCorrect = userAnswers.map((userAnswer, index) => {
                        return userAnswer === questionsArr[index].correct_answer;
                    });
                    return { isCorrect: newIsCorrect };
                }),
        }),
        {
            name: 'Question_store', // Name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (Optional) Use localStorage for persistence
        }
    )
);

export { useQuestionsStore };
