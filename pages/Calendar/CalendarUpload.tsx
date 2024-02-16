import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

import useDateTimePicker from "../../hooks/useDateTimePicker";
import useHeader from "../../hooks/useHeader";
import DateTimeModal from "../../components/Common/DateTimeModal";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";
import SendButton from "../../components/Common/SendButton";
import CalendarDateInput from "../../components/Calendar/CalendarUpload.tsx/CalendarDateInput";
import { createContent, createdAt } from "../../apis/api/commonFirebase";

const CalendarUpload = () => {
  const [detail, setDetail] = useState("");

  const {
    isDatePickerVisible,
    selectedDateTime,
    display,
    showDatePicker,
    datePicker,
    timePicker,
    handleConfirm,
    hideDatePicker,
  } = useDateTimePicker();

  const timeStr =
    String(selectedDateTime.getHours()).padStart(2, "0") +
    String(selectedDateTime.getMinutes()).padStart(2, "0");

  useHeader({
    deps: [detail],
    headerRight: (
      <SendButton
        disabled={detail.length}
        onPress={async () =>
          createContent({
            collection: "Calendar",
            detail: detail,
            createdAt: createdAt,
            date: format(new Date(selectedDateTime), "yyyy-M-d"),
            time: format(new Date(selectedDateTime), " a h:mm", { locale: ko }),
            timeStr: timeStr,
          })
        }
      />
    ),
  });

  return (
    <>
      <View style={styles.container}>
        <Input style={styles.input} value={detail} onChangeText={setDetail} />

        <CalendarDateInput
          selectedDateTime={selectedDateTime}
          datePicker={datePicker}
          timePicker={timePicker}
        />

        <DateTimeModal
          isDatePickerVisible={isDatePickerVisible}
          selectedDate={selectedDateTime}
          mode={display}
          // display="inline"
          onCancel={hideDatePicker}
          onConfirm={handleConfirm}
          showPicker={showDatePicker}
        />
      </View>

      {Platform.OS === "ios" ? <InputDone /> : null}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 400,
    backgroundColor: "white",
    paddingLeft: 14,
    paddingRight: 14,
  },
  input: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});
export default CalendarUpload;
