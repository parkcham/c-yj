import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface IProps {
  disabled: number;
  onPress: (event: GestureResponderEvent) => void;
}

const SendButton = (props: IProps) => {
  return (
    <TouchableOpacity
      style={styles.right}
      disabled={props.disabled > 0 ? false : true}
      onPress={props.onPress}
    >
      <Feather
        name="send"
        size={20}
        style={{ transform: [{ rotate: "20deg" }] }}
        color={props.disabled > 0 ? "#4D4D4D" : "#E6E6E6"}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  right: {
    paddingRight: 14,
  },
});

export default SendButton;
