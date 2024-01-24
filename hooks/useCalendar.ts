import { useState, useMemo } from "react";
import { format } from "date-fns";

interface IProps {
  data: any;
}
export default function useCalendar(props: IProps) {
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const markedDates = useMemo(
    () =>
      props.data.reduce(
        (
          acc: { [x: string]: { marked: boolean; dotColor: string } },
          current: { date: string | number | Date }
        ) => {
          const formattedDate = format(new Date(current.date), "yyyy-MM-dd");
          acc[formattedDate] = {
            marked: true,
            dotColor: "red",
          };
          return acc;
        },
        {}
      ),
    [props.data]
  );
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      selectedColor: "pink",

      marked: markedDates[selectedDate]?.marked,
    },
  };

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
  };
  const filteredData = props.data.filter(
    (data: { date: string | number | Date }) =>
      format(new Date(data.date), "yyyy-MM-dd") === selectedDate
  );

  const [month, setMonth] = useState(format(new Date(), "yyyy-MM-dd"));
  const onDayMonth = (months: any) => {
    setMonth(months.dateString);
  };

  return {
    month,
    selectedDate,
    filteredData,
    markedSelectedDate,
    onDayMonth,
    onDayPress,
  };
}
