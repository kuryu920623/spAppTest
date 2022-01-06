import React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import {
  StyleSheet, Text, View, Dimensions,
} from 'react-native';

import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View>
        <MapView style={styles.map} />
      </View> */}

      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
