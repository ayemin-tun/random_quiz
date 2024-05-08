import { QuestionService } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetQuestion = (query) => {
  return useQuery({
    queryKey: ["getQuestions"],
    queryFn: async () => {
      let result = await QuestionService(query);
      return result;
    },
  });
};
