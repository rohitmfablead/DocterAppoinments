// src/components/BaseLayout.js
import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';

const BaseLayout = ({
  children,
//   showHeader = true,
//   headerTitle = '',
//   showBack = false,
  backgroundColor = '#F8FAFC',
  statusBarColor = 'dark-content',
}) => {
  return (
    <View style={{ flex: 1, backgroundColor }}>
      <StatusBar barStyle={statusBarColor} backgroundColor={backgroundColor} />
      <SafeAreaView style={{ flex: 1 }}>
        {/* {showHeader && <CustomHeader title={headerTitle} showBack={showBack} />} */}
        <View style={{ flex: 1 }}>{children}</View>
      </SafeAreaView>
    </View>
  );
};

export default BaseLayout;
