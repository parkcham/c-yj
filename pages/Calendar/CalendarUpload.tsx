import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";

import useDateTimePicker from "../../hooks/useDateTimePicker";
import DateTimePicker from "../../components/Common/DateTimePicker";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";
import DayCounter from "../../components/DDay/DayCounter";
import useHeader from "../../hooks/useHeader";
import { createContent, createdAt } from "../../apis/api/commonFirebase";
import { conditional, day } from "../../apis/utils/dayCounter";

const CalendarUpload = () => {
    const [detail, setDetail] = useState("");
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
  
          <Input style={styles.input} value={detail} onChangeText={setDetail} />
  
          <DateTimePicker
            text="시간"
            isDatePickerVisible={isDatePickerVisible}
            selectedDate={selectedDate}
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
      height:400,
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