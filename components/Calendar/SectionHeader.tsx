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
  OpaqueColorValue
} from "react-native";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
interface IProps {
  selectedDate: string;
  dataLength: number;

}

const SectionHeader = (props: IProps) => {
  return (
    <View
      style={{
        // backgroundColor: "pink",
        // padding: 10,
        height:30,
        paddingLeft:14,
        paddingRight:14,
        marginBottom:10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {props.selectedDate === format(new Date(), "yyyy-MM-dd") ? (
        <Text style={{ fontSize: 20, color: "#5CD1E5" }}>Today</Text>
      ) : (

        <View style={{ flexDirection: "row", alignItems: "baseline"}}>
          <Text style={{ fontSize: 20, color: "pink" }}>
            {format(new Date(props.selectedDate), "d")}
          </Text>
          <Text style={{color: "pink" }}>
            ({format(new Date(props.selectedDate), "EE", { locale: ko })})
          </Text>
        </View>
      )}
      {props.dataLength > 0 ? (

        <Text style={{ fontSize: 16, color: "#545454" }}>
          일정:{props.dataLength}개
        </Text>
        
      ) : null}
       
    </View>
  );
};

export default SectionHeader;
