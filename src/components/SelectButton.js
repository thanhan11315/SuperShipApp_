import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../theme/Colors';
const SelectButton = ({
  onPress,
  fontSize = 18,
  placeholder = 'Chọn Tỉnh/Thành phố',
  color = colors.colorLightgray,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[{color}, {fontSize}]}>{placeholder}</Text>
      <Icon
        name="chevron-down"
        size={fontSize}
        color={colors.colorGray}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.brand,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: '100%',
  },
  icon: {
    marginLeft: 5,
  },
});

export default SelectButton;
