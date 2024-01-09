import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface IProps {
  disabled: number;
  onPress: (event: GestureResponderEvent) => void;
  deps?:any
}

const useHeader = (props: IProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log("tlqkf")
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.right}
          disabled={props.disabled > 0 ? false : true}
          onPress={props.onPress}
        >
          <Feather
            name="send"
            size={22}
            style={{transform: [{ rotate: '20deg'}]}}
            color={props.disabled > 0 ? "#8A8A8A" : "#E6E6E6"}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, props.disabled,props.deps]);
};
const styles = StyleSheet.create({
  right: {
    paddingRight: 14,
    
  },
});

export default useHeader;
