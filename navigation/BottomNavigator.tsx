import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Portal } from "react-native-paper";
import {
  useIsFocused,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import Home from "../pages/Home/Home";
import DDay from "../pages/DDay/DDay";
import Feed from "../pages/Feed/Feed";
import Diary from "../pages/Diary/Diary";
import CalendarScreen from "../pages/Calendar/CalendarScreen";
import UploadButton from "../components/Common/UploadButton";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ route }: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  let isFocused = useIsFocused();

  //HomeScreen UploadButton isFocused
  switch (routeName) {
    case "Home":
      break;
    default:
      isFocused = false;
      break;
  }
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShadowVisible: false,
          tabBarInactiveTintColor: "pink",
          tabBarActiveTintColor: "#fb4b00",
          headerTintColor: "pink",
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" size={27} color={color} />
            ),
          }}
          name="Home"
          component={Home}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="ios-today-outline" size={26} color={color} />
            ),
          }}
          name="DDay"
          component={DDay}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="logo-instagram" size={28} color={color} />
            ),
          }}
          name="Feed"
          component={Feed}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="calendar" size={24} color={color} />
            ),
          }}
          name="CalendarScreen"
          component={CalendarScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="notebook-outline"
                size={28}
                color={color}
              />
            ),
          }}
          name="Diary"
          component={Diary}
        />
      </Tab.Navigator>

      <Portal>
        <UploadButton isFocused={isFocused} />
      </Portal>
    </>
  );
};

export default BottomNavigator;
