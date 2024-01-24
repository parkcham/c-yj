import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import DDayCard from "../../components/DDay/DDayCard";

const DDay = () => {
  const data = [
    {
      id: 929,
      detail: "수발",
      day: "D-1",
      date: "2024.01.01(금)",
    },

    {
      id: 9934,
      detail: "수발",
      day: "8일",

      date: "2024.01.01(금)",
    },
    {
      id: 43299,
      detail: "수발",
      day: "D-Day",

      date: "2024.01.01(금)",
    },

    {
      id: 94329,
      detail: "수발",
      day: "지남 !",

      date: "2024.01.01(금)",
    },
  ];
  const renderItem = ({ item }: any) => (
    <DDayCard detail={item.detail} selectedDate={item.date} day={item.day} />
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
    paddingLeft: 7,
    paddingRight: 7,
  },
});

export default DDay;
