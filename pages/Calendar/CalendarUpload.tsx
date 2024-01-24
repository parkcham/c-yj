import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../../navigation/types";
import useDateTimePicker from "../../hooks/useDateTimePicker";
import useHeader from "../../hooks/useHeader";
import DateTimeModal from "../../components/Common/DateTimeModal";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";
import { createContent, createdAt } from "../../apis/api/commonFirebase";

type CalendarUploadProps = StackScreenProps<RootStackParamList, "CalendarUpload">;

const CalendarUpload = ({ route }: CalendarUploadProps) => {
  const [detail, setDetail] = useState("");
  const { selectedDate } = route.params;
  const {
    isDatePickerVisible,
    selectedDateTime,
    showDatePicker,
    handleConfirm,
    hideDatePicker,
  } = useDateTimePicker();

  useHeader({
    headerTitle:selectedDate,
    disabled: detail.length,
    deps:selectedDateTime,
    onPress: () =>
      createContent({
        collection: "Calendars",
        detail: detail,
        createdAt: createdAt,
        selectedTime : selectedDateTime
      }),
  });

  return (
    <>
      <View style={styles.container}>
        <Input style={styles.input} value={detail} onChangeText={setDetail} />
        <DateTimeModal
          text="시간"
          isDatePickerVisible={isDatePickerVisible}
          selectedDate={selectedDateTime}
          mode="time"
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
