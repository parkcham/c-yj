import React, { forwardRef } from "react";
import {
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import { Modalize } from "react-native-modalize";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

interface IProps {
  onPressClose: (event: GestureResponderEvent) => void;
}
type Ref = Modalize;

const EllipsisModal = forwardRef<Ref, IProps>((props, ref) => {
  return (
    <Modalize
      modalStyle={styles.modalStyle}
      scrollViewProps={{ bounces: false }}
      withReactModal={true}
      handlePosition="inside"
      modalHeight={220}
      ref={ref}
    >
      <TouchableOpacity style={styles.modify}>
        <FontAwesome size={20} color="#ABABAB" name="edit" />
        <Text style={styles.modifyText}>수정</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.delete}>
        <Ionicons size={20} color="#FF1B00" name="trash-outline" />
        <Text style={styles.deleteText}>삭제</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={props.onPressClose} style={styles.close}>
        <Text style={styles.closeText}>닫기</Text>
      </TouchableOpacity>

    </Modalize>
  );
});

const styles = StyleSheet.create({
  modalStyle: {
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:20,
    paddingTop:30
  },
  modify: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modifyText: {
    fontSize: 18,
    color: "#545454",
    paddingLeft: 5,
  },
  delete: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  deleteText: {
    fontSize: 18,
    color: "#FF1B00",
    paddingLeft: 5,
  },
  close: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    marginTop: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  closeText: {
    fontSize: 18,
    color: "#545454",
  },
});

export default EllipsisModal;
