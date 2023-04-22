import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PasswordInput = ({setPassword, password, title, setIsValid}) => {
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showPasswordLengthError, setShowPasswordLengthError] = useState(false);

  // State for toggling password visibility
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  // State for managing input border width
  const [borderWidth, setBorderWidth] = useState(1);

  useEffect(() => {
    if (setIsValid) {
      setIsValid(!showPasswordError && !showPasswordLengthError);
    }
  }, [showPasswordError, showPasswordLengthError]);

  // Toggle password visibility
  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  // Update the password state and log it
  const handlePasswordChange = text => {
    setPassword(text);
    setShowPasswordError(text === '');
    setShowPasswordLengthError(text.length < 8 && text !== '');
  };

  // Handle input focus
  const handleFocus = () => {
    setBorderWidth(2);
  };

  // Handle input blur
  const handleBlur = () => {
    setShowPasswordError(password === '');
    setShowPasswordLengthError(password.length < 8 && password !== '');
    setBorderWidth(1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <View style={[styles.inputContainer, {borderWidth}]}>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          onChangeText={handlePasswordChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={password}
        />
        <Icon
          name={secureTextEntry ? 'eye-slash' : 'eye'}
          onPress={toggleSecureTextEntry}
          style={styles.rightIcon}
          size={25}
          color="#888"
        />
      </View>
      {showPasswordError && password === '' && (
        <Text style={styles.errorText}>Vui lòng nhập mật khẩu</Text>
      )}
      {showPasswordLengthError && (
        <Text style={styles.errorText}>Mật khẩu phải có ít nhất 8 ký tự</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  containerLabel: {
    marginLeft: 8,
  },
  label: {
    fontSize: 16,
    color: '#a73a3a',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#a73a3a',
    borderRadius: 10,
    height: 50,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
  },
  rightIcon: {
    paddingRight: 10,
  },
  errorText: {
    paddingLeft: 8,
    color: 'red',
    fontSize: 14,
  },
});

export default PasswordInput;
