import React from "react";
import {
  View,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  StyleSheet,
} from "react-native";
import { GestureDetector, ScrollView } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Calendar from "../../components/Calendar/Calendar";
import CalendarList from "../../components/Calendar/CalendarList";
import CalendarHeader from "../../components/Calendar/CalendarHeader";
import CalendarStickyHeader from "../../components/Calendar/CalendarStickyHeader";
import Handle from "../../components/Common/Handle";

import useCalendar from "../../hooks/useCalendar";
import useBottomSheet from "../../hooks/useBottomSheet";

const AScrollView = Animated.createAnimatedComponent(ScrollView);

const CalendarScreen = () => {
  const data = [
    {
      id: 929,
      detail: "시발",
      time: "5:40",
      date: "2024-02-10",
    },

    {
      id: 99,
      detail: "test",
      time: "5:40",
      date: "2024-02-25",
    },
    {
      id: 9229,
      detail: "test",
      time: "5:40",
      date: "2024-02-25",
    },

    {
      id: 1,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 2,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 3,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 4,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 5,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 6,
      detail: "test",
      time: "5:40",
      date: "2024-03-26",
    },
    {
      id: 7,
      detail: "test",
      time: "5:40",
      date: "2024-03-26",
    },
    {
      id: 8,
      detail: "test",
      time: "5:40",
      date: "2024-03-26",
    },
    {
      id: 9,
      detail: "test",
      time: "5:40",
      date: "2024-04-26",
    },
    {
      id: 10,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 11,
      detail: "test",
      time: "5:40",
      date: "2024-02-19",
    },
    {
      id: 12,
      detail: "test",
      time: "5:40",
      date: "2024-02-12",
    },
    {
      id: 22,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 23,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 24,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 25,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 26,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 27,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 28,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 211,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 212,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
    {
      id: 223,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
  ];
  const open = 50;
  const closed = 360;

  const {
    month,
    selectedDate,
    filteredData,
    markedSelectedDate,
    onDayMonth,
    onDayPress,
  } = useCalendar({ data: data });

  const { transY, scrollHandler, scrollViewProps, scrollRef, gesture } =
    useBottomSheet({ open: open, closed: closed });

  const { height } = useWindowDimensions();

  const { bottom, top } = useSafeAreaInsets();

  const sheet = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            transY.value,
            [0, open, closed, height],
            // 0 50, 360 , 852
            [open, open, closed, closed],
            // 50 , 50 , 360 , 380
            "clamp"
          ),
        },
      ],
    };
  });

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

      <GestureDetector gesture={gesture}>
        <Animated.View style={[sheet, styles.sheet]}>
          <Handle />
          <CalendarStickyHeader
            selectedDate={selectedDate}
            headerStyle={stickyHeaderStyle}
          />
          <AScrollView
            ref={scrollRef}
            style={styles.scrollView}
            scrollEventThrottle={16}
            onScroll={scrollHandler}
            animatedProps={scrollViewProps}
            contentContainerStyle={{ paddingBottom: bottom + top * 2 }}
          >
            <CalendarList filteredData={filteredData} />
          </AScrollView>
        </Animated.View>
      </GestureDetector>
      
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
  sheet: {
    backgroundColor: "white",
    flexGrow: 1,
    borderTopWidth: 2,
    borderColor: "#F2F2F2",
  },
  scrollView: {
    paddingLeft: 22,
  },
});

export default CalendarScreen;
