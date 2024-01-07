import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Home from "../Screens/Home";
import DDay from "../Screens/DDay";
import Feed from "../Screens/Feed";
import Diary from "../Screens/Diary";
import Calendar from "../Screens/Calendar";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
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
        name="Calendar"
        component={Calendar}
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
  );
};

export default BottomNavigator;
