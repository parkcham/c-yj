import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface IProps {
  dataLength: number;
}
const ListEmptyView = (props: IProps) => {
  return (
    <View style={styles.container}>
      {props.dataLength === 0 ? (
        <Text style={styles.dataLength}>일정 없음 !</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
  },
  dataLength: {
    fontSize: 18,
    color: "#545454",
  },
});

export default ListEmptyView;
