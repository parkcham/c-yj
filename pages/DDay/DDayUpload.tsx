import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";

import useDateTimePicker from "../../hooks/useDateTimePicker";
import DateTimeModal from "../../components/Common/DateTimeModal";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";
import DayCounter from "../../components/DDay/DayCounter";
import useHeader from "../../hooks/useHeader";
import { createContent, createdAt } from "../../apis/api/commonFirebase";
import { conditional, day ,timeFormat} from "../../apis/utils/dayCounter";

const DDayUpload = () => {
  const [detail, setDetail] = useState("");
  const {
    isDatePickerVisible,
    selectedDate,
    showDatePicker,
    handleConfirm,
    hideDatePicker,
  } = useDateTimePicker();
  const selectedDateMidnight = timeFormat(selectedDate, "00:00:00")

  useHeader({
    disabled: detail.length,
    deps: selectedDate,
    onPress: () =>
      createContent({
        collection: "DDays",
        detail: detail,
        selectedDate: selectedDateMidnight,
        conditional: conditional(day(selectedDateMidnight)),
        createdAt: createdAt,
      }),
  });
  return (
    <>
      <View style={styles.container}>
        <DayCounter day={day(selectedDateMidnight)} />

        <Input style={styles.input} value={detail} onChangeText={setDetail} />

        <DateTimeModal
          text="날짜"
          isDatePickerVisible={isDatePickerVisible}
          selectedDate={selectedDate}
          mode="date"
          display="inline"
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
    backgroundColor: "white",
    paddingLeft: 14,
    paddingRight: 14,
  },
  input: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default DDayUpload;
