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
  mode: "date" | "time" ;
  selectedDate: Date;
  text: string;
  display?: "inline" | "spinner";
  onConfirm: (date: Date) => void;
  onCancel: () => void;
  showPicker: (event: GestureResponderEvent) => void;
}

const DateTimeModal = (props: IProps) => {
  return (
    <>
      <TouchableOpacity
        onPress={props.showPicker}
        activeOpacity={0.5}
        style={styles.container}
      >
        <Text style={styles.leftText}>{props.text}</Text>
        {props.mode === "date" ?<Text style={styles.dateText}>
          {format(props.selectedDate, "yyyy.MM.dd")}(
          {format(props.selectedDate, "EE", { locale: ko })})
        </Text> : <Text style={styles.dateText}>{format(new Date(props.selectedDate),"a h:mm",{locale:ko})}</Text>}
      </TouchableOpacity>

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
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.2,
    borderTopWidth: 1.2,
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

export default DateTimeModal;
