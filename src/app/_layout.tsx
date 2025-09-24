import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const isLoggedIn = false;

export default function RootLayout() {
  const [loaded, error] = useFonts({
    PlusJakartaSansBold: require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    PlusJakartaSansExtraBold: require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    PlusJakartaSansExtraLight: require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    PlusJakartaSansLight: require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    PlusJakartaSansMedium: require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSans: require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSansSemiBold: require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen
            name="login"
            options={{ headerShown: false }}
          />
        </Stack.Protected>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />
        </Stack.Protected>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
