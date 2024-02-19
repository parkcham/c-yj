import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { ScreenNavigationProp } from "../../../navigation/types";
import FeedCardImageList from "./FeedCardImageList";
import FeedCardDetail from "./FeedCardDetail";
import BottomSheet from "../../Common/BottomSheet";
import EllipsisButton from "../../Common/EllipsisButton";
import useEllipsisModal from "../../../hooks/useEllipsisModal";
import useDelMutation from "../../../hooks/query/useDelMutation";

interface IProps {
  id: string;
  detail: string;
  images: string;
}

const FeedCard = (props: IProps) => {
  const { modalRef, onOpen, onClose } = useEllipsisModal();

  const navigation = useNavigation<ScreenNavigationProp>();

  const {delContent} = useDelMutation({queryKey:"Feeds",id:props.id})
  
  const moveFeedModify = () => {
    onClose();
    navigation.navigate("FeedModify", { oldDetail: props.detail ,id : props.id});
  };

  const delFeed = () => {
    onClose()
    delContent()
  }
  
  return (
    <>
      <BottomSheet
        modalStyle={styles.modalStyle}
        ref={modalRef}
        modalHeight={200}
      >
        <TouchableOpacity style={styles.modify} onPress={moveFeedModify}>
          <FontAwesome size={20} color="#4D4D4D" name="edit" />
          <Text style={styles.modifyText}>수정</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.delete}
          onPress={delFeed}
        >
          <Ionicons size={21} color="#FF1B00" name="trash-outline" />
          <Text style={styles.deleteText}>삭제</Text>
        </TouchableOpacity>
      </BottomSheet>

      <View style={styles.header}>
        <Text style={styles.headerText}>C·YJ</Text>
        <EllipsisButton onPress={onOpen} />
      </View>

      <FeedCardImageList images={props.images} />
      <FeedCardDetail detail={props.detail} />
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 7,
  },
  headerText: {
    fontSize: 16,
    color: "#4D4D4D",
  },
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
    padding: 11,
  },
  deleteText: {
    fontSize: 18,
    color: "#FF1B00",
    paddingLeft: 5,
  },
});

export default FeedCard;
