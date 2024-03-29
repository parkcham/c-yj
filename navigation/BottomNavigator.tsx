import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { Portal } from "react-native-paper";
import {
  useIsFocused,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

import HomeScreen from "../pages/Home/HomeScreen";
import FeedScreen from "../pages/Feed/FeedScreen";
import CalendarScreen from "../pages/Calendar/CalendarScreen";
import FabButton from "../components/Common/FabButton";

const Tab = createBottomTabNavigator();

const BottomNavigator = ({ route, navigation }: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "HomeScreen";
  let icon = "card-plus-outline";
  let isFocused = useIsFocused();
  let onPress = undefined;

  const moveFeedUpload = () => {
    navigation.navigate("FeedUpload");
  };

  const moveCalendarUpload = () => {
    navigation.navigate("CalendarUpload");
  };

  switch (routeName) {
    case "Feed":
      icon = "card-plus-outline";
      onPress = moveFeedUpload;
      break;

    case "Calendar":
      icon = "pencil-plus-outline";
      onPress = moveCalendarUpload;
      break;

    default:
      isFocused = false;
      break;
  }

  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
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
          name="HomeScreen"
          component={HomeScreen}
        />

        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="logo-instagram" size={27} color={color} />
            ),
          }}
          name="Feed"
          component={FeedScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="calendar" size={23} color={color} />
            ),
          }}
          name="Calendar"
          component={CalendarScreen}
        />
      </Tab.Navigator>

      <Portal>
        <FabButton visible={isFocused} icon={icon} onPress={onPress} />
      </Portal>
    </>
  );
};

export default BottomNavigator;
