import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../theme/Colors';
const Report = ({title, subtitle, liveText, titleColor = '#000'}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={[styles.titleText, {color: titleColor}]}>{title}</Text>
          <Text style={styles.subtitleText}>{subtitle.toUpperCase()}</Text>
        </View>
        {liveText && (
          <Text style={styles.liveText}>
            <Text style={{fontWeight: 'bold'}}>Live</Text>({liveText})
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 10,
    marginTop: 4,
    fontWeight: 'bold',
    color: colors.colorLightgray,
  },
  liveText: {
    fontSize: 12,
    color: colors.colorLightgray,
  },
});

export default Report;
