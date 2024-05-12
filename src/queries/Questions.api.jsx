import { QuestionService } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useGetQuestion = (query) => {
  return useQuery({
    queryKey: ["getQuestions"],
    queryFn: async () => {
      let result = await QuestionService(query);
      return result;
    },
  });
};

export const useFetchQuestion = async (query) => {
  const response = await QuestionService(query);
  return response;
};
