import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { RootStackParamList } from "./types";
import BottomNavigator from "./BottomNavigator";
import FeedUpload from "../pages/Feed/FeedUpload";
import FeedModify from "../pages/Feed/FeedModify";
import CalendarUpload from "../pages/Calendar/CalendarUpload";
import HomeUpload from "../pages/Home/HomeUpload";
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
              color="#4D4D4D"
            />
          ),
          headerBackTitleVisible: false,
          presentation: "modal",
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          headerTintColor: "#4D4D4D",
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen
          options={{
            headerTitle: "새 피드",
          }}
          name="FeedUpload"
          component={FeedUpload}
        />
        <Stack.Screen
          options={{
            headerTitle: "피드 수정",
          }}
          name="FeedModify"
          component={FeedModify}
        />
        <Stack.Screen
          options={{
            headerTitle: "일정 추가",
          }}
          name="CalendarUpload"
          component={CalendarUpload}
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
              color="#4D4D4D"
            />
          ),
          headerBackTitleVisible: false,
          headerTintColor: "#4D4D4D",
          headerTitleStyle: {
            fontSize: 18,
          },
        }}
      >
        <Stack.Screen name="HomeUpload" component={HomeUpload} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
