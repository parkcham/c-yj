import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import FeedCard from "../../components/Feed/FeedCard/FeedCard";
import FeedCardSeparator from "../../components/Feed/FeedCard/FeedCardSeparator";
import useGetInfiniteQuery from "../../hooks/query/useGetInfiniteQuery";

const FeedScreen = () => {
  const { data, onEndReached } = useGetInfiniteQuery({
    queryKey: "Feeds",
    limit: 4,
  });

  const renderItem = ({ item }: any) => (
    <FeedCard id={item.id} detail={item.detail} images={item.imageUrl} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.pages.map((page) => page).flat()}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        ItemSeparatorComponent={FeedCardSeparator}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        onEndReachedThreshold={0.7}
        onEndReached={onEndReached}
      />
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
