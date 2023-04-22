import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput, Alert} from 'react-native';

const InputNumberGram = ({fontSize = 18, label1, value, setValue, onBlur}) => {
  // const [value, setValue] = useState("");
  const [formattedValue, setformattedValue] = useState('');
  // State for managing input border width
  const [borderWidth, setBorderWidth] = useState(1);

  // Handle input change and validation
  const handleInputChange = inputValue => {
    // Xóa tất cả các dấu chấm ngăn cách hàng nghìn trong chuỗi
    const strippedValue = inputValue.replace(/\./g, '');
    // Chuyển giá trị nhập vào thành số dấu phẩy động
    const numericValue = parseFloat(strippedValue);
    if (numericValue || numericValue === 0) {
      setValue(numericValue); // Lưu giá trị số vào state
    } else {
      setValue('');
    }
  };

  // Handle input focus
  const handleFocus = () => {
    setBorderWidth(2);
  };

  // Handle input blur
  const handleBlur = () => {
    setBorderWidth(1);
    if (value === 0) {
      Alert.alert('Thông Báo', `${label1} không thể để bằng 0`);
      setValue('');
    }
    if (onBlur) {
      onBlur();
    }
  };

  // Format value for display
  useEffect(() => {
    setformattedValue(
      value === 0 ? '0' : value ? value.toLocaleString('vi-VN') : '',
    );
  }, [value]);

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="numeric"
        value={formattedValue}
        style={[styles.inputContainer, {borderWidth, fontSize}]}
        onChangeText={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
    height: '100%',
  },
  errorText: {
    position: 'absolute',
    bottom: -20,
    left: 8,
    color: 'red',
    fontSize: 14,
  },
});

export default InputNumberGram;
