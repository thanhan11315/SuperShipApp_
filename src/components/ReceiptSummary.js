import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../theme/Colors';

const ReceiptSummary = ({
  status = 'Trả Hàng',
  dateLabel = '31-03-2023 19:39',
  userName = 'sMan Nguyễn Ngọc Nhi',
  totalOrders = 1,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#fff',
          padding: 12,
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
      ]}>
      <View
        style={[
          styles.innerContainer,
          {
            padding: 8,
            borderWidth: 1,
            borderColor: colors.brand,
            borderRadius: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <Text style={{color: colors.brand}}>Tổng Đơn</Text>
        <Text style={{fontWeight: 'bold', color: colors.brand}}>
          {totalOrders}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={{fontWeight: 'bold', color: colors.brand, fontSize: 16}}>
          {status}
        </Text>
        <Text style={{color: colors.colorLightgray}}>{userName}</Text>
        <Text style={{color: colors.colorLightgray, paddingTop: 10}}>
          {dateLabel}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  innerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
});

export default ReceiptSummary;
