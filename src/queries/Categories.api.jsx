import { CategoriesService } from "@/services/ApiService";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoriesList = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getCategories"],
    queryFn: async () => {
      let result = await CategoriesService();
      return result;
    },
  });

  return { isLoading, data, error };
};
