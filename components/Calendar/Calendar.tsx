import React, { createRef, useRef, useState,RefObject } from "react";
import { Button, StyleSheet, View, useWindowDimensions ,Text} from "react-native";
import { CalendarList, LocaleConfig, } from "react-native-calendars";
import { MarkedDates, DateData } from "react-native-calendars/src/types";
import { format } from "date-fns";

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
  onDayPress?: (date: DateData) => void;
  onMonthChange? : (date: DateData) => void
}

const Calendar = (props: IProps) => {
 const renderHeader = () =>{

 }
  return (
    <CalendarList
    // dayComponent={({date, state}) => {
    //   return (
    //     <View>
    //       <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text>
    //       <Text>zz</Text>
    //     </View>
    //   );
    // }}
      style={styles.calendar}
      horizontal={true}
      pagingEnabled={true}
      pastScrollRange={0}
      showSixWeeks={true}
      futureScrollRange={12}
      monthFormat="yyyy년 M월"
      hideArrows={true}
      hideExtraDays ={false}
      staticHeader={true}
      disableMonthChange={true}
      // hideExtraDays={false}
      // disableMonthChange={true}
      // enableSwipeMonths={true}
      markedDates={props.markedDates}
      onDayPress={props.onDayPress}
      // onVisibleMonthsChange={props.onVisibleMonthsChange}
      onMonthChange={props.onMonthChange}
      theme={{
        "stylesheet.calendar.header": {
          header: {
            height: 0,
            opacity: 0,
          },
          dayTextAtIndex0: {
            color: "red",
          },
          dayTextAtIndex6: {
            color: "blue",
          },
        },
        monthTextColor: "#8A8A8A",
        textMonthFontSize: 20,
        todayTextColor: "#5CD1E5",
        textDayFontWeight: "bold",
        selectedDotColor:"red",
        // textMonthFontWeight: "bold",
        textDayStyle: {
          color: "#8A8A8A",
        },
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    height: 360,
  },
});

export default Calendar;
