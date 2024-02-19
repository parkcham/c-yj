import { useInfiniteQuery } from "react-query";
import { getContent } from "../../apis/api/commonFirebase";

interface IProps {
  queryKey: string;
  limit: number;
}
export default function useGetInfiniteQuery(props: IProps) {
  const { data, fetchNextPage, hasNextPage,isLoading } = useInfiniteQuery(
    [props.queryKey],
    ({ pageParam }) =>
      getContent({
        collection: props.queryKey,
        limit: props.limit,
        pageParam: pageParam,
      }),

    {
      getNextPageParam: (lastPage) => {
        if (lastPage.length < props.limit) return null;
        else return lastPage[lastPage.length - 1];
      },
    }
  );
  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return { data, isLoading,onEndReached };
}
