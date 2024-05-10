import { create } from 'zustand';
import zukeeper from "zukeeper";
import { persist, createJSONStorage } from 'zustand/middleware';
const usePageChangeInfo = create(
    persist(
        zukeeper((set) => ({
            currentStep: 0,
            userName: '',
            checkAnswer: false,
            setCurrentStep: (currentStep) => set({ currentStep }),
            setUserName: (userName) => set({ userName }),
            setCheckAnswer: (checkAnswer) => set({ checkAnswer })
        })), {
        name: 'PageChangeInfo', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
    )
);

export { usePageChangeInfo };
