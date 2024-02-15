import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface IProps {
  detail: string;
  time: string;
}

const CalendarCard = (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <View>
        <Text style={styles.detail}>{props.detail}</Text>
        <Text style={styles.time}>{props.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 17,
  },
  box: {
    backgroundColor: "pink",
    width: 4,
    borderRadius: 10,
    marginRight: 10,
  },
  detail: {
    fontSize: 18,
    color: "#4D4D4D",
    paddingBottom: 5,
  },
  time: {
    color: "#C2C2C2",
  },
});

export default CalendarCard;
