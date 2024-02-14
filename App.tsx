import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { LogBox } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient();

export default function App() {
  LogBox.ignoreLogs(["Sending"]);
  return (
    <QueryClientProvider client={queryClient}>
                  {/* <ReactQueryDevtools initialIsOpen={true} /> */}

      <SafeAreaProvider>
        <NavigationContainer>
          <PaperProvider>
            <StackNavigator />
          </PaperProvider>
        </NavigationContainer>
      </SafeAreaProvider>
      
    </QueryClientProvider>
  );
}
