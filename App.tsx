import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { LogBox } from 'react-native';
export default function App() {
  LogBox.ignoreLogs(['Sending']);
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
