import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const InputMe = ({
  setValue,
  value,
  title,
  isEmail,
  isPhoneNumber,
  setIsValid,
}) => {
  const [errorText, setErrorText] = useState('');

  // State for managing input border width
  const [borderWidth, setBorderWidth] = useState(1);

  // Function to validate email and phone number format
  const isValid = text => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneNumberRegex = /^\d{10}$/;
    if (setIsValid) {
      setIsValid(
        (isEmail && emailRegex.test(text)) ||
          (isPhoneNumber && phoneNumberRegex.test(text)),
      );
    }
    return (
      (isEmail && emailRegex.test(text)) ||
      (isPhoneNumber && phoneNumberRegex.test(text))
    );
  };

  // Handle password change and validation
  const handlePasswordChange = text => {
    if (setValue) {
      setValue(text);
    }
    if (text === '') {
      setErrorText(`Vui lòng nhập ${title}`);
    } else if (!isValid(text)) {
      setErrorText(
        `Bạn nhập không phải ${isEmail && 'email'} ${
          isEmail && isPhoneNumber && 'hoặc'
        } ${isPhoneNumber && 'số điện thoại'}`,
      );
    } else {
      setErrorText('');
    }
  };

  // Handle input focus
  const handleFocus = () => {
    setBorderWidth(2);
  };

  // Handle input blur
  const handleBlur = () => {
    setBorderWidth(1);
    if (value === '') {
      setErrorText(`Vui lòng nhập ${title}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <TextInput
        value={value}
        style={[styles.inputContainer, {borderWidth}]}
        onChangeText={handlePasswordChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {errorText !== '' && <Text style={styles.errorText}>{errorText}</Text>}
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
    backgroundColor: '#fff',
    borderColor: '#a73a3a',
    borderRadius: 10,
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
  },
  errorText: {
    paddingLeft: 8,
    color: 'red',
    fontSize: 14,
  },
});

export default InputMe;
