import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import Button1 from '../components/Button1';
import colors from '../theme/Colors';
import PasswordInput from '../components/PassWordInput';
import ConfirmPasswordInput from '../components/ComfirmPasswordInput';

const ChangePasswordScreen = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 45}}>
          <TopBar title="Đổi Mật Khẩu" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.boxItem}>
          <View style={{}}>
            <PasswordInput
              title="Mật Khẩu Hiện Tại"
              password={currentPassword}
              setPassword={setCurrentPassword}
            />
          </View>
        </View>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View style={{}}>
            <PasswordInput
              title="Mật Khẩu Mới"
              password={newPassword}
              setPassword={setNewPassword}
            />
          </View>
        </View>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View style={{}}>
            <ConfirmPasswordInput
              title="Lặp Lại Mật Khẩu"
              password={newPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
            />
          </View>
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 10}]}>
        <View style={{height: 50}}>
          <Button1 title="Cập Nhật" fontSize={16} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  boxItem: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});

export default ChangePasswordScreen;
