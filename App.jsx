import { StyleSheet, View } from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import LandingScreen from './src/screens/LandingScreen';


const App = () => {
  return (
    <View style={styles.container}>
      <LandingScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
