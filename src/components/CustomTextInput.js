import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Colors';

const CustomTextInput = () => {
  const [text, setText] = useState('');
  const [height, setHeight] = useState(0);

  const handleSendMessage = () => {
    console.log('Message sent:', text);
    setHeight(40);
    setText('');
  };

  const handleChangeText = newText => {
    setText(newText);
  };

  const handleKeyPress = event => {
    if (event.nativeEvent.key === 'Enter' && !event.shiftKey) {
      handleSendMessage();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.textInput, {height: Math.min(65, height)}]} // 65 là chiều cao tương ứng với 2 dòng
        value={text}
        jgj
        onChangeText={handleChangeText}
        onContentSizeChange={event =>
          setHeight(event.nativeEvent.contentSize.height)
        }
        onKeyPress={handleKeyPress}
        multiline
        placeholder="Type your message..."
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
        <FontAwesome name="send" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 5,
    minHeight: 40, // Chiều cao tối thiểu là 1 dòng
    maxHeight: 65, // Chiều cao tối đa là 2 dòng
    marginVertical: 8,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: colors.brand,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTextInput;
