import { useQuestionFilterStore } from "@/store/QuestionFilter.store";

export const generateQuery = () => {
    const {
        amount,
        category,
        difficulty,
        type,
    } = useQuestionFilterStore((store) => store);
    const amountQueryParam = `amount=${amount}`;
    const categoryQueryParam = category
        ? `&category=${category}`
        : "";
    const difficultyQueryParam = difficulty ? `&difficulty=${difficulty}` : "";
    const typeQueryParam = type ? `&type=${type}` : "";

    return `${amountQueryParam}${categoryQueryParam}${difficultyQueryParam}${typeQueryParam}`;
};