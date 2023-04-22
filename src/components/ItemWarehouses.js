import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../theme/Colors';
import Divider from './Divider';
const ItemWarehouses = ({warehouse, setVisibleModalBottom}) => {
  warehouse = warehouse ?? {
    code: 'WWWRV134989',
    address: '32 Thân Nhân Trung, p13, Quận Tân Bình, TPHCM',
  };
  const onSelect = warehouse => {
    console.log(warehouse);
  };
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => onSelect(warehouse)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flex: 12, paddingBottom: 5}}>
            <Text style={{color: colors.colorLightgray, fontSize: 12}}>
              {warehouse.code}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontWeight: 'bold', color: colors.colorGray}}>
                SuperShip Test
              </Text>
              <View
                style={{
                  marginLeft: 8,
                  width: 10,
                  height: 10,
                  borderRadius: 10,
                  backgroundColor: colors.brand,
                }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'stretch',
              flex: 3,
            }}
            onPress={() => {
              setVisibleModalBottom(true);
            }}>
            <FontAwesome name="ellipsis-h" size={22} color={colors.brand} />
          </TouchableOpacity>
        </View>
        <Divider height={1} color={colors.brand} />
        <Text
          style={{
            color: colors.colorLightgray,
            paddingVertical: 5,
            fontSize: 16,
          }}>
          {warehouse.address}
        </Text>
        <Text style={{color: colors.colorLightgray}}>
          0898999907, SuperShip Test
        </Text>
      </TouchableOpacity>
      <Divider height={10} backgroundColor={colors.backgroundScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default ItemWarehouses;
