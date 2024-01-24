import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAB } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ScreenNavigationProp } from "../../navigation/types";

interface IProps {
  isFocused: boolean;
}

const UploadButton = (props: IProps) => {
  const { bottom } = useSafeAreaInsets();

  const navigation = useNavigation<ScreenNavigationProp>();

  const [visible, setVisible] = useState({ open: false });

  const onStateChange = ({ open }: any) => setVisible({ open });

  const { open } = visible;

  const ddayUpload = () => {
    navigation.navigate("DDayUpload");
  };
  const feedUpload = () => {
    navigation.navigate("FeedUpload");
  };
  const diaryUpload = () => {
    navigation.navigate("DiaryUpload");
  };

  return (
    <FAB.Group
      open={open}
      visible={props.isFocused}
      icon={open ? "close" : "plus"}
      color="white"
      // backdropColor="transparent"
      fabStyle={styles.fab}
      style={{ position: "absolute", paddingBottom: bottom + 50 }}
      actions={[
        {
          icon: "calendar-today",
          color: "pink",
          label: "디데이",
          onPress: ddayUpload,
        },
        {
          icon: "instagram",
          color: "pink",
          label: "피드",
          onPress: feedUpload,
        },
        {
          icon: "notebook-outline",
          color: "pink",
          label: "다이어리",
          onPress: diaryUpload,
        },
      ]}
      onStateChange={onStateChange}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "pink",
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadButton;
