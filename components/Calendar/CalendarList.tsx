import React from "react";
import {
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";

import CalendarCard from "./CalendarCard/CalendarCard";
import ListEmptyView from "./ListEmptyView";
import SectionHeader from "./SectionHeader";

interface IProps {
  ListHeaderComponent:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;

  onScroll?: (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => void | undefined;

  selectedDate: string;

  data: {
    id: number;
    detail: string;
    time: string;
    date: string;
  }[];
}

const CalendarList = (props: IProps) => {
  const renderItem = ({ item, index }: any) => (
    <CalendarCard detail={item.detail} time={item.time} />
  );

  const ListFooterComponent = () => (
    <ListEmptyView dataLength={props.data.length} />
  );
  return (
    <FlatList
      data={props.data}
      ListFooterComponent={ListFooterComponent}
      renderItem={renderItem}
      ListHeaderComponent={
        <>
          {props.ListHeaderComponent}
          <SectionHeader
            selectedDate={props.selectedDate}
            dataLength={props.data.length}
          />
        </>
      }
      showsVerticalScrollIndicator={false}
      keyExtractor={(item: any) => item.id}
      onScroll={props.onScroll}
    />
  );
};

export default CalendarList;
