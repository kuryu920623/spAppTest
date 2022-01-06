import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View>
      <AppBar />
      <View>
        <Text>買い物リスト</Text>
        <Text>2020年12月24日 10:00</Text>
      </View>
      <View>
        <Text>
          買い物リスト
          テストテスト
        </Text>
      </View>
      <CircleButton>
        <Feather name="plus" size={32} color="white" />
      </CircleButton>
    </View>
  );
}
