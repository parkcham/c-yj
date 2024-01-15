import React, { useEffect, useState, useRef, useMemo } from "react";
import { format } from "date-fns";

interface IProps {
  dates: any;
}
export default function useCalendar(props: IProps) {

  const [schedule, setSchedule] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const onDayPress = (day:any) => {
    setSelectedDate(day.dateString);
    daySchedule(day.dateString);
  };

  const markedDates = props.dates.reduce(
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
  );

  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      selectedColor: "pink",

      marked: markedDates[selectedDate]?.marked,
    },
  };

  const selectedSchedule = [];
  const daySchedule = (day: () => string) => {
    props.dates.forEach((d: { date: () => string }) => {
      if (d.date === day) {
        selectedSchedule.push(d);
      }
    });
  };

  const sortedDates = (s: any) => {
    let dates = s;
    dates.sort((a: { strTime: any }, b: { strTime: any }) => {
      return Number(a.strTime) - Number(b.strTime);
    });
    setSchedule(dates);
  };
  return { selectedDate,markedSelectedDate,onDayPress };
}
