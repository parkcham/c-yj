import React from "react";
import { StyleSheet, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import useForm from "../../hooks/useForm";
import useHeader from "../../hooks/useHeader";
import DiaryInput from "../../components/Diary/DiaryInput";
import InputDone from "../../components/Common/InputDone";
import { createContent, createdAt } from "../../apis/api/commonFirebase";

const DiaryUpload = () => {
  const { title, detail, onChange } = useForm();

  useHeader({
    disabled: title.length + detail.length,
    onPress: () =>
      createContent({
        collection: "Diarys",
        title: title,
        detail: detail,
        createdAt: createdAt,
      }),
  });

  return (
    <>
      <KeyboardAwareScrollView
        style={styles.container}
        keyboardOpeningTime={0}
        extraScrollHeight={50}
        extraHeight={120}
        bounces={false}
      >
        <DiaryInput
          title={title}
          detail={detail}
          onChangeTitle={(e) => onChange("title", e)}
          onChangeDetail={(e) => onChange("detail", e)}
        />
      </KeyboardAwareScrollView>

      {Platform.OS === "ios" ? <InputDone /> : null}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 14,
    paddingTop: 10,
    paddingRight: 20,
  },
});

export default DiaryUpload;
