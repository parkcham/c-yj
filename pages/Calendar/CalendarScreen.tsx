import React, { useRef, useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  SectionList,
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
const CalendarScreen = () => {
  const data = [
    {
      id: 929,
      detail: "test",
      time: "5:40",
      date: "2024-01-24",
    },

    {
      id: 99,
      detail: "test",
      time: "5:40",
      date: "2024-01-25",
    },
    {
      id: 9229,
      detail: "test",
      time: "5:40",
      date: "2024-01-25",
    },

    {
      id: 1,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 2,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 3,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 4,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 5,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 6,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 7,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 8,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 9,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 10,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 11,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
    {
      id: 12,
      detail: "test",
      time: "5:40",
      date: "2024-01-26",
    },
  ];

  const navigation = useNavigation<ScreenNavigationProp>();

  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );


  const markedDates = useMemo(
    () =>
      data.reduce(
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
    [data]
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
    // daySchedule(day.dateString);
  };
  const renderItem = ({ item, index }: any) => (
    <CalendarCard detail={item.detail} time={item.time} />
  );
  const filteredData = data.filter(
    (data) => format(new Date(data.date), "yyyy-MM-dd") === selectedDate
  );

  const renderSectionHeader = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {selectedDate === format(new Date(), "yyyy-MM-dd") ? (
        <Text style={{ fontSize: 20, color: "#5CD1E5" }}>Today</Text>
      ) : (
        <Text style={{ fontSize: 20, color: "pink" }}>
          {format(new Date(selectedDate), "d")}일(
          {format(new Date(selectedDate), "EE", { locale: ko })})
        </Text>
      )}

      {filteredData.length > 0 ? (
        <Text style={{ fontSize: 16, color: "#545454" }}>
          일정:{filteredData.length}개
        </Text>
      ) : null}
    </View>
  );

  const ListEmptyComponent = () => (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: "80%",
      }}
    >
      {filteredData.length === 0 ? (
        <Text style={{ fontSize: 18, color: "#545454" }}>일정 없음 !</Text>
      ) : null}
    </View>
  );


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

      <SectionList
        contentContainerStyle={{ paddingBottom: 60 }}
        showsVerticalScrollIndicator={false}
        // keyExtractor?: ((item: ItemT, index: number) => string) | undefined;

        keyExtractor={(item: any) => item.id}
        ListHeaderComponent={
          <Calendar markedDates={markedSelectedDate} onDayPress={onDayPress} />
        }
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        sections={[{ data: filteredData }]}
        stickySectionHeadersEnabled={true}
        ListFooterComponent={ListEmptyComponent}
      />
      <FabButton icon="pencil" onPress={()=>navigation.navigate("CalendarUpload")} />
    </SafeAreaView>
  );
};

export default CalendarScreen;
