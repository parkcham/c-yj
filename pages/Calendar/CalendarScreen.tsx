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
import useGetQuery from "../../hooks/query/useGetQuery";

const AScrollView = Animated.createAnimatedComponent(ScrollView);

const CalendarScreen = () => {
 
  const {data,isLoading} = useGetQuery({queryKey:"Calendar"})

  const newData = data ? Object.values(data) : [];

  const open = 50;
  const closed = 360;

  const {
    month,
    selectedDate,
    sortedData,
    markedSelectedDate,
    onDayMonth,
    onDayPress,
  } = useCalendar({ data: newData });

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
            <CalendarList filteredData={sortedData} isLoading={isLoading} />
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
    paddingRight: 10,
  },
});

export default CalendarScreen;
