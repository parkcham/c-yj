import React from "react";
import { StyleSheet, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import useForm from "../hooks/useForm";
import useHeader from "../hooks/useHeader";
import DiaryInput from "../pages/Diary/DiaryInput";
import InputDone from "../components/InputDone";

const DiaryUpload = () => {
  const { title, detail, onChange } = useForm();

  const tlqkf = () => {
    console.log("zz");
  };

  useHeader({ disabled: title.length, onPress: tlqkf });

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
