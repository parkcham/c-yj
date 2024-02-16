import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { ScreenNavigationProp } from "../../navigation/types";
import { RootStackParamList } from "../../navigation/types";


type DiaryModifyProps = StackScreenProps<RootStackParamList, "DiaryModify">;

const DiaryModify = ({route}:DiaryModifyProps) => {
    const { title, detail, id } = route.params;

    return (
        <View>
            <Text>{title}</Text>
            <Text>{detail}</Text>

        </View>
    );
};

export default DiaryModify;