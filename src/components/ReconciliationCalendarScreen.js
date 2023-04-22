import React from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../theme/Colors';
import Button1 from '../components/Button1';
import Divider from '../components/Divider';
import TopBar from '../components/TopBar';

const ReconciliationCalendarScreen = ({navigation}) => {
  const values = [
    {
      content: 'Số Đơn',
      value: '0',
    },
    {
      content: 'Tiền Thu Hộ',
      value: '0đ',
    },
    {
      content: 'Phí Giao Hàng',
      value: '0đ',
    },
    {
      content: 'Phí Bảo Hiểm',
      value: '0đ',
    },
    {
      content: 'Phí Chuyển Hoàn',
      value: '0đ',
    },
    {
      content: 'Phí Hàng Đổi',
      value: '0đ',
    },
    {
      content: 'Phí Đổi Địa Chỉ',
      value: '0đ',
    },
    {
      content: 'Khuyến Mãi',
      value: '0',
    },
    {
      content: 'Chuyển Khoản',
      value: '3.300đ',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 45}}>
        <TopBar title="Lịch Đối Soát" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <View style={{paddingHorizontal: 16, paddingVertical: 12}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.colorGray,
            }}>
            Lịch Đối Soát
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', backgroundColor: '#fff', padding: 12}}>
          <View style={{flex: 3}}>
            <Text style={{color: colors.colorLightgray}}>
              Tạo Đối Soát Hàng Ngày(Trừ Thứ 6, Chủ Nhật )
            </Text>
          </View>
          <View style={{flex: 1, height: 35}}>
            <Button1
              title="Đổi Lịch"
              fontSize={12}
              onPress={() =>
                navigation.navigate('SelectReconciliationCalendar')
              }
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 16, paddingVertical: 12}}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: colors.brand,
            }}>
            Đối Soát Sắp Tới
          </Text>
        </View>
        <View style={{backgroundColor: '#fff', padding: 12}}>
          {values.map((value, key) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 12,
                }}
                key={key}>
                <Text style={{color: colors.colorLightgray}}>
                  {value.content}
                </Text>
                <Text style={{fontWeight: 'bold', color: colors.colorGray}}>
                  {value.value}
                </Text>
              </View>
            );
          })}
          <View style={{paddingTop: 10}}></View>
          <Divider height={5} color={colors.colorBorderBottom} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: colors.colorLightgray,
              }}>
              Số Tiền Đối Soát
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: colors.brand,
              }}>
              0đ
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: 16, paddingVertical: 12}}>
        <View style={{height: 45}}>
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
});

export default ReconciliationCalendarScreen;
