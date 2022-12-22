import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import AppContainer from "./src/components/AppContainer/AppContainer";
import { Context } from "./src/screens/Context";
import { Home } from "./src/screens/Home";
import { Schedule } from "./src/screens/Schedule";

import { SignIn } from "./src/screens/SignIn";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" hidden />
      <AppContainer>
        <Schedule />
      </AppContainer>
    </NativeBaseProvider>
  );
}
