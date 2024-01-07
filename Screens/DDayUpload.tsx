import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import useDateTimePicker from "../hooks/useDateTimePicker";
import DateTimePicker from "../components/DateTimePicker";
import TitleInput from "../components/TitleInput";
import InputDone from "../components/InputDone";
import DayCounter from "../pages/DDay/DayCounter";

const DDayUpload = () => {
  const [title, setTitle] = useState("");

  const {
    isDatePickerVisible,
    selectedDate,
    showDatePicker,
    handleConfirm,
    hideDatePicker,
  } = useDateTimePicker();

  return (
    <>
      <View style={styles.container}>
        <DayCounter selectedDate={selectedDate} />

        <TitleInput value={title} onChangeText={setTitle} />

        <DateTimePicker
          text="날짜"
          isDatePickerVisible={isDatePickerVisible}
          date={selectedDate}
          mode="date"
          onCancel={hideDatePicker}
          onConfirm={handleConfirm}
          showPicker={showDatePicker}
        />
      </View>
      <InputDone />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 14,
    paddingRight: 14,
  },
});

export default DDayUpload;
