import React from "react";
import { View, Text } from "react-native";
import EllipsisButton from "../../Common/EllipsisButton";

const FeedCardHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 7,
      }}
    >
      <Text style={{ fontSize: 16, color: "#545454" }}>C·YJ</Text>
      <EllipsisButton />
    </View>
  );
};

export default FeedCardHeader;
