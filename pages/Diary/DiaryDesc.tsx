import React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { deleteContent } from "../../apis/api/commonFirebase";
import { RootStackParamList } from "../../navigation/types";
import { InfiniteData, useMutation, useQueryClient } from "react-query";
import useHeader from "../../hooks/useHeader";
import DeleteButton from "../../components/Common/DeleteButton";
import EditButton from "../../components/Common/ModifyButton";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../navigation/types";

type DiaryDescProps = StackScreenProps<RootStackParamList, "DiaryDesc">;

const DiaryDesc = ({ route }: DiaryDescProps) => {
  const { title, detail, id } = route.params;
  const queryClient = useQueryClient();
  const navigation = useNavigation<ScreenNavigationProp>();

  // const del = useMutation({
  //     mutationFn: deleteContent,
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //     //   queryClient.invalidateQueries({ queryKey: ['Diarys'] })
  //     queryClient.setQueryData({ qu })

  //     },
  //   })
  //   const { mutate:del } = useMutation({
  //     mutationFn: () => deleteContent({ collection: "Diarys", id: id }),
  //     onSuccess:() =>{
  //         queryClient.setQueryData(["Diarys"])
  // });
  const { mutate: del } = useMutation(
    () => deleteContent({ collection: "Diarys", id: id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["Diarys"] });

        // onSuccess(data, variables) { // variables는 mutate함수가 받는 변수다.
        //   const oldData = queryClient.getQueryData<any>(['Diarys', 'docList']);
        //   queryClient.setQueryData<any>(['Diarys', 'docList'], {
        //     ...oldData,
        //     files: oldData.filter((file: { id: string; }) => file.id !== id) as File[],
        //   });
        // }
        // queryClient.getQueryData(['Diarys']),{data}
        // const allPosts= queryClient.getQueryData<any>(['Diarys']);
        // const remove = allPosts.filter((d: { id: string; }) => d.id !== id)
        // queryClient.setQueryData(['Diarys'],data)

        // }
      },
    }
  );
  const diaryDelete = () => {
    del();

    navigation.goBack();
  };
  const diaryModify = () => {
    navigation.navigate("DiaryModify", {
      id: id,
      title: title,
      detail: detail,
    });
  };
  useHeader({
    headerTitle: title,
    headerRight: (
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <DeleteButton onPress={diaryDelete} />
        <EditButton onPress={diaryModify} />
      </View>
    ),
  });
  return (
    <ScrollView bounces={false} style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 20, color: "#1A1A1A" }}>{detail}</Text>
      {/* <Text>{id}</Text> */}
    </ScrollView>
  );
};

export default DiaryDesc;
