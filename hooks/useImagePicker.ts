import { useState } from "react";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function useImagePicker() {
  const [images, setImages] = useState([] as any);

  const imagePicker = async () => {
    const { assets: result } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
      selectionLimit: 5 - images.length,
      // orderedSelection:false
    });
    const uri = [];

    if (result) {
      for (let i = 0; i < result.length; i++) {
        uri.push(result[i].uri);
      }
    }

    setImages(images.concat(uri));
  };

  const removeImage = (url: any) => {
    setImages(images.filter((item: any) => item !== url));
  };

  const imagePickerLimit = () => {
    if (images.length > 4) {
      Alert.alert("이미지 최대 5장 !", "", [{ text: "그래" }]);
      return;
    }
    imagePicker();
  };

  return { images, imagePickerLimit, removeImage };
}
