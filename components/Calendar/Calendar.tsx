import React from "react";
import { StyleSheet } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { MarkedDates, DateData } from "react-native-calendars/src/types";

LocaleConfig.locales["fr"] = {
  monthNames: [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ],
  monthNamesShort: [
    "Janv.",
    "Févr.",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ],
  dayNames: [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ],
  dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
};
LocaleConfig.defaultLocale = "fr";

interface IProps {
  markedDates?: MarkedDates | undefined;
  onDayPress: (date: DateData) => void;
}

const Calendar = (props: IProps) => {
  return (
    <CalendarList
      style={styles.calendar}
      horizontal={true}
      pagingEnabled={true}
      pastScrollRange={1}
      futureScrollRange={6}
      monthFormat="yyyy년 M월"
      // headerStyle={{}}
      hideArrows={true}
      staticHeader={true}
      markedDates={props.markedDates}
      onDayPress={props.onDayPress}
      theme={{
        "stylesheet.calendar.header": {
          dayTextAtIndex0: {
            color: "red",
          },
          dayTextAtIndex6: {
            color: "blue",
          },
        },
        arrowColor: "pink",
        monthTextColor: "#8A8A8A",
        textMonthFontSize: 20,
        todayBackgroundColor: "#5CD1E5",
        todayTextColor: "white",
        textDayFontWeight: "bold",
        textMonthFontWeight: "bold",
        textDayStyle: {
          color: "#8A8A8A",
        },
      }}
    />
  );
};
const styles = StyleSheet.create({
  calendar: {
    height: 350,
  },
});

export default Calendar;
