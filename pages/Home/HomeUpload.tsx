import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import useHeader from "../../hooks/useHeader";

import { View, Text, StyleSheet, Platform } from "react-native";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";
import { RootStackParamList } from "../../navigation/types";
import CheckButton from "../../components/Common/CheckButton";
import useAddMutation from "../../hooks/query/useAddMutation";
import { createdAt } from './../../apis/api/commonFirebase';
import useModifyMutation from "../../hooks/query/useModifyMutation";

type HomeUploadProps = StackScreenProps<RootStackParamList, "HomeUpload">;

const HomeUpload = ({ route }: HomeUploadProps) => {
  const { addContent } = useAddMutation({ queryKey: "Home" });
  const {mutate} = useModifyMutation({queryKey:"Home"})

  const { id, oldDetail, value, date } = route.params;
  const [detail, setDetail] = useState(oldDetail ?? "");

  const addList = () => {
    addContent({
      collection : "Home",
      detail : detail,
      value : value,
      createdAt: createdAt
    })
  }

  const modifyList = () => {
    mutate({collection:"Home" , id: id, detail})
  }

  useHeader({
    deps: [detail],
    headerTitle: value + "일",
    headerRight: <CheckButton onPress={id ? modifyList : addList}/>,
  });

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ alignItems: "center", paddingBottom: 10 }}>
          <Text style={{ color: "#4D4D4D" }}>{date}</Text>
        </View>
        <Input
          value={detail}
          onChangeText={setDetail}
          style={styles.input}
          multiline={true}
        />
  
      </View>
      {Platform.OS==="ios" ? <InputDone /> : null}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },
  input: {
    height: 220,
    padding: 10,
    borderTopWidth: 1.2,
    borderBottomWidth: 1.2,
    borderColor: "#F2F2F2",
  },
});

export default HomeUpload;
