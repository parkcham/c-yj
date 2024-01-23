import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { LogBox } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  LogBox.ignoreLogs(["Sending"]);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <PaperProvider>
          <StackNavigator />
        </PaperProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
