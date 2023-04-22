import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import colors from '../theme/Colors';

const ToggleSwitch = ({value, setValue}) => {
  // const [value, setValue] = useState(false);

  const toggleSwitch = () => {
    if (setValue) {
      setValue(previousState => !previousState);
    }
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: colors.backGroundLightpink}}
        thumbColor={value ? colors.brand : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToggleSwitch;
