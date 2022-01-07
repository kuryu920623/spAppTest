import { string } from 'prop-types';
import React from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FE3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 10,
    height: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#FFFFFF',
  },
});
