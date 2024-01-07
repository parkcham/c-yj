import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface IProps {
  value: string;
  onChangeText: (text: string) => void;
}

const TitleInput = (props: IProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="제목"
      inputAccessoryViewID="done"
      value={props.value}
      onChangeText={(text) => props.onChangeText(text)}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    color: "#545454",
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default TitleInput;
