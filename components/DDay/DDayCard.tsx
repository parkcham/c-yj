import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DateData } from "react-native-calendars/src/types";
import { Card } from "react-native-paper";

interface IProps {
  detail: string;
  selectedDate: string;
  day: string;
}

const DDayCard = (props: IProps) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.detail}>{props.detail}</Text>
        <Text style={styles.selectedDate}>{props.selectedDate}</Text>
        <View style={styles.day}>
          <Text style={styles.dayText}>{props.day}</Text>
        </View>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
  },
  detail: {
    fontSize: 20,
    color: "#545454",
  },
  selectedDate: {
    color: "#8A8A8A",
    paddingTop: 5,
    paddingBottom: 10,
  },
  day: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    padding: 14,
    borderRadius: 7,
  },
  dayText: {
    fontSize: 24,
  },
});

export default DDayCard;
