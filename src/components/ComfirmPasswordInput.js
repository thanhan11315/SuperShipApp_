import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConfirmPasswordInput = ({
  confirmPassword,
  setConfirmPassword,
  password,
  title,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [borderWidth, setBorderWidth] = useState(1);
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);
  const [showMismatchError, setShowMismatchError] = useState(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleConfirmPasswordChange = text => {
    setConfirmPassword(text);
  };

  const handleFocus = () => {
    setBorderWidth(2);
  };

  const handleBlur = () => {
    setBorderWidth(1);
    setShowConfirmPasswordError(confirmPassword === '');
    console.log(password !== confirmPassword && confirmPassword !== '');
    setShowMismatchError(
      password !== confirmPassword && confirmPassword !== '',
    );
  };

  useEffect(() => {
    setShowMismatchError(
      password !== confirmPassword && confirmPassword !== '',
    );
  }, [password]);

  return (
    <View style={styles.container}>
      <View style={styles.containerLabel}>
        <Text style={styles.label}>{title}</Text>
      </View>
      <View style={[styles.inputContainer, {borderWidth}]}>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          onChangeText={handleConfirmPasswordChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={confirmPassword}
        />
        <Icon
          name={secureTextEntry ? 'eye-slash' : 'eye'}
          onPress={toggleSecureTextEntry}
          style={styles.rightIcon}
          size={25}
          color="#888"
        />
      </View>
      {showConfirmPasswordError && confirmPassword === '' && (
        <Text style={styles.errorText}>Vui lòng nhập lại mật khẩu</Text>
      )}
      {showMismatchError && (
        <Text style={styles.errorText}>Mật khẩu không khớp</Text>
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

export default ConfirmPasswordInput;
