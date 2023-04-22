import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button1 = ({
  title,
  onPress,
  fontSize = 18,
  backgroundColor = '#a73a3a',
  borderWidth = 0,
  borderColor = '#a73a3a',
  color = '#fff',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor, borderWidth, borderColor}]}
      onPress={onPress}>
      <Text style={[styles.text, {fontSize, color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a73a3a',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '700',
    color: '#fff',
  },
});

export default Button1;
