import React from "react";
import { TouchableOpacity, GestureResponderEvent } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IProps {
  onPress?: (event: GestureResponderEvent) => void;
}

const EllipsisButton = (props: IProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons name="ellipsis-horizontal" size={24} color="#4D4D4D" />
    </TouchableOpacity>
  );
};

export default EllipsisButton;
