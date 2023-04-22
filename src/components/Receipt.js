import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../theme/Colors';
import TopBar from '../components/TopBar';
import ReceiptSummary from '../components/ReceiptSummary';
import OrderItem from '../components/OrderItem';
import Button1 from '../components/Button1';
const Receipt = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 45}}>
        <TopBar title="Biên nhận" onPress={() => navigation.goBack()} />
      </View>
      <ScrollView>
        <View style={styles.boxItem}>
          <ReceiptSummary />
        </View>
        <View style={{paddingTop: 10}}>
          <OrderItem />
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 10}]}>
        <View style={{height: 50}}>
          <Button1 title="Đánh Giá" />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  boxItem: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});

export default Receipt;
