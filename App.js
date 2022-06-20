import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { colors } from "./src/theme/colors";
import { useFonts } from "expo-font";
import Text from "./src/components/text/text";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./src/screens/home/home";
import Details from "./src/screens/details/details";
import { TransitionPresets } from "@react-navigation/stack";


const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
  });

  if (!loaded) {
    return <Text>Font is loading!</Text>;
  }

  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Profile",
              ...TransitionPresets.SlideFromRightIOS,
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              title: "Profile",
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: "center",
    justifyContent: "center",
  },
});
