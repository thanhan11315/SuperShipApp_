import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../theme/Colors';

const Check = ({label, isChecked = false, onToggle}) => {
  const [Checked, setChecked] = useState(false);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setChecked(!Checked);
        if (onToggle) {
          onToggle(!isChecked);
        }
      }}>
      <View style={styles.checked}>
        {isChecked && <View style={styles.innerCheck} />}
        {!isChecked && Checked && <View style={styles.innerCheck} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checked: {
    borderWidth: 3,
    borderColor: colors.brand,
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCheck: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: colors.brand,
  },
  label: {
    fontSize: 14,
    color: colors.colorLightgray,
  },
});

export default Check;
