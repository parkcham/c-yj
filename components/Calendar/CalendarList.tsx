import React, { useRef, useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  SectionListData,
} from "react-native";
import Calendar from "../../components/Calendar/Calendar";
import FabButton from "../../components/Common/FabButton";
import useCalendar from "../../hooks/useCalendar";
import { format } from "date-fns";
import CalendarCard from "../../components/Calendar/CalendarCard";
import { ko } from "date-fns/locale";
import Input from "../../components/Common/Input";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../../navigation/types";
import { Modalize } from "react-native-modalize";
import useDateTimePicker from "../../hooks/useDateTimePicker";
import RenderSectionHeader from "./SectionHeader";
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
