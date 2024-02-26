import React from "react";
import {
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import AScrollView from "../../components/Common/AScrollView";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import HomeHeader from "../../components/Home/HomeHeader";
import HomeList from "../../components/Home/HomeList";
import useGetQuery from "../../hooks/query/useGetQuery";

const Home = () => {
  const { height } = useWindowDimensions();
  // const navigation = useNavigation<ScreenNavigationProp>();
  const { data } = useGetQuery({ queryKey: "Home" });

  const open = height * 0.1;
  const closed = height * 0.4;
  const transY = useSharedValue(closed);
 
  // const dateFormat = (z: number) => {
  //   const today = new Date();
  //   return format(
  //     new Date(new Date(today.setDate(today.getDate() + z - 1))),
  //     "yyyy.M.d(EE)",
  //     { locale: ko }
  //   );
  // };

  // const dday: number[] = [];

  // for (let i = 100; i < 6001; i += 100) {
  //   dday.push(i);
  // }

  // const moveHomeModify = (v: any) => {
  //   const filteredData = data.filter((d) => d.value === v);
  //   navigation.navigate("J", {
  //     id: filteredData[0]?.id,
  //     key: v,
  //     oldDetail: filteredData[0]?.detail,
  //     date: dateFormat(v),
  //   });
  // };
  const headerStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(transY.value, [open + 1, open], [0, 1], "clamp"),
    };
  });
  // const newData = data ? Object.values(data) : [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeHeader headerStyle={headerStyle} />
      <AScrollView
        open={open}
        closed={closed}
        transY={transY}
        sheetStyle={{ borderRadius: 20 }}
        scrollViewStyle={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10 }}
      >
        <HomeList data={data} />
      </AScrollView>
    </SafeAreaView>
  );
};

export default Home;
