import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAB, Portal, Provider as PaperProvider } from "react-native-paper";

import { ScreenNavigationProp } from "../../navigation/types";

const UploadButton = () => {
  const navigation = useNavigation<ScreenNavigationProp>();

  const [visible, setVisible] = useState({ open: false });

  const onStateChange = ({ open }: any) => setVisible({ open });

  const { open } = visible;

  return (
    <PaperProvider>
       <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? "close" : "plus"}
          color="white"
        
          backdropColor="transparent"
          fabStyle={styles.fab}
          actions={[
            {
              icon: "calendar-today",
              color: "pink",
              label: "디데이",
              onPress: () => navigation.navigate("DDayUpload"),
            },
            {
              icon: "instagram",
              color: "pink",
              label: "피드",
              onPress: () => navigation.navigate("FeedUpload"),
            },
            {
              icon: "notebook-outline",
              color: "pink",
              label: "다이어리",
              onPress: () => navigation.navigate("DiaryUpload"),
            },
          ]}
          onStateChange={onStateChange}
        />
    </Portal>
      </PaperProvider>
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
