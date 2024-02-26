import React from "react";
import { SafeAreaView, useWindowDimensions, StyleSheet } from "react-native";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import HomeHeader from "../../components/Home/HomeHeader";
import HomeList from "../../components/Home/HomeList";
import AScrollView from "../../components/Common/AScrollView";
import useGetQuery from "../../hooks/query/useGetQuery";

const HomeScreen = () => {
  const { height } = useWindowDimensions();
  const { data } = useGetQuery({ queryKey: "Home" });

  const open = height * 0.1;
  const closed = height * 0.4;
  const transY = useSharedValue(closed);

  const headerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(transY.value, [open + 1, open], [0, 1], "clamp"),
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader headerStyle={headerStyle} />
      <AScrollView
        open={open}
        closed={closed}
        transY={transY}
        sheetStyle={styles.sheetStyle}
        scrollViewStyle={styles.scrollViewStyle}
      >
        <HomeList data={data} />
      </AScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  sheetStyle: {
    borderRadius: 20,
  },
  scrollViewStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});
export default HomeScreen;
