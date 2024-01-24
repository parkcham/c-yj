import React from "react";
import { View, Text, StyleSheet } from "react-native";

import RemoveButton from "../../Common/RemoveButton";

interface IProps {
  id?: number;
  detail: string;
  time: string;
}

const CalendarCard = (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>{props.time}</Text>
        <RemoveButton size={13} onPress={() => console.log("tlqkf")} />
      </View>

      <Text style={styles.detail}>{props.detail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#F2F2F2",
    marginLeft: 14,
    marginRight: 14,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 20,
    color: "#545454",
  },
  detail: {
    color: "#545454",
    paddingTop: 5,
    paddingBottom: 15,
    fontSize: 16,
  },
});

export default CalendarCard;
