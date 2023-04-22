import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../theme/Colors';
import TopBar from '../components/TopBar';
import OrderSummary from '../components/OrderSummary';
import OrderItem from '../components/OrderItem';
const ReconciliationDetail = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={{height: 45}}>
          <TopBar
            title="Chi Tiết Đối Soát"
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={styles.sectionTitle}>Đối Soát</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <OrderSummary
            title="Tổng đơn"
            amount="1"
            orderIdLabel="Mã Đối Soát"
            orderId="A010423.S983262.EHCS"
          />
        </View>
        <Text style={styles.sectionTitle}>Phần Nhận</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View
            style={{
              backgroundColor: colors.backGroundLightpink,
              borderWidth: 1,
              borderColor: colors.brand,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              height: 80,
            }}>
            <Text style={{fontWeight: 'bold', color: colors.brand}}>
              -20.000 đ
            </Text>
            <Text style={{color: colors.brand, marginTop: 8}}>Thực Nhận</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Phần Thu</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={[
                styles.boxInfo,
                {marginRight: 10, flex: 2, marginBottom: 0},
              ]}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Thu Hộ</Text>
            </View>
            <View style={[styles.boxInfo, {marginRight: 10, marginBottom: 0}]}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Trả Trước</Text>
            </View>
            <View style={[styles.boxInfo, {marginBottom: 0}]}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Ưu đãi</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Phần Phí</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.boxInfo, {marginRight: 10}]}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Giao Hàng</Text>
            </View>
            <View style={styles.boxInfo}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Bảo Hiểm</Text>
            </View>
          </View>
        </View>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.boxInfo, {marginRight: 10}]}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Trả Hàng</Text>
            </View>
            <View style={styles.boxInfo}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Hàng Đổi</Text>
            </View>
          </View>
        </View>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.boxInfo, {marginRight: 10, marginBottom: 0}]}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Đổi Địa Chỉ</Text>
            </View>
            <View style={[styles.boxInfo, {marginBottom: 0}]}>
              <Text style={styles.titleInfo}>0 đ</Text>
              <Text style={styles.textInfo}>Ngân Hàng</Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Đơn Hàng</Text>
        <OrderItem />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundScreen,
  },
  sectionTitle: {
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.colorGray,
  },
  boxItem: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  boxInfo: {
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
  },
  titleInfo: {fontWeight: 'bold', color: colors.colorLightgray},
  textInfo: {color: colors.colorLightgray},
});

export default ReconciliationDetail;
