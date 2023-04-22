import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import Button1 from '../components/Button1';
import colors from '../theme/Colors';
import SelectButton from '../components/SelectButton';
import InputNumber from '../components/InputNumber';
import InputText from '../components/InputText';

const AddBankCardsScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 45}}>
          <TopBar title="Thêm Thẻ" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton placeholder="Chọn Ngân Hàng" fontSize={16} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton placeholder="Chọn Tỉnh/Thành Phố" fontSize={16} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton placeholder="Chọn Chi Nhánh" fontSize={16} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <InputNumber placeholder="Số Tài Khoản" fontSize={16} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <InputText placeholder="Người Thụ Hưởng" fontSize={16} />
          </View>
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 10}]}>
        <View style={{height: 50}}>
          <Button1 title="Thêm Thẻ" fontSize={16} />
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

export default AddBankCardsScreen;
