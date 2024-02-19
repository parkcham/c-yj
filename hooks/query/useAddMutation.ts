import { useMutation, useQueryClient } from "react-query";

import { createContent } from "../../apis/api/commonFirebase";

interface IProps {
  queryKey: string;
}

export default function useAddMutation(props: IProps) {
  const queryClient = useQueryClient();

  const { mutate: addContent } = useMutation({
    mutationFn: createContent,
    onSuccess: () => {
      queryClient.invalidateQueries([props.queryKey]);
    },
  });

  return { addContent };
}
