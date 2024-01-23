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

import RemoveButton from "../../Common/RemoveButton";

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
      style={[styles.header, { width: width / 4.5 }]}
    >
      <EvilIcons name="camera" size={46} color="pink" />

      <View style={styles.textView}>
        <Text style={styles.imagesLength}>{props.images.length}</Text>
        <Text style={styles.imagesMaxLength}>/5</Text>
      </View>

    </TouchableOpacity>
  );

  const renderItem = ({ item }: any) => (
    <ImageBackground
      source={{ uri: item }}
      style={[styles.renderItem, { width: width / 4.5 }]}
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
    // height: 130,
    borderBottomWidth:8,
    borderColor:"#F5F5F5",

    // borderTopWidth:1.2,
    // borderBottomWidth: 1.2,
    // borderColor: "#F2F2F2",
    paddingTop:20,
    paddingBottom:20
  },
  header: {
    height: 88,
    marginLeft: 10,
    borderRadius: 8,
    backgroundColor: "#F5F5F5",
    // borderWidth:1.2,
    // borderColor:"#E6E6E6",
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
    height: 88,
    marginLeft: 5,
    marginRight: 3,
  },
  renderItemImage: {
    borderRadius: 8,
  },
});

export default FeedImageList;
