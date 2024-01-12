import React from "react";
import { StyleSheet } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";

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

const Calendar = () => {
  return (
    <CalendarList
      style={styles.calendar}
      horizontal={true}
      pagingEnabled={true}
      pastScrollRange={1}
      futureScrollRange={6}
      monthFormat="yyyy년 M월"
      headerStyle={{}}
      hideArrows={false}
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
        monthTextColor: "#545454",
        textMonthFontSize: 20,
        todayBackgroundColor: "#5CD1E5",
        todayTextColor: "white",
        textDayStyle: {
          color: "#545454",
        },
      }}
    />
  );
};
const styles = StyleSheet.create({
  calendar: {
    height: 350,
    borderWidth: 1,
  },
});

export default Calendar;
