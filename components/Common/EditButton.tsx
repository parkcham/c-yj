import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
interface IProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const EditButton = (props: IProps) => {
  return (
    <TouchableOpacity  onPress={props.onPress}>
      <AntDesign name="edit" size={20} color="#4D4D4D" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  right: {
    paddingRight: 14,
  },
});

export default EditButton;
