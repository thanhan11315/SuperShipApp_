import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/image/Logo.png';
import AppStyle from '../theme';
import Button1 from '../components/Button1';
import PasswordInput from '../components/PassWordInput';
import InputMe from '../components/InputMe';
import ConfirmPasswordInput from '../components/ComfirmPasswordInput';
import colors from '../theme/Colors';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isValidTK, setIsValidTK] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!isValidTK) {
      Alert.alert('Lỗi', 'Nhập Không phải email hoặc Số Điện Thoại');
    } else if (!isValidPassword) {
      Alert.alert('Lỗi', 'Nhập mật khẩu chưa đúng định dạng');
    } else if (password !== confirmPassword) {
      Alert.alert('Lỗi', 'Mật khẩu và xác nhận mật khẩu không khớp');
    } else {
      // Handle registration logic here
      Alert.alert('Thông báo', 'Đăng ký thành công');
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundScreen, flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{marginBottom: 35}}>
          <Image
            source={Logo}
            style={AppStyle.styleLogin.logo}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            width: '100%',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <InputMe
            setValue={setEmail}
            value={email}
            title="Email hoặc số điện thoại"
            isEmail={true}
            isPhoneNumber={true}
            setIsValid={setIsValidTK}
          />
        </View>
        <View
          style={{
            width: '100%',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <PasswordInput
            setPassword={setPassword}
            password={password}
            setIsValid={setIsValidPassword}
            title="Mật khẩu"
          />
        </View>
        <View
          style={{
            width: '100%',
            paddingLeft: 10,
            paddingRight: 10,
          }}>
          <ConfirmPasswordInput
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            password={password}
            title="Nhập lại mật khẩu"
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
          <View style={{flexDirection: 'row', marginRight: 50, marginTop: 20}}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={AppStyle.styleLogin.text}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 180, height: 47}}>
            <Button1 title="ĐĂNG KÝ" onPress={() => handleRegister()} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
