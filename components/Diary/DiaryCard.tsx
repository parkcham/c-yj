import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IProps {
  title: string;
  detail: string;
  createdDate: string;
}

const DiaryCard = (props: IProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <Text numberOfLines={2} style={styles.detailText}>
        {props.detail}
      </Text>
      <Text style={styles.createdDateText}>{props.createdDate}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1.2,
    borderColor: "#F2F2F2",
    marginBottom: 5,
    marginTop: 5,
  },
  titleText: {
    color: "#545454",
    fontSize: 20,
  },
  detailText: {
    color: "#808080",
    fontSize: 18,
    marginTop: 5,
  },
  createdDateText: {
    color: "#8A8A8A",
    marginBottom: 7,
    marginTop: 5,
  },
});

export default DiaryCard;
