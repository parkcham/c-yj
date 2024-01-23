import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    ListRenderItem,
    SectionList,
  } from "react-native";
  interface IProps {
    dataLength:number
  }
const ListEmptyView = (props:IProps) => {
    return (
        <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: "80%",
        }}
      >
        {props.dataLength === 0 ? (
          <Text style={{ fontSize: 18, color: "#545454" }}>일정 없음 !</Text>
        ) : null}
      </View>
  
    );
};

export default ListEmptyView;