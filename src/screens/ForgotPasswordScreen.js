import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  Alert,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/image/Logo.png';
import AppStyle from '../theme';
import Button1 from '../components/Button1';
import InputMe from '../components/InputMe';
import colors from '../theme/Colors';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isValidTK, setIsValidTK] = useState(false);

  const handleResetPassword = () => {
    // Thực hiện xử lý quên mật khẩu tại đây, ví dụ gửi email reset mật khẩu
    // Sau khi thực hiện xong, hiển thị thông báo cho người dùng
    if (!isValidTK) {
      Alert.alert('Lỗi', 'Bạn nhập không đúng mail hoặc số điện thoại');
    } else {
      Alert.alert(
        'Thành công',
        'Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn.',
      );
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: colors.backgroundScreen, flex: 1}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1, justifyContent: 'space-between'}}>
        <View
          style={{
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{marginBottom: 60}}>
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
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{width: 180, height: 47}}>
              <Button1 title="Gửi" onPress={handleResetPassword} />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
            marginTop: 20,
            marginBottom: 40,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={AppStyle.styleLogin.text}>Đăng Nhập</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
