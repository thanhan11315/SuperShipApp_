import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const InputMe1 = ({
  setValue,
  value,
  isEmail,
  isPhoneNumber,
  setIsValid,
  placeholder,
  onSubmit,
}) => {
  const [errorText, setErrorText] = useState('');

  // State for managing input border width
  const [borderWidth, setBorderWidth] = useState(1);
  const isMounted = useRef(false);

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
      setErrorText(
        `Vui lòng nhập ${isEmail ? 'email' : ''}${
          isEmail && isPhoneNumber ? 'hoặc' : ''
        }${isPhoneNumber ? 'số điện thoại' : ''}`,
      );
    } else if (!isValid(text)) {
      setErrorText(
        `Bạn nhập không phải${isEmail ? 'email' : ''}${
          isEmail && isPhoneNumber ? 'hoặc' : ''
        } ${isPhoneNumber ? 'số điện thoại' : ''}`,
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
      setErrorText(
        `Vui lòng nhập ${isEmail ? 'email' : ''}${
          isEmail && isPhoneNumber ? 'hoặc' : ''
        }${isPhoneNumber ? 'số điện thoại' : ''}`,
      );
    } else if (!isValid(value)) {
      setErrorText(
        `Bạn nhập không phải${isEmail ? 'email' : ''}${
          isEmail && isPhoneNumber ? 'hoặc' : ''
        } ${isPhoneNumber ? 'số điện thoại' : ''}`,
      );
    } else {
      setErrorText('');
    }
  };

  useEffect(() => {
    if (isMounted.current) {
      handleBlur();
    } else {
      isMounted.current = true;
    }
  }, [onSubmit]);
  return (
    <View>
      <TextInput
        keyboardType={isPhoneNumber ? 'numeric' : 'default'}
        value={value}
        style={[styles.inputContainer, {borderWidth}]}
        onChangeText={handlePasswordChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {errorText !== '' && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  containerLabel: {
    paddingLeft: 8,
  },
  inputContainer: {
    backgroundColor: '#fff',
    height: 40,
    borderColor: '#a73a3a',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 16,
  },
  errorText: {
    paddingLeft: 8,
    color: 'red',
    fontSize: 14,
  },
});

export default InputMe1;
