import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../navigation/types";
import useHeader from "../../hooks/useHeader";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";
import CheckButton from "../../components/Common/CheckButton";
import useModifyMutation from "../../hooks/query/useModifyMutation";

type FeedModifyProps = StackScreenProps<RootStackParamList, "FeedModify">;

const FeedModify = ({ route }: FeedModifyProps) => {
  const { oldDetail ,id} = route.params;
  const navigation = useNavigation();

  const {mutate} = useModifyMutation({queryKey:"Feeds"})
 
  const modFeed = () => {
    navigation.goBack()
    mutate({collection:"Feeds" , id: id, detail})
  }
  
  const [detail, setDetail] = useState(oldDetail);

  useHeader({
    deps: [detail],
    headerRight: (
      <CheckButton onPress={modFeed}/>
    ),
  });

  return (
    <>
      <View style={styles.container}>
        <Input
          style={styles.input}
          multiline={true}
          value={detail}
          onChangeText={setDetail}
        />
      </View>
      <InputDone />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    height: 300,
    padding: 10,
    borderTopWidth: 1.2,
    borderBottomWidth: 1.2,
    borderColor: "#F2F2F2",
  },
});

export default FeedModify;
