import React from "react";
import { View, SafeAreaView, Platform, StyleSheet } from "react-native";
import {
  useAnimatedStyle,
  interpolate,
  useSharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Calendar from "../../components/Calendar/Calendar";
import CalendarList from "../../components/Calendar/CalendarList";
import CalendarHeader from "../../components/Calendar/CalendarHeader";
import CalendarStickyHeader from "../../components/Calendar/CalendarStickyHeader";
import AScrollView from "../../components/Common/AScrollView";
import useCalendar from "../../hooks/useCalendar";
import useGetQuery from "../../hooks/query/useGetQuery";


const CalendarScreen = () => {
  const { data, isLoading } = useGetQuery({ queryKey: "Calendar" });


  const open = 50;
  const closed = 360;
  const transY = useSharedValue(closed);

  const {
    month,
    selectedDate,
    sortedData,
    markedSelectedDate,
    onDayMonth,
    onDayPress,
  } = useCalendar({ data: data });

  const { top } = useSafeAreaInsets();

  const stickyHeaderStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        transY.value,
        [closed, closed * 0.5],
        [1, 0],
        "clamp"
      ),
    };
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(transY.value, [closed * 0.5, open], [0, 1], "clamp"),
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { top: Platform.OS === "ios" ? top : 0 }]}>
        <CalendarHeader
          month={month}
          headerStyle={headerStyle}
          selectedDate={selectedDate}
        />
        <Calendar
          markedDates={markedSelectedDate}
          onDayPress={onDayPress}
          onMonthChange={onDayMonth}
        />
      </View>
      <AScrollView
        open={open}
        closed={closed}
        transY={transY}
        scrollViewStyle={styles.scrollView}
        sheetStyle={styles.sheet}
        Header={
          <CalendarStickyHeader
            selectedDate={selectedDate}
            headerStyle={stickyHeaderStyle}
          />
        }
      >
        <CalendarList filteredData={sortedData} isLoading={isLoading} />
      </AScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    position: "absolute",
  },
  scrollView: {
    paddingLeft: 22,
    paddingRight: 10,
  },
  sheet: {
    borderTopWidth: 2,
    borderColor: "#F2F2F2",
  },
});

export default CalendarScreen;
