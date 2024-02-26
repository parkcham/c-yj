import React from "react";
import {
  ImageBackground,
  View,
  Text,
  useWindowDimensions,
  TextStyle,
  StyleSheet,
} from "react-native";
import Animated, { AnimateStyle } from "react-native-reanimated";

interface IProps {
  headerStyle: AnimateStyle<TextStyle>;
}
const HomeHeader = (props: IProps) => {
  const { width, height } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/home.jpg")}
        style={{ height: height * 0.5, width: width }}
      >
        <View style={styles.textView}>
          <Text style={styles.date}>2020.2.2(금)</Text>
          <Animated.Text style={[props.headerStyle, styles.ddayTop]}>
            2일
          </Animated.Text>
        </View>
        <View style={styles.fooView}>
          <Text style={styles.ddayFoo}>2일</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
  },
  textView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  date: {
    fontSize: 20,
    color: "white",
    top: 50,
    padding: 20,
    fontWeight: "bold",
  },
  ddayTop: {
    fontSize: 22,
    color: "white",
    top: 50,
    padding: 20,
    fontWeight: "bold",
  },
  ddayFoo: {
    fontSize: 40,
    color: "white",
  },
  fooView: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    height: "80%",
    padding: 10,
  },
});
export default HomeHeader;
