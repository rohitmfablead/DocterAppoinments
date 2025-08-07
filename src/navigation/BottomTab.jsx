import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Animated } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import LocationScreen from '../screens/LocationScreen';
import BookingScreen from '../screens/BookingScreen';
import ProfileScreen from '../screens/ProfileScreen';



import colors from '../utils/colors';
import { appointment, appointments, home, homes, location1, location1s, user1, user1s } from '../assets/icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        },
        tabBarIcon: ({ focused, size }) => {
          const scaleAnim = useRef(new Animated.Value(1)).current;

          useEffect(() => {
            Animated.spring(scaleAnim, {
              toValue: focused ? 1.2 : 1,
              useNativeDriver: true,
              friction: 5,
              tension: 150,
            }).start();
          }, [focused]);

          let iconUrl;

          switch (route.name) {
            case 'Home':
              iconUrl = focused ? home : homes;
              break;
            case 'Location':
              iconUrl = focused ? location1 : location1s;
              break;
            case 'Booking':
              iconUrl = focused ? appointment : appointments;
              break;
            case 'Profile':
              iconUrl = focused ? user1 : user1s;
              break;
            default:
              iconUrl = calendarInactive;
          }

          return (
            <Animated.View
              style={{
                width: size + 25,
                height: size + 25,
                backgroundColor: colors.background,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: (size + 25) / 2,
                marginTop: 15,
                transform: [{ scale: scaleAnim }],
              }}
            >
              <Image
                source={iconUrl}
                style={{ width: size, height: size, resizeMode: 'contain' }}
              />
            </Animated.View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Location" component={LocationScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
