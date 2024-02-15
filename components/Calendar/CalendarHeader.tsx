import React from "react";
import { Text, View, TextStyle, StyleSheet } from "react-native";
import Animated, { AnimateStyle } from "react-native-reanimated";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface IProps {
  month: string;
  selectedDate: string;
  headerStyle: AnimateStyle<TextStyle>;
}

const CalendarHeader = (props: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={[styles.textStyle, { fontSize: 22 }]}>
          {format(new Date(props.month), "yyyy. M")}
        </Text>

        <Animated.Text
          style={[props.headerStyle, styles.textStyle, { fontSize: 22 }]}
        >
          {format(new Date(props.selectedDate), ". d. ", { locale: ko })}
        </Animated.Text>

        <Animated.Text
          style={[props.headerStyle, styles.textStyle, { fontSize: 20 }]}
        >
          {format(new Date(props.selectedDate), "EE", { locale: ko })}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "bold",
    color: "#4D4D4D",
  },
});

export default CalendarHeader;
