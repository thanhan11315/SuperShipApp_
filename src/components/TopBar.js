import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const TopBar = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onPress}>
        <View style={styles.backIcon}>
          <Feather name="chevron-left" size={35} color="#fff" />
        </View>
      </TouchableOpacity>
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#a73a3a',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  backIcon: {
    padding: 5,
  },
  title: {
    justifyContent: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  titleText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default TopBar;
