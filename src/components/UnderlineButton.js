import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const UnderlinedButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textDecorationLine: 'underline',
    color: '#a73a3a',
  },
});

export default UnderlinedButton;
