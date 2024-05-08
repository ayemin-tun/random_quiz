import create from 'zustand';
import zukeeper from "zukeeper";
const useQuestionFilterStore = create(zukeeper((set) => ({
  amount: 10,
  category: '',
  difficulty: '',
  type: '',
  setAmount: (amount) => set({ amount }),
  setCategory: (category) => set({ category }),
  setDifficulty: (difficulty) => set({ difficulty }),
  setType: (type) => set({ type }),
})));

export { useQuestionFilterStore };
