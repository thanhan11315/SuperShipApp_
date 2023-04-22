import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Modal0 from './Modal0';

const InputNumber = ({
  fontSize = 18,
  label1,
  value,
  setValue,
  onBlur,
  placeholder,
}) => {
  // const [value, setValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
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
      setModalVisible(true);
    }
    if (onBlur) {
      onBlur();
    }
  };
  // Moldal confirm
  const handleCancel = () => {
    setValue('');
    setModalVisible(false);
  };
  //
  const handleConfirm = () => {
    console.log('cofirm');
    setValue(0);
    setModalVisible(false);
  };

  // Format value for display
  useEffect(() => {
    setformattedValue(
      value === 0 ? '0' : value ? value.toLocaleString('vi-VN') : '',
    );
  }, [value]);

  return (
    <View style={styles.container}>
      <Modal0
        visible={modalVisible}
        label1={label1}
        onPressCancel={() => handleCancel()}
        onPressConfirm={() => handleConfirm()}
      />
      <TextInput
        placeholder={placeholder}
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
    backgroundColor: '#fff',
  },
  errorText: {
    position: 'absolute',
    bottom: -20,
    left: 8,
    color: 'red',
    fontSize: 14,
  },
});

export default InputNumber;
