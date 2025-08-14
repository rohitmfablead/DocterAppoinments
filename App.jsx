// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import SignupScreen1 from './src/screens/SignupScreen1';
import HomeScreen from './src/screens/HomeScreen';
import MyTabs from './src/navigation/BottomTab';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import BookingAppoinmentScreen from './src/screens/BookingAppoinmentScreen';
import MyBookingScreen from './src/screens/MyBookingScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Signup1" component={SignupScreen1} />
      <Stack.Screen name="Bottom" component={MyTabs} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen
        name="BookingAppoinment"
        component={BookingAppoinmentScreen}
      />
      <Stack.Screen name="MyBooking" component={MyBookingScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
