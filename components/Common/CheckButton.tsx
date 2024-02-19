import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface IProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const CheckButton = (props: IProps) => {
  return (
    <TouchableOpacity style={styles.right} onPress={props.onPress}>
      <Feather name="check" size={22} color="#4D4D4D" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  right: {
    paddingRight: 14,
  },
});
export default CheckButton;
