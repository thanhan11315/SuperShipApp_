import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import ItemWarehouses from '../components/ItemWarehouses';
import Button1 from '../components/Button1';
import colors from '../theme/Colors';
import ModalBotttom from '../components/ModalBottom';

const WarehouseScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const warehouse = [
    {
      code: 'WWWRV134989',
      address: '32 Thân Nhân Trung, p13, Quận Tân Bình, TPHCM',
    },
    {
      code: 'WWWRV134989',
      address: '32 Thân Nhân Trung, p13, Quận Tân Bình, TPHCM',
    },
    {
      code: 'WWWRV134989',
      address: '32 Thân Nhân Trung, p13, Quận Tân Bình, TPHCM',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 45}}>
          <TopBar title="Kho Hàng" onPress={() => navigation.goBack()} />
        </View>
        <View>
          {warehouse.map((value, key) => {
            return (
              <View key={key}>
                <ItemWarehouses
                  warehouse={value}
                  setVisibleModalBottom={setVisible}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 10}]}>
        <View style={{height: 50}}>
          <Button1
            title="Tạo Kho"
            fontSize={16}
            onPress={() => navigation.navigate('CreateWarehouse')}
          />
        </View>
      </View>
      <ModalBotttom visible={visible} setVisible={setVisible} />
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

export default WarehouseScreen;
