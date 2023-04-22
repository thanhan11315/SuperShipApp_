import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import Button1 from '../components/Button1';
import colors from '../theme/Colors';
import InputMe1 from '../components/InputMe1';
import InputText from '../components/InputText';
import SelectButton from '../components/SelectButton';
import DateOfBirthPicker from '../components/DatePicker';

const UpdateProfileInfoScreen = ({navigation}) => {
  const [dateOfBirth, setDateOfBirth] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 45}}>
          <TopBar title="Thông Tin Chung" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.boxItem}>
          <View style={{}}>
            <Text
              style={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: colors.brand,
                paddingHorizontal: 12,
                paddingVertical: 8,
                color: colors.colorLightgray,
              }}>
              SuperShip.test@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{}}>
            <InputMe1 placeholder="Số Điện Thoại" isPhoneNumber={true} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{}}>
            <InputText placeholder="Tên Công Ty/Tên Shop" fontSize={16} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton placeholder="Nam" fontSize={16} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <DateOfBirthPicker setDateOfBirth={setDateOfBirth} />
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

export default UpdateProfileInfoScreen;
