// src/components/BaseLayout.js
import React from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BaseLayout = ({
  children,
  backgroundColor = '#fff',
  statusBarColor = 'dark-content',
}) => {
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar barStyle={statusBarColor} backgroundColor={backgroundColor} />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default BaseLayout;
