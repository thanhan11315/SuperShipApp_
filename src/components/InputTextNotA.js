import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const InputTextNotA = ({setValue, value, placeholder, fontSize = 18}) => {
  // State for managing input border width
  const [borderWidth, setBorderWidth] = useState(1);

  // Handle password change and validation
  const handlePasswordChange = text => {
    if (setValue) {
      setValue(text);
    }
  };

  // Handle input focus
  const handleFocus = () => {
    setBorderWidth(2);
  };

  // Handle input blur
  const handleBlur = () => {
    setBorderWidth(1);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={[styles.inputContainer, {borderWidth, fontSize}]} // Truyền fontSize vào style của TextInput ở đây
        onChangeText={handlePasswordChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerLabel: {
    paddingLeft: 8,
  },
  label: {
    fontSize: 16,
    color: '#a73a3a',
    fontWeight: 400,
  },
  inputContainer: {
    paddingLeft: 10,
    borderColor: '#a73a3a',
    borderRadius: 5,
    height: 40,
  },
});

export default InputTextNotA;
