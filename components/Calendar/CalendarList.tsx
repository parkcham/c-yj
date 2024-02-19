import React from "react";
import { View, ActivityIndicator } from "react-native";

import CalendarEmptyCard from "../../components/Calendar/CalendarCard/CalendarEmptyCard";
import CalendarCard from "../../components/Calendar/CalendarCard/CalendarCard";

interface IProps {
  isLoading: boolean;
  filteredData: {
    length: number;
    map: any;
    id: string;
    detail: string;
    time: string;
  };
}
const CalendarList = (props: IProps) => {
  return (
    <>
      {props.isLoading ? (
        <ActivityIndicator color={"pink"} />
      ) : props.filteredData.length === 0 ? (
        <CalendarEmptyCard />
      ) : (
        props.filteredData.map(
          (f: { id: string; detail: string; time: string }) => (
            <View key={f.id}>
              <CalendarCard detail={f.detail} time={f.time} id={f.id} />
            </View>
          )
        )
      )}
    </>
  );
};

export default CalendarList;
