import React from "react";
import { GestureResponderEvent, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface IProps {
  isDatePickerVisible: boolean;
  mode: "date" | "time" | "datetime";
  selectedDate: Date;
  display?: "inline" | "spinner";
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  showPicker: (event: GestureResponderEvent) => void;
}

const DateTimeModal = (props: IProps) => {
  return (
    <DateTimePickerModal
      style={styles.DateTimePickerModal}
      isVisible={props.isDatePickerVisible}
      mode={props.mode}
      date={props.selectedDate}
      display={props.display}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      themeVariant={"light"}
      buttonTextColorIOS="pink"
      cancelTextIOS="취소"
      confirmTextIOS="확인"
      locale="ko"
      accentColor="pink"
    />
  );
};
const styles = StyleSheet.create({
  DateTimePickerModal: {
    shadowColor: "pink",
  },
});

export default DateTimeModal;
