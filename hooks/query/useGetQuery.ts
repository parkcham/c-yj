import { useQuery } from "react-query";

import { getContent } from "../../apis/api/commonFirebase";

interface IProps {
  queryKey: string;
}

export default function useGetQuery(props: IProps) {
  const { data:newData, isLoading } = useQuery([props.queryKey], () =>
    getContent({ collection: props.queryKey })
  );
  const data = newData ? Object.values(newData) : [];

  return { data, isLoading };
}
