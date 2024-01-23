import React, { useState } from "react";
import { View, StyleSheet, Platform, Text } from "react-native";

import useDateTimePicker from "../../hooks/useDateTimePicker";
import DateTimeModal from "../../components/Common/DateTimeModal";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";
import DayCounter from "../../components/DDay/DayCounter";
import useHeader from "../../hooks/useHeader";
import { createContent, createdAt } from "../../apis/api/commonFirebase";
import { conditional, day } from "../../apis/utils/dayCounter";
import { RootStackParamList } from "../../navigation/types";
import { StackScreenProps } from "@react-navigation/stack";

type MovieScreenProps = StackScreenProps<RootStackParamList, "CalendarUpload">;

const CalendarUpload = ({ route }: MovieScreenProps) => {
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
