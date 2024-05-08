import { CategoriesService } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoriesList = () => {
  return useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      let result = await CategoriesService();
      return result;
    },
  });
};
