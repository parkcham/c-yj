import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface IProps {
  size?: number;
  onPress?: (event: GestureResponderEvent) => void;
}

const RemoveButton = (props: IProps) => {
  return (
    <TouchableOpacity style={styles.contanier} onPress={props.onPress}>
      <AntDesign name="closecircleo" size={props.size} color="pink" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contanier: {
    alignItems: "flex-end",
    padding: 5,
  },
});

export default RemoveButton;
