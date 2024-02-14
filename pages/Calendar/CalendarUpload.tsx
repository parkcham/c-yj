import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { RootStackParamList } from "../../navigation/types";
import useDateTimePicker from "../../hooks/useDateTimePicker";
import useHeader from "../../hooks/useHeader";
import DateTimeModal from "../../components/Common/DateTimeModal";
import Input from "../../components/Common/Input";
import InputDone from "../../components/Common/InputDone";
import { createContent, createdAt } from "../../apis/api/commonFirebase";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

type CalendarUploadProps = StackScreenProps<
  RootStackParamList,
  "CalendarUpload"
>;

const CalendarUpload = ({ route }: CalendarUploadProps) => {
  const [detail, setDetail] = useState("");
  // const { selectedDate } = route.params;
  const {
    isDatePickerVisible,
    selectedDateTime,
    showDatePicker,
    handleConfirm,
    hideDatePicker,
  } = useDateTimePicker();

  // useHeader({
  //   // headerTitle:selectedDate,
  //   // disabled: detail.length,
  //   deps:selectedDateTime,
  //   onPress: () =>
  //     createContent({
  //       collection: "Calendars",
  //       detail: detail,
  //       createdAt: createdAt,
  //       selectedTime : selectedDateTime
  //     }),
  // });

  return (
    <>
      <View style={styles.container}>
        <Input style={styles.input} value={detail} onChangeText={setDetail} />
        <TouchableOpacity
        onPress={showDatePicker}
          style={{
            borderBottomWidth: 1.2,
            borderTopWidth: 1.2,
            borderColor: "#F2F2F2",
            paddingTop: 20,
            paddingBottom: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#8A8A8A", fontSize: 18 }}>시간</Text>
          <Text style={{ color: "#8A8A8A", fontSize: 18 }}>
            {format(new Date(selectedDateTime), "a h:mm", { locale: ko })}
          </Text>
        </TouchableOpacity>
        
        <DateTimeModal
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
