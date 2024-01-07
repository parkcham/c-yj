import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
  GestureResponderEvent,
  ImageBackground,
  Text,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import RemoveButton from "../../components/RemoveButton";

interface IProps {
  images: string;
  onPressImagePicker: (event: GestureResponderEvent) => void;
  onPressRemoveImage: (event: GestureResponderEvent) => void;
}

const FeedImageList = (props: IProps) => {
  const { width } = useWindowDimensions();

  const ListHeaderComponent = () => (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPressImagePicker}
      style={[styles.header, { width: width / 4.2 }]}
    >
      <EvilIcons name="camera" size={50} color="pink" />

      <View style={styles.textView}>
        <Text style={styles.imagesLength}>{props.images.length}</Text>
        <Text style={styles.imagesMaxLength}>/5</Text>
      </View>

    </TouchableOpacity>
  );

  const renderItem = ({ item }: any) => (
    <ImageBackground
      source={{ uri: item }}
      style={[styles.renderItem, { width: width / 4.2 }]}
      imageStyle={styles.renderItemImage}
    >
      <RemoveButton size={14} onPress={() => props.onPressRemoveImage(item)} />
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={props.images}
        horizontal={true}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  header: {
    height: "100%",
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  textView: {
    flexDirection: "row",
  },
  imagesLength: {
    color: "pink",
  },
  imagesMaxLength: {
    color: "#8A8A8A",
  },
  renderItem: {
    height: "100%",
    marginLeft: 5,
    marginRight: 3,
  },
  renderItemImage: {
    borderRadius: 10,
  },
});

export default FeedImageList;
