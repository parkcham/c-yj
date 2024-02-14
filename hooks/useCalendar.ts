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
  const [month, setMonth] = useState(format(new Date(), "yyyy-MM-dd"));

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setMonth(day.dateString)
  };
  const filteredData = props.data.filter(
    (data: { date: string | number | Date }) =>
      format(new Date(data.date), "yyyy-MM-dd") === selectedDate
  );


  //함수 분리
  const onDayMonth = (months: any) => {
    setMonth(months.dateString);
    console.log(format(new Date(), "yyyy-MM-dd"))
    
    if(months.dateString===format(new Date(), "yyyy-MM-dd")){
      setSelectedDate(months.dateString)
    }else{
      setSelectedDate(format(new Date(months.dateString), "yyyy-MM-01"))

    }
  };
  ///
  
  const todayMove = () => {
    setSelectedDate(format(new Date(), "yyyy-MM-dd"))
    setMonth(format(new Date(), "yyyy-MM-dd"))
  }
  return {
    month,
    selectedDate,
    filteredData,
    markedSelectedDate,
    onDayMonth,
    onDayPress,
    todayMove
  };
}
