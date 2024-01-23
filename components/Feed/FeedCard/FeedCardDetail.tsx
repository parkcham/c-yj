import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

interface IProps {
  detail: string;
}

const FeedCardDetail = (props: IProps) => {
  const [line, setLine] = useState(3);
  const [isActivated, setIsActivated] = useState(false);
  const handleLine = () => {
    isActivated ? setLine(3) : setLine(Number.MAX_SAFE_INTEGER);
    setIsActivated((prev) => !prev);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handleLine}>
      <Text
        numberOfLines={line}
        style={{
          color: "#545454",
          marginLeft: 7,
          marginRight: 7,
          marginBottom: 7,
          marginTop: 12,
          fontSize: 16,
        }}
      >
        {props.detail}
      </Text>
    </TouchableOpacity>
  );
};

export default FeedCardDetail;
