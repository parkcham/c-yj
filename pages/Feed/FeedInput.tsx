import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

interface IProps {
  title: string;
  detail: string;
  onChangeTitle: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeDetail: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const FeedInput = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>제목</Text>
      <TextInput
        style={styles.titleInput}
        placeholder="제목"
        inputAccessoryViewID="done"
        value={props.title}
        onChange={props.onChangeTitle}
        autoCapitalize="none"

      />

      <Text style={styles.text}>내용</Text>
      <TextInput
        style={styles.detailInput}
        placeholder="내용"
        multiline
        scrollEnabled={false}
        inputAccessoryViewID="done"
        value={props.detail}
        onChange={props.onChangeDetail}
        autoCapitalize="none"

      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 26,
    paddingTop: 10,
  },

  text: {
    color: "pink",
    paddingBottom: 5,
    paddingTop: 10,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 8,
    borderRadius: 8,
    color: "#545454",
    fontSize: 20,
  },
  detailInput: {
    marginBottom: 50,
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    minHeight: 200,
    color: "#545454",
    borderColor: "#E0E0E0",
    fontSize: 20,
    textAlignVertical:"top"
  },
});

export default FeedInput;
