import React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";

const Handle = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          {
            width: width / 9,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 10,
  },
  box: {
    backgroundColor: "#E6E6E6",
    borderRadius: 10,
    height: 4,
  },
});

export default Handle;
