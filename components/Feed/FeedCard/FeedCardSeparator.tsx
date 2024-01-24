import React from "react";
import { View, StyleSheet } from "react-native";

const FeedCardSeparator = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    height: 8,
    backgroundColor: "#F2F2F2",
    marginBottom: 10,
    marginTop: 20,
  },
});

export default FeedCardSeparator;
