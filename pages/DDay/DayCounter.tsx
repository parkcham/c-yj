import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  selectedDate: Date;
}

const DayCounter = (props: IProps) => {
  const todayDate = new Date();
  const dis = +todayDate - +props.selectedDate;
  const day = Math.floor(dis / (1000 * 60 * 60 * 24));

  return (
    <View style={styles.container}>
      {day >= 0 ? (
        <Text style={styles.dayText}>{day + 1}일</Text>
      ) : (
        <Text style={styles.dayText}>D{day}</Text>
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
