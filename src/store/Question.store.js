import { create } from 'zustand';
import zukeeper from "zukeeper";
import { persist, createJSONStorage } from 'zustand/middleware';
const useQuestionsStore = create(
    persist(
        zukeeper((set) => ({
            questionsArr: [],
            setQuestions: (questionsArr) => set({ questionsArr }),
        })), {
        name: 'Question_store', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
    )
);
export { useQuestionsStore };
