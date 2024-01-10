import React from "react";
import {
  TextInput,
  StyleSheet,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

interface IProps {
  value: string;
  placeholder: string;
  multiline: boolean;
  onChangeText: (text: string) => void;
  style?: StyleProp<ViewStyle>;
}

const Input = (props: IProps) => {
  return (
    <View style={props.style}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        inputAccessoryViewID="done"
        value={props.value}
        autoCapitalize="none"
        selectionColor={"pink"}
        multiline={props.multiline}
        onChangeText={(text) => props.onChangeText(text)}
      />
    </View>
  );
};
Input.defaultProps = {
  placeholder: "내용",
  multiline: false,
};
const styles = StyleSheet.create({
  input: {
    color: "#545454",
    fontSize: 20,
    textAlignVertical: "top",
  },
});

export default Input;
