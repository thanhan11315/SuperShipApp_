import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import colors from '../theme/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import OrderItem from '../components/OrderItem';
import Button1 from '../components/Button1';
import SelectButton from '../components/SelectButton';
import ModalBottom1 from '../components/ModalBottom1';

const OrdersListScreen = ({navigation}) => {
  const [time, setTime] = useState('');
  const [visible, setVisible] = useState(false);
  const orders = [
    {
      id: 1,
      orderNumber: 'ORD123456',
      customerName: 'Nguyen Van A',
      totalAmount: 500000,
      orderStatus: 'Đang xử lý',
    },
    {
      id: 2,
      orderNumber: 'ORD123457',
      customerName: 'Tran Thi B',
      totalAmount: 400000,
      orderStatus: 'Đã giao hàng',
    },
  ];

  const handleOrderItem = () => {
    navigation.navigate('DetailScreen');
  };

  const handleSearchPress = () => {
    navigation.navigate('OrderFilter');
  };

  const getRange = range => {
    console.log('Start:', range.start.format('DD/MM/YYYY'));
    console.log('End:', range.end.format('DD/MM/YYYY'));
    setTime(
      range.start.format('DD/MM/YY') +
        ' ' +
        '-' +
        ' ' +
        range.end.format('DD/MM/YY'),
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: colors.backGroundLightpink}}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>ĐƠN HÀNG</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{height: 40, width: 150}}>
              <Button1
                fontSize={14}
                title="Tạo Đơn"
                onPress={() => navigation.navigate('CreateOrder')}
              />
            </View>
            <TouchableOpacity
              onPress={handleSearchPress}
              style={{
                backgroundColor: '#fff',
                height: 45,
                width: 45,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderRadius: 5,
                borderColor: colors.brand,
                marginLeft: 5,
              }}>
              <FontAwesome name="search" size={24} color={colors.brand} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 12,
          }}>
          <Text style={{fontWeight: 'bold', color: colors.colorGray}}>
            5 đơn hàng
          </Text>
          <View style={{height: 45}}>
            <SelectButton
              placeholder={time ? time : 'dd/mm/yy - dd/mm/yy'}
              fontSize={12}
              color={time ? colors.colorBlack : colors.colorLightgray}
              onPress={() => setVisible(true)}
            />
          </View>
          <ModalBottom1
            visible={visible}
            setVisible={setVisible}
            getRange={getRange}
          />
        </View>
      </View>
      <ScrollView>
        {orders.map((value, key) => {
          return (
            <View key={key}>
              <OrderItem order={value} onPress={() => handleOrderItem()} />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brand,
  },
});

export default OrdersListScreen;
