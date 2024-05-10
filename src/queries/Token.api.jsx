import { TokenService } from "@/services/ApiService";

export const useFetchToken = async () => {
  const response = await TokenService();
  return response;
};
