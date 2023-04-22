import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import Button1 from '../components/Button1';
import colors from '../theme/Colors';
import ModalBotttom from '../components/ModalBottom';
import Divider from '../components/Divider';
import ItemProduct from '../components/ItemProduct';

const ProductScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 45}}>
          <TopBar title="Sản Phẩm" onPress={() => navigation.goBack()} />
        </View>
        <View style={[styles.boxItem, {backgroundColor: '#fff'}]}>
          <ItemProduct />
        </View>
        <Divider height={10} />
        <View style={[styles.boxItem, {backgroundColor: '#fff'}]}>
          <ItemProduct />
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 10}]}>
        <View style={{height: 50}}>
          <Button1
            title="Tạo Sản Phẩm"
            fontSize={16}
            onPress={() => navigation.navigate('CreateProduct')}
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

export default ProductScreen;
