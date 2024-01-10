import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  day: number;
}

const DayCounter = (props: IProps) => {
  return (
    <View style={styles.container}>
      {props.day >= 0 ? (
        <Text style={styles.dayText}>{props.day + 1}일</Text>
      ) : (
        <Text style={styles.dayText}>D{props.day}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  dayText: {
    fontSize: 24,
    color: "pink",
  },
});

export default DayCounter;
