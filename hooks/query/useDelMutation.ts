import { useMutation, useQueryClient } from "react-query";

import { deleteContent } from "../../apis/api/commonFirebase";

interface IProps {
  queryKey: string;
  id: string;
}

export default function useDelMutation(props: IProps) {
  const queryClient = useQueryClient();

  const { mutate: delContent } = useMutation({
    mutationFn: () =>
      deleteContent({ id: props.id, collection: props.queryKey }),
    onSuccess: () => {
      queryClient.invalidateQueries([props.queryKey]);
    },
  });

  return { delContent };
}
