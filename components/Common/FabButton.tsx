import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

interface IProps {
  icon: string;
  onPress?: () => void;
}

const FabButton = (props: IProps) => {
  return (
    <FAB
      icon={props.icon}
      color="white"
      style={styles.FAB}
      onPress={props.onPress}
    />
  );
};
const styles = StyleSheet.create({
  FAB: {
    backgroundColor: "pink",
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FabButton;
