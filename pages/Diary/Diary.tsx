import React from "react";
import { View, FlatList, Text, TouchableOpacity, ImageBackground } from "react-native";

const Diary = () => {
  const data = [
    {
      id: 929,
      title: "test",
      detail:
        "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
      createdDate: "2024-01-24",
    },

    {
      id: 99,
      title: "멀멀멂러",
      detail:
        "어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리;ㅇㄹ머ㅏㄴ리;멀ㅇㄴㄻ니ㅓㄹ닝러민러;ㅣㅁㄴ러;ㅣㄴ러미ㅓㄴ리",
      createdDate: "2024-01-24",
    },
  ];
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1.2,
        borderColor: "#F2F2F2",
        marginBottom: 5,
        marginTop: 5,
      }}
    >
      <Text style={{ color: "#545454", fontSize: 20 }}>{item.title}</Text>
      <Text
        numberOfLines={2}
        style={{ color: "#808080", fontSize: 18, marginTop: 5 }}
      >
        {item.detail}
      </Text>
      <Text style={{ color: "#8A8A8A", marginBottom: 7, marginTop: 5 }}>
        {item.createdDate}
      </Text>
    </TouchableOpacity>
  );

  const ItemSeparatorComponent = () => (
    <View style={{ height: 1.2, backgroundColor: "#F2F2F2" }}></View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: "white",paddingLeft:10,paddingRight:10 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default Diary;
