import React, { useState } from "react";
import { StyleSheet, Platform, View } from "react-native";

import useHeader from "../../hooks/useHeader";
import useImagePicker from "../../hooks/useImagePicker";
import FeedImageList from "./FeedImageList";
import InputDone from "../../components/InputDone";
import Input from "../../components/Input";
import {
  createContent,
  createdAt,
  imageGetUrl,
} from "../../apis/api/commonFirebase";

const FeedUpload = () => {
  const [detail, setDetail] = useState("");
  const { images, imagePickerLimit, removeImage } = useImagePicker();
  const imageUrl = imageGetUrl(images);

  useHeader({
    disabled: detail.length + images.length,
    onPress: async () =>
      createContent({
        collection: "Feeds",
        detail: detail,
        createdAt: createdAt,
        imageUrl: (await imageUrl).imageResult,
        imageName: (await imageUrl).imageName,
      }),
  });

  return (
    <>
      <View style={styles.container}>
        <Input
          style={styles.input}
          multiline={true}
          value={detail}
          onChangeText={setDetail}
        />

        <FeedImageList
          images={images}
          onPressImagePicker={imagePickerLimit}
          onPressRemoveImage={removeImage}
        />
      </View>
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
  input: {
    height: 200,
    padding: 10,
  },
});

export default FeedUpload;
