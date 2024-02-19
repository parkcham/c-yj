import { useQuery } from "react-query";

import { getContent } from "../../apis/api/commonFirebase";

interface IProps {
  queryKey: string;
}

export default function useGetQuery(props: IProps) {
  const { data, isLoading } = useQuery([props.queryKey], () =>
    getContent({ collection: props.queryKey })
  );

  return { data, isLoading };
}
