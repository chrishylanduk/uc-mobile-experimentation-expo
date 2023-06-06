import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from "./app/views/login";
import ClaimantHomePage from "./app/views/claimant_home";
import { Ionicons } from '@expo/vector-icons';
import OtherPage from "./app/views/other_page";

export type RootStackParamList = {
  SignedOut: undefined;
  SignIn: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function SignedInStack() {

  return (
  <Tab.Navigator initialRouteName="Home" 
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName : keyof typeof Ionicons.glyphMap;

      if (route.name === 'Home') {
        iconName = focused
          ? 'ios-information-circle'
          : 'ios-information-circle-outline';
      } else {
        iconName = focused ? 'ios-list' : 'ios-list-outline';
      }

      return <Ionicons name={iconName} size={size} color={color} />;
   },
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

    tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
  })}>
    <Tab.Screen name="Other" component={OtherPage} />
    <Tab.Screen name="Home" component={ClaimantHomePage} />
  </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="SignedOut" component={LoginPage} />
      <Stack.Screen name="SignIn" component={SignedInStack} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
