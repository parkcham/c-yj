import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import FeedCard from "../../components/Feed/FeedCard/FeedCard";
import FeedCardSeparator from "../../components/Feed/FeedCard/FeedCardSeparator";
import FabButton from "../../components/Common/FabButton";
const FeedScreen = () => {
  const data = [
    {
      id: 929,
      detail:
        "어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리;ㅇㄹ머ㅏㄴ리;멀ㅇㄴㄻ니ㅓㄹ닝러민러;ㅣㅁㄴ러;ㅣㄴ러미ㅓㄴ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/c-yj-8d5e5.appspot.com/o/34568B5E-4A6B-485B-8BB5-DBCE06FDF055.jpg?alt=media&token=0fe3a507-73dd-49f6-a1bc-6e2cc61cb29a",
        "https://firebasestorage.googleapis.com/v0/b/c-yj-8d5e5.appspot.com/o/1.jpg?alt=media&token=634150a2-a962-4454-bd6b-71b2afbd0af2",
      ],
    },

    {
      id: 99,
      detail:
        "어ㅣㄴㄹ머이ㅓㄴ미러ㅣㅁ널아ㅓㅁ리;ㅇㄹ머ㅏㄴ리;멀ㅇㄴㄻ니ㅓㄹ닝러민러;ㅣㅁㄴ러;ㅣㄴ러미ㅓㄴ리",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/c-yj-8d5e5.appspot.com/o/DCB29B3B-ED74-435F-B18D-346366D9106C.png?alt=media&token=70f80f45-23fe-43ed-9b49-aeb6f8f42a64",
      ],
    },
  ];

  const renderItem = ({ item }: any) => (
    <FeedCard id={item.id} detail={item.detail} images={item.images} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={FeedCardSeparator}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:100}}
      />
      {/* <FabButton icon="card-plus-outline" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default FeedScreen;
