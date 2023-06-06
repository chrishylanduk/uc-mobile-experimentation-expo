import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginPage from "./app/views/login";
import ClaimantHomePage from "./app/views/claimant_home";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import OtherPage from "./app/views/jounals";
import TodoPage from './app/views/todos';
import JournalPage from './app/views/jounals';

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
      let iconName: keyof typeof FontAwesome.glyphMap;

      switch (route.name) {
        case "Home": {
          iconName = "home"
          break;
        }
        case "Todo": {
          iconName = "clipboard"
          break;
        }
        case "Journals": {
          iconName = "book"
          break;
        }
        default: {
          iconName = "ellipsis-h"
          break;
        }
      }
      return <FontAwesome name={iconName} size={size} color={color} />;

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
    <Tab.Screen name="Home" component={ClaimantHomePage} />
    <Tab.Screen name="Todo" component={TodoPage} />
    <Tab.Screen name="Journals" component={JournalPage} />
    <Tab.Screen name="More" component={OtherPage} />
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
