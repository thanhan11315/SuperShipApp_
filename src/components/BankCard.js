import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Divider from './Divider';
import Modal3 from './Modal3';
import colors from '../theme/Colors';

const BankCard = ({value}) => {
  const [visible, setVisible] = useState(false);
  const onPressCancel = () => {
    setVisible(false);
  };
  const onPressConfirm = () => {
    setVisible(false);
  };
  return (
    <TouchableOpacity style={{backgroundColor: '#fff'}}>
      <Modal3
        visible={visible}
        onPressCancel={onPressCancel}
        onPressConfirm={onPressConfirm}
      />
      <View style={styles.boxItem}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: colors.colorLightgray, fontSize: 12}}>
              CE9YI07213
            </Text>
            <Text style={{fontWeight: 'bold', color: colors.brand}}>
              SUPERSHIP TEST
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setVisible(true);
            }}>
            <Text
              style={{
                padding: 8,
                backgroundColor: colors.brand,
                borderRadius: 5,
                color: '#fff',
                fontSize: 12,
              }}>
              CHÍNH
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Divider height={1} color={colors.colorBorderBottom} />
      <View style={styles.boxItem}>
        <Text> 190319669988888 </Text>
        <Text> TCB - NHTMCP KY THUONG VIET NAM</Text>
        <Text> (TECHCOMBANK)</Text>
        <Text> NHTMPCP Ky Thuong VN CN HCM</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default BankCard;
