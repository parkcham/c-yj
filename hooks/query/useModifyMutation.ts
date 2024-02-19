import { useQueryClient, useMutation } from "react-query";
import { updateContent } from "../../apis/api/commonFirebase";

interface IProps {
  queryKey: string;
}

export default function useModifyMutation(props: IProps) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updateContent,
    onSuccess: () => {
      queryClient.invalidateQueries([props.queryKey]);
    },
  });

  return { mutate };
}
