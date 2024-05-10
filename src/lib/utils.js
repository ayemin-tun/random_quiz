import { useQuestionFilterStore } from "@/store/QuestionFilter.store";

export const generateQuery = () => {
    const { amount, category, difficulty, type } = useQuestionFilterStore(
        (store) => store
    );
    const amountQueryParam = `amount=${amount}`;
    const categoryQueryParam = category ? `&category=${category}` : "";
    const difficultyQueryParam = difficulty ? `&difficulty=${difficulty}` : "";
    const typeQueryParam = type ? `&type=${type}` : "";

    return `${amountQueryParam}${categoryQueryParam}${difficultyQueryParam}${typeQueryParam}`;
};

export const decodeHTMLEntities = (text) => {
    const element = document.createElement("div");
    if (text) {
        element.innerHTML = text;
        return element.innerText;
    }
    return "";
};

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
};

export const getTotalCorrectAnswer = (answrArray) => {
    const correctCount = answrArray.reduce((count, currentValue) => {
        if (currentValue === true) {
            return count + 1;
        }
        return count;
    }, 0);
    return correctCount
}
