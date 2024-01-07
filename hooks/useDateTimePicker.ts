import { useState } from "react";

export default function useDateTimePicker() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    hideDatePicker();
    setSelectedDate(date);
  };
  
  return {
    isDatePickerVisible,
    selectedDate,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
  };
}
