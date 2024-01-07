import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { Ionicons, Octicons } from "@expo/vector-icons";

interface IProps {
  visible: boolean;
  hideModal: (event: GestureResponderEvent) => void;
}
const UploadModal = ({ visible, hideModal }: IProps) => {
  return (
    <Modal
      visible={visible}
      animationType={"fade"}
      transparent
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <TouchableWithoutFeedback onPress={hideModal}>
          <View style={styles.background} />
        </TouchableWithoutFeedback>

        <View style={styles.bottomSheetContainer}>
          <View style={styles.bodyView}>
            <TouchableOpacity style={styles.bodyTextTouch}>
              <Ionicons name="ios-today-outline" size={24} color="pink" />
              <Text style={styles.bodyText}>디데이</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bodyTextTouch}>
              <Ionicons name="logo-instagram" size={24} color="pink" />
              <Text style={styles.bodyText}>피드</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bodyTextTouch}>
              <Octicons
                style={{ paddingLeft: 2 }}
                name="book"
                size={21}
                color="pink"
              />
              <Text style={styles.bodyText}>다이어리</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.footerTouch}>
            <Text style={styles.footerText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  background: {
    flex: 1,
  },
  bottomSheetContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bodyText: {
    fontSize: 18,
    color: "pink",
    paddingLeft: 10,
  },
  bodyTextTouch: {
    flexDirection: "row",
    alignItems: "center",
    padding: 7,
  },
  bodyView: {
    width: "94%",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
  },
  footerText: {
    fontSize: 18,
    color: "#545454",
    padding: 14,
  },
  footerTouch: {
    width: "94%",
    marginBottom: 50,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default UploadModal;
