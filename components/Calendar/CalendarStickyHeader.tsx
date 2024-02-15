import React from "react";
import { StyleSheet, TextStyle } from "react-native";
import Animated, { AnimateStyle } from "react-native-reanimated";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface IProps {
  selectedDate: string;
  headerStyle: AnimateStyle<TextStyle>;
}

const CalendarStickyHeader = (props: IProps) => {
  return (
    <Animated.Text style={[props.headerStyle, styles.text]}>
      {format(new Date(props.selectedDate), "d. EE", { locale: ko })}
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4D4D4D",
    paddingLeft: 20,
  },
});

export default CalendarStickyHeader;
