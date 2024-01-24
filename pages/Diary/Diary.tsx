import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import DiaryCard from "../../components/Diary/DiaryCard";

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
    <DiaryCard
      title={item.title}
      detail={item.detail}
      createdDate={item.createdDate}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Diary;
