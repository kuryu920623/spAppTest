import React from 'react';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import {
  StyleSheet, Text, View, Dimensions,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View>
        <MapView style={styles.map} />
      </View> */}

      <View style={styles.appBar}>
        <View style={styles.appBarInner}>
          <Text style={styles.appBarTitle}>Memo App</Text>
          <Text style={styles.appBarRight}>ログアウト</Text>
        </View>
      </View>

      <View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年3月24日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年3月24日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2020年3月24日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appBarInner: {
    alignItems: 'center',
  },
  appBarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
