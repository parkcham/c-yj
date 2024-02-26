import React from "react";
import { Text, View, StyleSheet } from "react-native";
import RemoveButton from "../../Common/RemoveButton";
import useDelMutation from "../../../hooks/query/useDelMutation";

interface IProps {
  id: string;
  detail: string;
  time: string;
}

const CalendarCard = (props: IProps) => {

  const { delContent } = useDelMutation({ queryKey: "Calendar", id: props.id });

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.box} />

        <View>
          <Text style={styles.detail}>{props.detail}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
      </View>
      <RemoveButton onPress={() => delContent()} />
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
