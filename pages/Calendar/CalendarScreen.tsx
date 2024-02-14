import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useRef,
  useState,
} from "react";
import {
  Text,
  View,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  GestureDetector,
  ScrollView,
  Gesture,
} from "react-native-gesture-handler";
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedProps,
  interpolate,
  runOnJS,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Calendar from "../../components/Calendar/Calendar";
import { AntDesign } from "@expo/vector-icons";
import useCalendar from "../../hooks/useCalendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import DateTimeModal from "../../components/Common/DateTimeModal";
import useDateTimePicker from "../../hooks/useDateTimePicker";

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
    }, {
      id: 23,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    }, {
      id: 24,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    }, {
      id: 25,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    }, {
      id: 26,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    }, {
      id: 27,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    }, {
      id: 28,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    }, {
      id: 211,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    }, {
      id: 212,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    }, {
      id: 223,
      detail: "test",
      time: "5:40",
      date: "2024-02-26",
    },
  ];
  const {
    month,
    selectedDate,
    filteredData,
    markedSelectedDate,
    onDayMonth,
    onDayPress,
    todayMove
  } = useCalendar({ data: data });

  const open = 50;
  const closed = 360;
  const scrollRef = useRef<any>(null);
  const { width, height } = useWindowDimensions();
  const { bottom, top } = useSafeAreaInsets();

  const moving = useSharedValue(false);
  const prevY = useSharedValue(closed);
  const transY = useSharedValue(closed);
  const movedY = useSharedValue(0);
  const scrollY = useSharedValue(0);

  const [dateOpen, setDateOpen] = useState(false);
  const scrollHandler = useAnimatedScrollHandler((e) => {
    scrollY.value = Math.round(e.contentOffset.y);
  });
  const gesture = Gesture.Pan()
    .onBegin(() => {
      moving.value = true;
    })
    .onUpdate((e) => {
      if (scrollY.value === 0 || prevY.value === closed) {
        transY.value = prevY.value + e.translationY - movedY.value;
      } else {
        movedY.value = e.translationY;
      }
      if (e.translationY < -310) {
        transY.value = open;
      }

      if (prevY.value !== open && transY.value < open) {
        runOnJS(scrollRef?.current.scrollTo)({
          y: -transY.value + open,
          animated: false,
        });
      }
      console.log(e.translationY);
    })

    .onEnd((e) => {
      if ((e.velocityY > 500 || e.translationY > 100) && scrollY.value < 1) {
        transY.value = withTiming(closed, { duration: 200 });
        prevY.value = closed;
      } else if (e.velocityY < -500 || e.translationY < -100) {
        transY.value = withTiming(open, { duration: 200 });
        prevY.value = open;
      } else {
        transY.value = withTiming(prevY.value, { duration: 200 });
      }
    })
    .onFinalize((e) => {
      moving.value = false;
      movedY.value = 0;
    })
    .simultaneousWithExternalGesture(scrollRef);

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
  const scrollViewProps = useAnimatedProps(() => {
    return {
      scrollEnabled: prevY.value === open,
      bounces: scrollY.value > 0 || !moving.value,
    };
  });
  const tlqkf = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        transY.value,
        [closed, closed * 0.5],
        [1, 0],
        "clamp"
      ),
    };
  });
  const tlqkfheader = useAnimatedStyle(() => {
    return {
      opacity: interpolate(transY.value, [closed * 0.5, open], [0, 1], "clamp"),
    };
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{ position: "absolute", top: Platform.OS === "ios" ? top : 0 }}
      >
        <View
          style={{
            height: 50,
            flexDirection: "row",
            paddingLeft: 20,
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{ fontSize: 22, fontWeight: "bold", color: "#4D4D4D" }}
            >
              {format(new Date(month), "yyyy. M")}
            </Text>

            <Animated.Text
              style={[
                tlqkfheader,
                { fontSize: 22, fontWeight: "bold", color: "#4D4D4D" },
              ]}
            >
              {format(new Date(selectedDate), ". d. ", { locale: ko })}
            </Animated.Text>

            <Animated.Text
              style={[
                tlqkfheader,
                { fontSize: 20, fontWeight: "bold", color: "#4D4D4D" },
              ]}
            >
              {format(new Date(selectedDate), "EE", { locale: ko })}
            </Animated.Text>
          </View>
        </View>

        <Calendar
          markedDates={markedSelectedDate}
          onDayPress={onDayPress}
          onMonthChange={onDayMonth}
        />
      </View>

      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            sheet,
            {
              backgroundColor: "white",
              flexGrow: 1,
              borderTopWidth: 2,
              borderColor: "#F2F2F2",
            },
          ]}
        >
          {/* <View style={{ borderTopWidth: 2 ,borderColor:"#F2F2F2",paddingBottom:10}}> */}
          <View style={{ alignItems: "center", paddingTop: 10 }}>
            <View
              style={{
                height: 4,
                width: width / 9,
                backgroundColor: "#E6E6E6",
                borderRadius: 10,
              }}
            />
          </View>

          {/* </View> */}
          <Animated.Text
            style={[
              tlqkf,
              {
                fontSize: 18,
                fontWeight: "bold",
                color: "#4D4D4D",
                paddingLeft: 20,
              },
            ]}
          >
            {format(new Date(selectedDate), "d. EE", { locale: ko })}
          </Animated.Text>

          <AScrollView
            ref={scrollRef}
            style={{ paddingLeft: 22 }}
            scrollEventThrottle={16}
            onScroll={scrollHandler}
            animatedProps={scrollViewProps}
            contentContainerStyle={{ paddingBottom: bottom + top * 2 }}
          >
            <View>
              {filteredData.length === 0 ? (
                <View style={{ flexDirection: "row", marginTop: 17 }}>
                  <View
                    style={{
                      backgroundColor: "pink",
                      width: 4,
                      borderRadius: 10,
                      marginRight: 10,
                    }}
                  />
                  <Text style={{ fontSize: 18, color: "#4D4D4D" }}>
                    일정 없음 !
                  </Text>
                </View>
              ) : (
                filteredData.map(
                  (s: {
                    id: Key | null | undefined;
                    detail: string;
                    time: string;
                  }) => (
                    <View
                      style={{
                        // flex: 1,
                        flexDirection: "row",
                        marginTop: 17,
                      }}
                      key={s.id}
                    >
                      <View
                        style={{
                          backgroundColor: "pink",
                          width: 4,
                          borderRadius: 10,
                          marginRight: 10,
                        }}
                      />

                      <View>
                        <Text
                          style={{
                            fontSize: 18,
                            color: "#4D4D4D",
                            // fontWeight: "bold",
                            paddingBottom: 5,
                          }}
                        >
                          {s.detail}
                        </Text>
                        <Text style={{ color: "#C2C2C2" }}>{s.time}</Text>
                      </View>
                    </View>
                  )
                )
              )}
            </View>
          </AScrollView>
        </Animated.View>
      </GestureDetector>

      
    </SafeAreaView>
  );
};

export default CalendarScreen;
