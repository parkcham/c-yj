import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface IProps {
  selectedDateTime: Date;
  datePicker: (event: GestureResponderEvent) => void;
  timePicker: (event: GestureResponderEvent) => void;
}

const CalendarDateInput = (props: IProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.date} onPress={props.datePicker}>
        <Text style={styles.text}>
          {format(new Date(props.selectedDateTime), "yyyy. MM. dd. (EE)", {
            locale: ko,
          })}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.timePicker}>
        <Text style={styles.text}>
          {format(new Date(props.selectedDateTime), " a h:mm", { locale: ko })}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.2,
    borderTopWidth: 1.2,
    borderColor: "#F2F2F2",
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    paddingRight: 10,
  },
  text: {
    color: "#8A8A8A",
    fontSize: 18,
  },
});
export default CalendarDateInput;
