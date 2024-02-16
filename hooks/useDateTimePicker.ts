import { useState } from "react";
import { todayMidnight, timeFormat } from "../apis/utils/dayCounter";

export default function useDateTimePicker() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [display, setDisplay] = useState("date" as "date" | "time");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDateTime(date);

  };

  const datePicker = () => {
    showDatePicker();
    setDisplay("date");
  };
  
  const timePicker = () => {
    showDatePicker();
    setDisplay("time");
  };

  return {
    isDatePickerVisible,
    selectedDateTime,
    showDatePicker,
    display,
    datePicker,
    timePicker,
    hideDatePicker,
    handleConfirm,
  };
}
