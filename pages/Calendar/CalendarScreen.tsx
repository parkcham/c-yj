import React, { useRef, useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  SectionList,
  Animated,
} from "react-native";
import Calendar from "../../components/Calendar/Calendar";
import FabButton from "../../components/Common/FabButton";
import useCalendar from "../../hooks/useCalendar";
import { format } from "date-fns";
import CalendarCard from "../../components/Calendar/CalendarCard";
import { ko } from "date-fns/locale";
import Input from "../../components/Common/Input";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../navigation/types";
import { Modalize } from "react-native-modalize";
import useDateTimePicker from "../../hooks/useDateTimePicker";
import CalendarList from "../../components/Calendar/CalendarList";
import CalendarHeader from "../../components/Calendar/CalendarHeader";
import SectionHeader from "../../components/Calendar/SectionHeader";
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

  const navigation = useNavigation<ScreenNavigationProp>();

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const markedDates = useMemo(
    () =>
      data.reduce(
        (
          acc: { [x: string]: { marked: boolean; dotColor: string } },
          current: { date: string | number | Date }
        ) => {
          const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
          acc[formattedDate] = {
            marked: true,
            dotColor: "red",
          };
          return acc;
        },
        {}
      ),
    [data]
  );
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      selectedColor: "pink",

      marked: markedDates[selectedDate]?.marked,
    },
  };

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    console.log(day);
    // daySchedule(day.dateString);
  };
  const filteredData = data.filter(
    (data) => format(new Date(data.date), "yyyy-MM-dd") === selectedDate
  );

  const [month, setMonth] = useState(format(new Date(), "yyyy-MM-dd"));
  // return new Date(`${format(date, "yyyy-MM-dd")} ${time}`);

  // const onDayMonth = (months: any) => {
  //   setMonth(months[0].dateString);
  //   setSelectedDate(format(new Date(months[0].dateString), "yyyy-MM-01"));

  //   console.log(months[0].dateString);
  //   // daySchedule(day.dateString);
  // };
  const onDayMonth = (months: any) => {
    setMonth(months.dateString);
    // setSelectedDate(format(new Date(months.dateString), "yyyy-MM-01"));

    // console.log(months[0].dateString);
    // daySchedule(day.dateString);
  };

  const onMonthChange = () => {
    setSelectedDate(format(new Date(month), "yyyy-MM-01"));

  }
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerTitleColor = scrollY.interpolate({
    inputRange: [330, 330],
    outputRange: ["white", "pink"],
    extrapolate: "clamp",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <CalendarHeader
        color={headerTitleColor}
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
            // onVisibleMonthsChange={onMonthChange}
          />
        }
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;
