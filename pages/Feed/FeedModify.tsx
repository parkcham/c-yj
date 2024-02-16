import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../../navigation/types";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";

type FeedModifyProps = StackScreenProps<RootStackParamList, "FeedModify">;

const FeedModify = ({ route }: FeedModifyProps) => {
  const { oldDetail } = route.params;

  const [detail, setDetail] = useState(oldDetail);

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
