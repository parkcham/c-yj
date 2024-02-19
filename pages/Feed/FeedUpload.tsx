import React, { useState } from "react";
import { StyleSheet, Platform, View } from "react-native";

import useHeader from "../../hooks/useHeader";
import useImagePicker from "../../hooks/useImagePicker";
import FeedImageList from "../../components/Feed/FeedUpload/FeedImageList";
import InputDone from "../../components/Common/InputDone";
import Input from "../../components/Common/Input";
import { createdAt, imageGetUrl } from "../../apis/api/commonFirebase";
import SendButton from "../../components/Common/SendButton";
import useAddMutation from "../../hooks/query/useAddMutation";

const FeedUpload = () => {
  const { addContent } = useAddMutation({ queryKey: "Feeds" });

  const [detail, setDetail] = useState("");
  const { images, imagePickerLimit, removeImage } = useImagePicker();

  const addFeed = async () => {
    const imageUrl = imageGetUrl(images);

    addContent({
      collection: "Feeds",
      detail: detail,
      createdAt: createdAt,
      imageUrl: (await imageUrl).imageResult,
      imageName: (await imageUrl).imageName,
    });
  };

  useHeader({
    deps: [images, detail],
    headerRight: <SendButton disabled={detail.length} onPress={addFeed} />,
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
    height: 220,
    padding: 10,
    borderTopWidth: 1.2,
    borderBottomWidth: 1.2,
    borderColor: "#F2F2F2",
  },
});

export default FeedUpload;
