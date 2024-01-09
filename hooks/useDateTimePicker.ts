import { useState } from "react";
import { todayMidnight, timeFormat } from "../apis/utils/dayCounter";

export default function useDateTimePicker() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(todayMidnight);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDate(timeFormat(date, "00:00:00"));
  };

  return {
    isDatePickerVisible,
    selectedDate,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
  };
}
