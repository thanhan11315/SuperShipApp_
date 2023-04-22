import React, {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/Colors';

const SquareCheckBox = ({
  onChecked,
  label,
  isChecked,
  setIsChecked,
  onPress,
}) => {
  // const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    onPress();
    if (setIsChecked) {
      setIsChecked(!isChecked);
    }
    if (onChecked) {
      onChecked(!isChecked);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={handlePress}
        activeOpacity={0.8}>
        <View
          style={[
            styles.checkBox,
            {
              borderColor: colors.brand,
              backgroundColor: isChecked ? colors.brand : 'white',
            },
          ]}>
          {isChecked && <Icon name="check" size={20} color="white" />}
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.colorLightgray,
  },
});

export default SquareCheckBox;
