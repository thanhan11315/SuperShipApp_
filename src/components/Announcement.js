import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../theme/Colors';

const Announcement = ({title, content}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.brand,
  },
  contentText: {
    fontSize: 12,
    marginTop: 8,
    color: colors.colorLightgray,
  },
});

export default Announcement;
