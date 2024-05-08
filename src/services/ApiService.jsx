import axios from "axios";

export const ApiService = axios.create({
  baseURL: "https://opentdb.com",
  withCredentials: false,
});

export const CategoriesService = async () => {
  let result = await ApiService.get("/api_category.php");
  return result.data.trivia_categories;
};

export const QuestionService = async (query) => {
  let result = await ApiService.get(`/api.php?${query}`);
  return result.data.results;
};
