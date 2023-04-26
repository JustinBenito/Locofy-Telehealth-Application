const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SignUpIcon from "./screens/SignUpIcon";
import PatientProfile from "./screens/PatientProfile";
import DoctorsCalendar from "./screens/DoctorsCalendar";
import DoctorsProfile from "./screens/DoctorsProfile";
import DoctorsList from "./screens/DoctorsList";
import DocCalendar from "./screens/DocCalendar";
import DocHome from "./screens/DocHome";
import PatientHome from "./screens/PatientHome";
import DocLoginIcon from "./screens/DocLoginIcon";
import LoginIcon from "./screens/LoginIcon";
import DocSignupFormIcon from "./screens/DocSignupFormIcon";
import DocSignUpIcon from "./screens/DocSignUpIcon";
import Chats1 from "./components/Chats1";
import Chats from "./components/Chats";
import Contacts3 from "./components/Contacts3";
import Contacts2 from "./components/Contacts2";
import Contacts1 from "./components/Contacts1";
import Contacts from "./components/Contacts";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Chats />,
    <Contacts2 />,
    <Contacts />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Chats1 />,
    <Contacts3 />,
    <Contacts1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <SafeAreaView>
            <View
              style={{
                alignSelf: "stretch",
                backgroundColor: "#fff",
                height: 69,
                flexDirection: "row",
                paddingHorizontal: 60,
                paddingVertical: 15,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {bottomTabItemsNormal.map((item, index) => {
                const isFocused = state.index === index;
                return (
                  <Pressable
                    key={index}
                    onPress={() => {
                      navigation.navigate({
                        name: state.routes[index].name,
                        merge: true,
                      });
                    }}
                  >
                    {activeIndex === index
                      ? bottomTabItemsActive[index] || item
                      : item}
                  </Pressable>
                );
              })}
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Tab.Screen
        name="PatientHome"
        component={PatientHome}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="DoctorsList"
        component={DoctorsList}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="PatientProfile"
        component={PatientProfile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    Montserrat_regular: require("./assets/fonts/Montserrat_regular.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Montserrat_semibold: require("./assets/fonts/Montserrat_semibold.ttf"),
    Montserrat_bold_italic: require("./assets/fonts/Montserrat_bold_italic.ttf"),
    "Work Sans_regular": require("./assets/fonts/Work_Sans_regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="SignUp"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="SignUp"
              component={SignUpIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorsCalendar"
              component={DoctorsCalendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorsProfile"
              component={DoctorsProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocCalendar"
              component={DocCalendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocHome"
              component={DocHome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocLogin"
              component={DocLoginIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocSignupForm"
              component={DocSignupFormIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DocSignUp"
              component={DocSignUpIcon}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
