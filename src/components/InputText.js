import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const InputText = ({setValue, value, placeholder, fontSize = 18, onSubmit}) => {
  const [errorText, setErrorText] = useState('');
  const isMounted = useRef(false);
  // State for managing input border width
  const [borderWidth, setBorderWidth] = useState(1);

  // Handle password change and validation
  const handlePasswordChange = text => {
    if (setValue) {
      setValue(text);
    }
    if (text) {
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
      setErrorText(`Vui lòng nhập ${placeholder}`);
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
    <View style={styles.container}>
      <TextInput
        value={value}
        style={[styles.inputContainer, {borderWidth, fontSize}]} // Truyền fontSize vào style của TextInput ở đây
        onChangeText={handlePasswordChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
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
    paddingLeft: 10,
    borderColor: '#a73a3a',
    borderRadius: 5,
    height: 40,
  },
  errorText: {
    paddingLeft: 8,
    color: 'red',
    fontSize: 14,
  },
});

export default InputText;
