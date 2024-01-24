import React, { useRef } from "react";
import { SafeAreaView, Animated, StyleSheet } from "react-native";

import Calendar from "../../components/Calendar/Calendar";
import CalendarList from "../../components/Calendar/CalendarList";
import CalendarHeader from "../../components/Calendar/CalendarHeader";
import useCalendar from "../../hooks/useCalendar";

const CalendarScreen = () => {
  const data = [
    {
      id: 929,
      detail: "test",
      time: "5:40",
      date: "2024-01-24",
    },

    {
      id: 99,
      detail: "test",
      time: "5:40",
      date: "2024-01-25",
    },
    {
      id: 9229,
      detail: "test",
      time: "5:40",
      date: "2024-01-25",
    },

    {
      id: 1,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 2,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 3,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 4,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 5,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 6,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 7,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 8,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 9,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 10,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 11,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 12,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
  ];

  const {
    month,
    selectedDate,
    filteredData,
    markedSelectedDate,
    onDayMonth,
    onDayPress,
  } = useCalendar({ data: data });

  const scrollY = useRef(new Animated.Value(0)).current;
  const headerWeekColor = scrollY.interpolate({
    inputRange: [330, 330],
    outputRange: ["white", "pink"],
    extrapolate: "clamp",
  });
  return (
    <SafeAreaView style={styles.container}>
      <CalendarHeader
        color={headerWeekColor}
        month={month}
        selectedDate={selectedDate}
      />

      <CalendarList
        selectedDate={selectedDate}
        data={filteredData}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } },
            },
          ],
          { useNativeDriver: false }
        )}
        ListHeaderComponent={
          <Calendar
            markedDates={markedSelectedDate}
            onDayPress={onDayPress}
            onMonthChange={onDayMonth}
          />
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default CalendarScreen;
