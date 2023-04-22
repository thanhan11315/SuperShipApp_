import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import StatusLabel from './StatusLabel';
import colors from '../theme/Colors';
import Divider from './Divider';
import {useNavigation} from '@react-navigation/native';

const OrderItem = ({order, onPress}) => {
  const navigation = useNavigation();
  const onPressItem = () => {
    // onPress();
    navigation.navigate('OrderDetail');
  };
  return (
    <TouchableOpacity onPress={() => onPressItem()}>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <StatusLabel
              dotColor="green"
              labelText="Chờ lấy hàng"
              fontWeight="bold"
              color={colors.brand}
            />
            <View>
              <Text>
                <Text>#1 - </Text>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: colors.colorGray,
                  }}>
                  SGNS983262NT.810358915
                </Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', color: colors.colorLightgray}}>
              2.000 đ
            </Text>
          </View>
        </View>
      </View>
      <Divider height={1} color={colors.backgroundScreen} />
      <View style={styles.container}>
        <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
          <Text style={{color: colors.colorLightgray}}>0898999907-Ân</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}>
            <Text style={{color: colors.colorLightgray}}>
              32 Thân Nhân Trung,
            </Text>
            <Text style={{color: colors.colorLightgray}}> Phường 13,</Text>
            <Text style={{color: colors.colorLightgray}}>Quận Tân Bình,</Text>
            <Text style={{color: colors.colorLightgray}}>
              Thành phố Hồ Chí Minh
            </Text>
          </View>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', color: colors.colorLightgray}}>
            Tên Hàng
          </Text>
        </View>
      </View>
      <Divider height={10} color={colors.backgroundScreen} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    paddingVertical: 12,
  },
  orderNumber: {},
});

export default OrderItem;
