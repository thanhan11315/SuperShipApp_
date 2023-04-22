import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import colors from '../theme/Colors';
import TopBar from '../components/TopBar';
import SelectButton from '../components/SelectButton';
import Button1 from '../components/Button1';
import InputText from '../components/InputText';
import TextArea from '../components/TextArea';

const UpdateInfoScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 50}}>
          <TopBar title="Mã đơn hàng" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Thu Hộ (Đồng)" />
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Tên Người Nhận" />
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Số Điện Thoại" />
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Số Nhà, Đường, Thôn, Ấp,..." />
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 50}}>
            <SelectButton placeholder="Quận/huyện" />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 50}}>
            <SelectButton placeholder="Phường/xã" />
          </View>
        </View>
        <View style={styles.boxItem}>
          <TextArea placeholder="Ghi Chú Khi Giao (Không Bắt Buộc)" />
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 12}]}>
        <View style={{height: 50}}>
          <Button1 title="Cập Nhật Thông Tin" />
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
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
});

export default UpdateInfoScreen;
