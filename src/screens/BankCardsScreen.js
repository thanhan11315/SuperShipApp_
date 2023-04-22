import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import Button1 from '../components/Button1';
import colors from '../theme/Colors';
import Divider from '../components/Divider';
import BankCard from '../components/BankCard';

const BankCardsScreen = ({navigation}) => {
  const bankCards = [
    {
      bankName: 'Bank A',
      cardNumber: '**** **** **** 1234',
      cardHolder: 'John Doe',
      expiryDate: '12/25',
    },
    {
      bankName: 'Bank B',
      cardNumber: '**** **** **** 5678',
      cardHolder: 'Jane Doe',
      expiryDate: '08/24',
    },
    // Add more bank cards here
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 45}}>
          <TopBar title="Thẻ Ngân Hàng" onPress={() => navigation.goBack()} />
        </View>
        {bankCards.map((bankCard, key) => {
          return (
            <View key={key}>
              <BankCard value={bankCard} />
              <Divider height={10} color={colors.backgroundScreen} />
            </View>
          );
        })}
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 10}]}>
        <View style={{height: 50}}>
          <Button1
            title="Thêm Thẻ"
            fontSize={16}
            onPress={() => navigation.navigate('AddBankCards')}
          />
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
  boxItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});

export default BankCardsScreen;
