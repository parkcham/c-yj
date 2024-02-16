import React from "react";
import { View, FlatList, StyleSheet, RefreshControl } from "react-native";

import DiaryCard from "../../components/Diary/DiaryCard";
import { useQuery, useInfiniteQuery } from "react-query";
import { getContent } from "../../apis/api/commonFirebase";

import { firebase } from "../../config/firebase";

const Diary = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['Diarys'],
    ({ pageParam }) =>
      getContent({ collection: "Diarys", limit: 15, pageParam: pageParam }),

    {
      getNextPageParam: (lastPage) => {
        if (lastPage.length < 15) return null;
        else return lastPage[lastPage.length -1]
      },
    }
  );
  const renderItem = ({ item }: any) => (
    <DiaryCard
      title={item.title}
      detail={item.detail}
      createdDate={item.createdDate}
      id={item.id}
    />
  );
  const onEndReached = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.pages.map((page) => page).flat()}
        // data={cardQuery?.data?.pages.map((page) => page).flat()}
        renderItem={renderItem}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
        // onEndReached={()=>console.log("Zz")}

        keyExtractor={(item: any) => item.id}
        // refreshControl={
        //   <RefreshControl
        //     tintColor={"pink"}
        //     onRefresh={onRefresh}
        //     refreshing={refreshing}
        //   />
        // }
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
