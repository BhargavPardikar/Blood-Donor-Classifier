// App.js
import React from 'react';
import { View, StatusBar } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </View>
  );
}
