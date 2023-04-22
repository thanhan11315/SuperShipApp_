import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import InputText from '../components/InputText';

import colors from '../theme/Colors';
import InputMe1 from '../components/InputMe1';
import SelectButton from '../components/SelectButton';
import ToggleSwitch from '../components/ToggleSwitch';
import Button1 from '../components/Button1';

const CreateWarehouseScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 45}}>
          <TopBar title="Tạo Kho Hàng" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <InputText
              placeholder="Tên Kho Hàng | Ví dụ: Kho Chính"
              fontSize={16}
            />
          </View>
        </View>
        <View style={styles.boxItem}>
          <InputMe1
            placeholder="Số Điện Thoại"
            fontSize={16}
            isPhoneNumber={true}
          />
        </View>
        <View style={styles.boxItem}>
          <Text
            style={{
              borderWidth: 1,
              borderColor: colors.brand,
              borderRadius: 5,
              padding: 12,
              backgroundColor: colors.backGroundLightpink,
              fontSize: 14,
              color: colors.colorLightgray,
            }}>
            sMan sẽ liên hệ số này khi lấy hàng, giao hàng, trả hàng,...
          </Text>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <InputText placeholder="Người Liên Hệ" fontSize={16} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <InputText
              placeholder="Số Nhà, Đường, Thôn, Ấp, Hẻm, Ngõ..."
              fontSize={16}
            />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton placeholder="Tỉnh/Thành Phố" />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton placeholder="Quận/Huyện" />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton placeholder="Phường/Xã" />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{color: colors.colorLightgray, fontSize: 16}}>
              {' '}
              Kho Mặc Định{' '}
            </Text>
            <View>
              <ToggleSwitch />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 10}]}>
        <View style={{height: 50}}>
          <Button1 title="Tạo Kho" fontSize={16} />
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

export default CreateWarehouseScreen;
