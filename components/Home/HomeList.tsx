import React, { useCallback, useEffect } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ScreenNavigationProp } from "../../navigation/types";

interface IProps {
  data: {
    map: any;
    filter: any;
    id: string;
    detail: string;
    value: number;
  };
}

const HomeList = (props: IProps) => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const ddayPush = () => {
    const dday: number[] = [];
    for (let i = 100; i < 6001; i += 100) {
      dday.push(i);
    }
    return dday;
  };

  // const ddayPush = useCallback(() => {
  //   const day: number[] = []

  //   for (let i = 100; i < 6001; i += 100) {
  //     dday.push(i);
  //   }
  //   return day
  // },[])

  const dday = ddayPush();

  const dateFormat = (v: number) => {
    const today = new Date();
    return format(
      new Date(new Date(today.setDate(today.getDate() + v - 1))),
      "yyyy.M.d(EE)",
      { locale: ko }
    );
  };

  const moveHomeModify = (v: number) => {
    const filteredData = props.data.filter(
      (d: { value: number }) => d.value === v
    );
    navigation.navigate("HomeUpload", {
      id: filteredData[0]?.id,
      oldDetail: filteredData[0]?.detail,
      value: v,
      date: dateFormat(v),
    });
  };

  return (
    <>
      {dday.map((v, i) => (
        <TouchableOpacity
          activeOpacity={1}
          key={v}
          style={styles.container}
          onPress={() => moveHomeModify(v)}
        >
          <View>
            <Text style={styles.dday}>{v + "일"}</Text>
            <Text style={styles.date}>{dateFormat(v)}</Text>
          </View>

          {props.data.map((d: { id: string; detail: string; value: number }) =>
            d.value === v ? (
              <View key={d.value}>
                <Text style={styles.detail}>{d.detail}</Text>
              </View>
            ) : null
          )}
        </TouchableOpacity>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 14,
    // alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1.2,
    borderColor: "#F2F2F2",
  },
  dday: {
    color: "#4D4D4D",
    fontSize: 18,
  },
  date: {
    color: "#4D4D4D",
    paddingBottom: 14,
    paddingTop: 5,
  },
  detail: {
    color: "#1A1A1A",
    fontSize: 18,
  },
});
export default HomeList;
