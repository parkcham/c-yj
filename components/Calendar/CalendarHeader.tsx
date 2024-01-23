import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  SectionList,
  Animated,
  OpaqueColorValue,
} from "react-native";
import { ko } from "date-fns/locale";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp ,RootStackParamList} from "../../navigation/types";

import { format } from "date-fns";
interface IProps {
  month: string;
  selectedDate: string;
  color?:
    | string
    | Animated.Value
    | Animated.AnimatedInterpolation<string | number>
    | OpaqueColorValue
    | undefined;
}

const CalendarHeader = (props: IProps) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Text style={{ fontSize: 22, color: "#545454" }}>
          {format(new Date(props.month), "yyyy년 M월")}
        </Text>
        {/* <View style={{ flexDirection: "row", alignItems: "baseline" }}> */}
        <Animated.Text style={{ fontSize: 22, color: props.color }}>
          {format(new Date(props.selectedDate), " d일")}
        </Animated.Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("CalendarUpload", {
            selectedDate: props.selectedDate,
          })
        }
      >
        <AntDesign name="plus" size={24} color="#545454" />
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default CalendarHeader;
