import React from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Platform,
} from "react-native";

const Home = () => {
  return (
    <View style={styles.contanier}>
      <Text style={{ marginTop: 200 }}>zz</Text>
      <Button
        onPress={() => console.log(process.env.REACT_APP_PROJECT_ID)}
        title="tlqkf"
      ></Button>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "default"}
      />
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
