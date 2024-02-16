import React from "react";
import { Text, View, StyleSheet } from "react-native";

import RemoveButton from "../../Common/RemoveButton";

interface IProps {
  detail: string;
  time: string;
}

const CalendarCard = (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.box} />

        <View>
          <Text style={styles.detail}>{props.detail}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
      </View>
      <RemoveButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    marginTop: 17,
    justifyContent: "space-between",
  },
  inner: {
    flexDirection: "row",
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
