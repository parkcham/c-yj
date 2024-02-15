import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CalendarEmptyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <Text style={styles.text}>일정 없음 !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 17,
  },
  box: {
    backgroundColor: "#4D4D4D",
    width: 4,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    color: "#4D4D4D",
  },
});

export default CalendarEmptyCard;
