import React, { useState } from "react";
import {
  ImageResizeMode,
  FlatList,
  View,
  Text,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

interface IProps {
  images: string;
}

const FeedCardImageList = (props: IProps) => {
  const { width } = useWindowDimensions();
  const [isActivated, setIsActivated] = useState(false);
  const [resizeMode, setResizeMode] = useState("cover" as ImageResizeMode);

  const handelResize = () => {
    isActivated ? setResizeMode("cover") : setResizeMode("contain");
    setIsActivated((prev) => !prev);
  };

  const renderItem = ({ item, index }: any) => (
    <TouchableOpacity activeOpacity={1} onPress={handelResize}>
      <ImageBackground
        style={{ height: 320, width: width, backgroundColor: "black" }}
        // resizeMode='contain'
        resizeMode={resizeMode}
        source={{ uri: item }}
      >
        <View style={{ alignItems: "flex-end", padding: 10 }}>
          <Text
            style={{
              color: "pink",
              fontSize: 12,
              borderWidth: 1,
              borderColor: "pink",
              paddingBottom: 2,
              paddingTop: 2,
              paddingLeft: 5,
              paddingRight: 5,
              borderRadius: 8,
            }}
          >
            {index + 1}/{props.images.length}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal={true}
      data={props.images}
      renderItem={renderItem}
      keyExtractor={(item: any) => item}
    />
  );
};

export default FeedCardImageList;
