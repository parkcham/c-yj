import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  OpaqueColorValue,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";

import { ScreenNavigationProp } from "../../navigation/types";

interface IProps {
  month: string;
  selectedDate: string;
  color?:
    | string
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | OpaqueColorValue
    | undefined;
}

const CalendarHeader = (props: IProps) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const calendarUpload = () => {
    navigation.navigate("CalendarUpload", {
      selectedDate: props.selectedDate,
    });
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.month}>
          {format(new Date(props.month), "yyyy년 M월")}
        </Text>
        <Animated.Text style={[styles.day, { color: props.color }]}>
          {format(new Date(props.selectedDate), " d일")}
        </Animated.Text>
      </View>

      <TouchableOpacity onPress={calendarUpload}>
        <AntDesign name="plus" size={24} color="#545454" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  textView: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  month: {
    fontSize: 22,
    color: "#545454",
  },
  day: {
    fontSize: 22,
  },
});

export default CalendarHeader;
