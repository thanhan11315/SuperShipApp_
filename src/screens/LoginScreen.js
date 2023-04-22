import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../assets/image/Logo.png';
import AppStyle from '../theme';
import Button1 from '../components/Button1';
import PasswordInput from '../components/PassWordInput';
import InputMe from '../components/InputMe';
import AuthContext from '../contexts/AuthContext';
import colors from '../theme/Colors';
const LoginScreen = () => {
  const navigation = useNavigation();
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidTk, setIsValidTK] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleLogin = () => {
    const result = login(email, password);
    if (result === 'success') {
      navigation.navigate('Home');
    } else if (isValidTk === false) {
      Alert.alert('Lỗi', 'Bạn nhập không phải email hoặc số điện Thoại');
    } else if (!isValidPassword) {
      Alert.alert('Lỗi', 'Bạn nhập không đúng định dạng mật khẩu');
    } else if (result === 'wrong_email') {
      Alert.alert('Lỗi', 'Tài khoản không tồn tại');
    } else if (result === 'wrong_password') {
      Alert.alert('Lỗi', 'Mật khẩu không chính xác');
    } else {
      Alert.alert('Lỗi', 'Đã xảy ra lỗi, vui lòng thử lại');
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.backgroundScreen,
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        {/* <View style={AppStyle.styleLogin.WelcomeBackBox}>
        <Text style={AppStyle.styleLogin.WelcomeBackText}> Welcome Back </Text>
      </View> */}
        <View style={{marginBottom: 30}}>
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
            paddingBottom: 20,
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
            paddingBottom: 15,
          }}>
          <PasswordInput
            setPassword={setPassword}
            title="Mật khẩu"
            password={password}
            setIsValid={setIsValidPassword}
          />
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            marginBottom: 10,
          }}>
          <View style={{marginBottom: 20, marginRight: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <Text style={AppStyle.styleLogin.text}>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', marginRight: 50, marginTop: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}>
              <Text style={AppStyle.styleLogin.text}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: 180, height: 47}}>
            <Button1 title="LOGIN" onPress={() => handleLogin()} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
