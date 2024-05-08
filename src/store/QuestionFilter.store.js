import { create } from 'zustand';
import zukeeper from "zukeeper";
import { persist, createJSONStorage } from 'zustand/middleware';
const useQuestionFilterStore = create(
  persist(
    zukeeper((set) => ({
      amount: 10,
      category: '',
      difficulty: '',
      type: '',
      setAmount: (amount) => set({ amount }),
      setCategory: (category) => set({ category }),
      setDifficulty: (difficulty) => set({ difficulty }),
      setType: (type) => set({ type }),
    })), {
    name: 'Filter_Question', // name of the item in the storage (must be unique)
    storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
  }
  )
);

export { useQuestionFilterStore };
