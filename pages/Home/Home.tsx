import React from "react";
import { View, StyleSheet, Text, StatusBar, Button } from "react-native";

import UploadButton from "../../components/Home/UploadButton";

const Home = () => {
  return (
    <View style={styles.contanier}>
      <Text style={{ marginTop: 200 }}>zz</Text>
      <Button
        onPress={() => console.log(process.env.REACT_APP_PROJECT_ID)}
        title="tlqkf"
      ></Button>
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
