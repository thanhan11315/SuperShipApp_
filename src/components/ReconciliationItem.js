import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';

const ReconciliationItem = ({id, code, orders, amount, date}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('ReconciliationDetail')}>
      <View style={styles.row}>
        <Text style={styles.code}>
          {id} - {code}
        </Text>
        <Text style={styles.orders}>{orders} đơn</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.received}>Thực Nhận</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  code: {
    fontWeight: 'bold',
    color: colors.colorGray,
    fontSize: 16,
    paddingBottom: 5,
  },
  orders: {
    color: colors.colorLightgray,
  },
  received: {
    color: colors.colorGray,
    fontSize: 14,
  },
  amount: {
    color: colors.brand,
    fontWeight: 'bold',
  },
  date: {
    color: colors.brand,
  },
});

export default ReconciliationItem;
