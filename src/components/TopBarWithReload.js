import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const TopBarWithReload = ({title, onPress, onReload}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onPress}>
        <View style={styles.backIcon}>
          <Icon name="chevron-left" size={35} color="#fff" />
        </View>
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.reloadButton} onPress={onReload}>
        <View style={styles.reloadIcon}>
          <Icon name="rotate-ccw" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#a73a3a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  backButton: {},
  backIcon: {},
  title: {
    justifyContent: 'center',
  },
  titleText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
  reloadButton: {},
  reloadIcon: {},
});

export default TopBarWithReload;
