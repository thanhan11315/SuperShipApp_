import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text, SafeAreaView} from 'react-native';
import colors from '../theme/Colors';
import Button1 from '../components/Button1';
import Divider from '../components/Divider';
import SelectButton from '../components/SelectButton';
import ModalBottom1 from '../components/ModalBottom1';
import ReconciliationItem from '../components/ReconciliationItem';

const ReconciliationListScreen = ({navigation}) => {
  const [time, setTime] = useState('');
  const [visible, setVisible] = useState(false);
  const reconciliationData = [
    {
      id: 1,
      code: 'A010423.S983262.EHCS',
      orders: 1,
      amount: '- 20.000',
      date: '5 ngày trước',
    },
    {
      id: 2,
      code: 'A010424.S983263.EHCS',
      orders: 2,
      amount: '- 40.000',
      date: '4 ngày trước',
    },
  ];

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
          <Text style={styles.headerTitle}>ĐỐI SOÁT</Text>
          <View style={{height: 40, width: 150}}>
            <Button1
              fontSize={14}
              title="Lịch Đối Soát"
              onPress={() => navigation.navigate('ReconciliationCalendar')}
            />
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
            5 đối soát
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
        {reconciliationData.map(item => (
          <React.Fragment key={item.id}>
            <ReconciliationItem
              id={`#${item.id}`}
              code={item.code}
              orders={item.orders}
              amount={item.amount}
              date={item.date}
            />
            <Divider height={10} color={colors.backgroundScreen} />
          </React.Fragment>
        ))}
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

export default ReconciliationListScreen;
