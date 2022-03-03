import AppLoading from "expo-app-loading";
import AppNavigator from "./app/AppNavigator.js";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Regular": require("./app/assets/fonts/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <AppNavigator />;
  }
}
