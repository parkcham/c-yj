import React from "react";
import { View, StyleSheet, Text , StatusBar } from "react-native";

import UploadButton from "../pages/Home/UploadButton";

const Home = () => {
  return (
    <View style={styles.contanier}>
      <Text style={{ marginTop: 200 }}>zz</Text>
      <UploadButton />
      <StatusBar barStyle={"dark-content"} />

    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: "white",
  },
});

export default Home;
