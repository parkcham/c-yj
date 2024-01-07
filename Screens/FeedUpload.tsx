import React from "react";
import { StyleSheet, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import useForm from "../hooks/useForm";
import useHeader from "../hooks/useHeader";
import useImagePicker from "../hooks/useImagePicker";
import FeedInput from "../pages/Feed/FeedInput";
import FeedImageList from "../pages/Feed/FeedImageList";
import InputDone from "../components/InputDone";

const FeedUpload = () => {
  const { title, detail, onChange } = useForm();
  const { images, imagePickerLimit, removeImage } = useImagePicker();

  const tlqkf = () => {
    console.log("zz");
  };

  useHeader({ disabled: title.length, onPress: tlqkf });

  return (
    <>
      <KeyboardAwareScrollView
        keyboardOpeningTime={0}
        extraScrollHeight={50}
        extraHeight={120}
        style={styles.container}
      >
        <FeedImageList
          images={images}
          onPressImagePicker={imagePickerLimit}
          onPressRemoveImage={removeImage}
        />
        <FeedInput
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
    paddingTop: 10,
  },
});

export default FeedUpload;
