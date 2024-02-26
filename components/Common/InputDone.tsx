import React from "react";
import {
  View,
  InputAccessoryView,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const InputDone = () => {
  return (
    <InputAccessoryView nativeID="done">
      <View style={styles.container}>
        <TouchableOpacity onPress={Keyboard.dismiss}>
          <MaterialIcons name="keyboard-hide" size={24} color="pink" />
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
