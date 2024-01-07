import React from "react";
import {
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from "react-native";

interface IProps {
  title: string;
  detail: string;
  onChangeTitle: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  onChangeDetail: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
}

const DiaryInput = (props: IProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="제목"
        inputAccessoryViewID="done"
        value={props.title}
        onChange={props.onChangeTitle}
      />
      <TextInput
        style={styles.detailInput}
        placeholder="오늘 하루를 기록 해보거라"
        inputAccessoryViewID="done"
        value={props.detail}
        onChange={props.onChangeDetail}
        multiline
        scrollEnabled={false}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  titleInput: {
    color: "#545454",
    fontSize: 22,
  },
  detailInput: {
    color: "#545454",
    fontSize: 18,
  },
});

export default DiaryInput;
