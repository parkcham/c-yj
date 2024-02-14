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
      modalHeight={200}
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

      {/* <TouchableOpacity onPress={props.onPressClose} style={styles.close}>
        <Text style={styles.closeText}>닫기</Text>
      </TouchableOpacity> */}

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
    padding: 12,
  },
  modifyText: {
    fontSize: 18,
    color: "#545454",
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

export default EllipsisModal;
