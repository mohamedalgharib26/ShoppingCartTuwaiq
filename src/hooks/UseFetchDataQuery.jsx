import { useQuery } from "@tanstack/react-query";

const FetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const useFetchDataQuery = (queryKey, queryUrl) =>
  useQuery({
    queryKey,
    queryFn: () => FetchData(queryUrl),
  });

export default useFetchDataQuery;
