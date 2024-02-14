import React from "react";
import { StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface IProps {
  icon: string;
  onPress?: () => void;
  visible: boolean;
}

const FabButton = (props: IProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <FAB
      visible={props.visible}
      icon={props.icon}
      color="white"
      style={[styles.FAB, { bottom: bottom + 50 }]}
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
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FabButton;
