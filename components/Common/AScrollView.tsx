import React, { useRef } from "react";
import {
  useWindowDimensions,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  Gesture,
  GestureDetector,
  ScrollView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  interpolate,
  useSharedValue,
  withTiming,
  useAnimatedProps,
  runOnJS,
  useAnimatedScrollHandler,
  SharedValue,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Handle from "../../components/Common/Handle";

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

interface IProps {
  open: number;
  closed: number;
  transY: SharedValue<number>;
  children: React.ReactNode;
  Header?: React.ReactNode;
  sheetStyle?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
  scrollViewStyle?: StyleProp<Animated.AnimateStyle<StyleProp<ViewStyle>>>;
}

const AScrollView = (props: IProps) => {
  const open = props.open;
  const closed = props.closed;
  const transY = props.transY;

  const { height } = useWindowDimensions();
  const { bottom, top } = useSafeAreaInsets();
  const scrollRef = useRef<any>(null);

  const scrollY = useSharedValue(0);
  const moving = useSharedValue(false);
  const prevY = useSharedValue(closed);
  const movedY = useSharedValue(0);

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
      if (e.translationY < -(closed - open)) {
        transY.value = open;
      }
      // console.log(transY.value)
      if (prevY.value !== open && transY.value < open) {
        runOnJS(scrollRef?.current.scrollTo)({
          y: -transY.value + open,
          animated: false,
        });
      }
      // console.log(e.translationY);
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

  const scrollViewProps = useAnimatedProps(() => {
    return {
      scrollEnabled: prevY.value === open,
      bounces: scrollY.value > 0 || !moving.value,
    };
  });

  const sheet = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            transY.value,
            [0, open, closed, height],
            [open, open, closed, closed],
            "clamp"
          ),
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[sheet, styles.sheet, props.sheetStyle]}>
        <Handle />
        {props.Header}
        <AnimatedScrollView
          ref={scrollRef}
          style={props.scrollViewStyle}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          animatedProps={scrollViewProps}
          contentContainerStyle={{ paddingBottom: bottom + top * 2 }}
        >
          {props.children}
        </AnimatedScrollView>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  sheet: {
    backgroundColor: "white",
    flexGrow: 1,
  },
});

export default AScrollView;
