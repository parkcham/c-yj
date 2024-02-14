import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
interface IProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const DeleteButton = (props: IProps) => {
  return (
    <TouchableOpacity
              onPress={props.onPress}
    >
      <EvilIcons name="trash" size={27} color="#E80000" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  right: {
    paddingRight: 14,
  },
});

export default DeleteButton;
