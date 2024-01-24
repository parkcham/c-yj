import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface IProps {
  selectedDate: string;
  dataLength: number;
}

const SectionHeader = (props: IProps) => {
  return (
    <View style={styles.container}>
      
      {props.selectedDate === format(new Date(), "yyyy-MM-dd") ? (
        <Text style={styles.today}>Today</Text>
      ) : (
        <View style={styles.dateView}>
          <Text style={styles.day}>
            {format(new Date(props.selectedDate), "d")}
          </Text>
          <Text style={styles.week}>
            ({format(new Date(props.selectedDate), "EE", { locale: ko })})
          </Text>
        </View>
      )}

      {props.dataLength > 0 ? (
        <Text style={styles.dataLength}>일정:{props.dataLength}개</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  dateView: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  day: {
    fontSize: 20,
    color: "pink",
  },
  week: {
    color: "pink",
  },
  today: {
    fontSize: 20,
    color: "#5CD1E5",
  },
  dataLength: {
    fontSize: 16,
    color: "#545454",
  },
});

export default SectionHeader;
