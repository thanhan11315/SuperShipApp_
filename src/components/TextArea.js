import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import colors from '../theme/Colors';

const TextArea = ({onChange, placeholder}) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <TextInput
      style={[
        styles.textArea,
        {
          borderColor: colors.brand,
          borderWidth: isFocused ? 2 : 1,
        },
      ]}
      onChangeText={value => {
        setText(value);
        if (onChange) {
          onChange(value);
        }
      }}
      value={text}
      multiline={true}
      numberOfLines={4}
      textAlignVertical="top"
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder ? placeholder : ''}
    />
  );
};

const styles = StyleSheet.create({
  textArea: {
    fontSize: 16,
    height: 65,
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
});

export default TextArea;
