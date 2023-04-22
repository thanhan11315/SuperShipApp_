import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../theme/Colors';

const ListItem1 = ({title, colorTitle, onPress, quantity, note}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.listItem}>
          <Text
            style={[styles.listItemTitle, {color: colorTitle ?? colors.brand}]}>
            {title}
          </Text>
          <View style={styles.detailContainer}>
            <Text style={styles.quantityNote}>
              {quantity} {note}
            </Text>
            <Icon
              name="chevron-right"
              size={25}
              color={colors.colorLightgray}
            />
          </View>
        </View>
      </View>
      <View style={styles.divider}></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    minHeight: 48,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemTitle: {
    fontSize: 14,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityNote: {
    color: colors.colorLightgray,
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 8,
  },
  divider: {
    height: 1,
    backgroundColor: colors.backgroundScreen,
  },
});

export default ListItem1;
