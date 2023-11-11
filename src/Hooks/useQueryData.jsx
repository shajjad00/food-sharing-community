import { useQuery } from "@tanstack/react-query";

const useQueryData = (queryKey, url) => {
  const { data, isError, error, isLoading, refetch } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const res = await fetch(url, { credentials: "include" });
      const data = res.json();
      return data;
    },
  });
  return { data, isError, error, isLoading, refetch };
};

export default useQueryData;
