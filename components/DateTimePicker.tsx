import React from "react";
import {
  TouchableOpacity,
  Text,
  GestureResponderEvent,
  StyleSheet,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface IProps {
  isDatePickerVisible: boolean;
  mode: "date" | "time" | "datetime";
  date: Date;
  text: string;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  showPicker: (event: GestureResponderEvent) => void;
}

const DateTimePicker = (props: IProps) => {
  return (
    <>
      <TouchableOpacity
        onPress={props.showPicker}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Text style={styles.leftText}>{props.text}</Text>
        <Text style={styles.dateText}>
          {format(props.date, "yyyy.MM.dd")}(
          {format(props.date, "EE", { locale: ko })})
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        style={styles.DateTimePickerModal}
        isVisible={props.isDatePickerVisible}
        mode={props.mode}
        display="inline"
        onConfirm={props.onConfirm}
        onCancel={props.onCancel}
        themeVariant={"light"}
        buttonTextColorIOS="pink"
        cancelTextIOS="취소"
        confirmTextIOS="확인"
        locale="ko"
        accentColor="pink"
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#F2F2F2",
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: 18,
    color: "#8A8A8A",
  },
  leftText: {
    color: "#8A8A8A",
    fontSize: 18,
  },
  DateTimePickerModal: {
    shadowColor: "pink",
  },
});

export default DateTimePicker;
