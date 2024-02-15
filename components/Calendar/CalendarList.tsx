import { Key, ReactNode } from "react";
import { View } from "react-native";

import CalendarEmptyCard from "../../components/Calendar/CalendarCard/CalendarEmptyCard";
import CalendarCard from "../../components/Calendar/CalendarCard/CalendarCard";

interface IProps {
  filteredData: {
    length: number;
    map(
      arg0: (f: {
        id: Key | null | undefined;
        detail: string;
        time: string;
      }) => import("react").JSX.Element
    ): ReactNode;
    id: Key | null | undefined;
    detail: string;
    time: string;
  };
}
const CalendarList = (props: IProps) => {
  const filteredData = props.filteredData;
  
  return (
    <>
      {filteredData.length === 0 ? (
        <CalendarEmptyCard />
      ) : (
        filteredData.map((f) => (
          <View key={f.id}>
            <CalendarCard detail={f.detail} time={f.time} />
          </View>
        ))
      )}
    </>
  );
};

export default CalendarList;
