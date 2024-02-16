import React, { forwardRef } from "react";
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { ScreenNavigationProp } from "../../navigation/types";
import { TStyle } from "react-native-modalize/lib/options";

interface IProps {
  children: React.ReactNode;
  HeaderComponent?: React.ReactNode;
  modalStyle?: TStyle;
  modalHeight: number;
}
type Ref = Modalize;

const BottomSheet = forwardRef<Ref, IProps>((props, ref) => {
  return (
    <Modalize
      modalStyle={props.modalStyle}
      scrollViewProps={{ bounces: false }}
      withReactModal={true}
      handlePosition="inside"
      modalHeight={props.modalHeight}
      ref={ref}
      HeaderComponent={props.HeaderComponent}
    >
      {props.children}
    </Modalize>
  );
});

const styles = StyleSheet.create({
  modalStyle: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 30,
  },
  modify: {
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
  },
  modifyText: {
    fontSize: 18,
    color: "#4D4D4D",
    paddingLeft: 5,
  },
  delete: {
    alignItems: "center",
    flexDirection: "row",
    padding: 12,
  },
  deleteText: {
    fontSize: 18,
    color: "#FF1B00",
    paddingLeft: 5,
  },
});

export default BottomSheet;
