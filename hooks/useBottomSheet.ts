import { useRef } from "react";
import { Gesture } from "react-native-gesture-handler";
import {
  withTiming,
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedProps,
  runOnJS,
} from "react-native-reanimated";

interface IProps {
  open: number;
  closed: number;
}
export default function useBottomSheet(props: IProps) {
  const open = props.open;
  const closed = props.closed;
  const scrollRef = useRef<any>(null);
  const moving = useSharedValue(false);
  const prevY = useSharedValue(closed);
  const transY = useSharedValue(closed);
  const movedY = useSharedValue(0);
  const scrollY = useSharedValue(0);

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

  return { transY, scrollHandler, scrollViewProps, scrollRef, gesture };
}
