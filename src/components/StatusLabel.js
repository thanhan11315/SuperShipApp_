import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const StatusLabel = ({dotColor, labelText, fontWeight, color}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.dot, {backgroundColor: dotColor}]} />
      <Text style={[styles.labelText, {fontWeight, color}]}>{labelText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 4,
  },
  labelText: {
    fontSize: 14,
  },
});

export default StatusLabel;
