import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

interface IProps {
  headerTitle?: string | number;
  headerRight: React.JSX.Element;
  deps?: any;
}

const useHeader = (props: IProps) => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: props.headerTitle,
      headerRight: () => props.headerRight,
    });
  }, [navigation, props.deps]);
};

export default useHeader;
