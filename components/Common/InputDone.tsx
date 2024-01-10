import React from "react";
import {
  View,
  InputAccessoryView,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InputDone = () => {
  return (
    <InputAccessoryView nativeID="done">
      <View style={styles.container}>
        <TouchableOpacity onPress={Keyboard.dismiss}>
          <FontAwesome name="download" size={26} color="pink" />
        </TouchableOpacity>
      </View>
    </InputAccessoryView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 10,
  },
});

export default InputDone;
