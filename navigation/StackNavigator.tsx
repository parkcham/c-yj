import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import BottomNavigator from "./BottomNavigator";
import DDayUpload from "../pages/DDay/DDayUpload";
import FeedUpload from "../pages/Feed/FeedUpload";
import DiaryUpload from "../pages/Diary/DiaryUpload";
import { RootStackParamList } from "./types";

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="C·YJ"
          component={BottomNavigator}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: "white",
            },
            headerTintColor: "pink",
          }}
        />
      </Stack.Group>

      <Stack.Group
        screenOptions={{
          headerShadowVisible: false,
          headerBackImage: () => (
            <Ionicons
              style={{ padding: 5 }}
              name="arrow-back"
              size={26}
              color="#8A8A8A"
            />
          ),
          headerBackTitleVisible: false,
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerTintColor: "#8A8A8A",
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: "새 디데이",
          }}
          name="DDayUpload"
          component={DDayUpload}
        />
        <Stack.Screen
          options={{
            headerTitle: "새 피드",
          }}
          name="FeedUpload"
          component={FeedUpload}
        />
        <Stack.Screen
          options={{
            headerTitle: "새 다이어리",
          }}
          name="DiaryUpload"
          component={DiaryUpload}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
