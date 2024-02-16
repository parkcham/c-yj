import React from "react";
import { View, Text, StyleSheet } from "react-native";

import EllipsisButton from "../../Common/EllipsisButton";
import EllipsisModal from "../../Common/EllipsisModal";
import useEllipsisModal from "../../../hooks/useEllipsisModal";

const FeedCardHeader = () => {
  const { modalRef, onOpen, onClose } = useEllipsisModal();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>C·YJ</Text>
      <EllipsisButton onPress={onOpen} />
      <EllipsisModal ref={modalRef} onPressClose={onClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 7,
  },
  text: {
    fontSize: 16,
    color: "#4D4D4D",
  },
});

export default FeedCardHeader;
