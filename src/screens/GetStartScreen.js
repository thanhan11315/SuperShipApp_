import React from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import colors from '../theme/Colors';
import {listGetStartScreen} from '../data/ListsData';
import HeaderGetStart from '../components/HeaderGetStart';
import Divider from '../components/Divider';
import ListItem1 from '../components/ListItem1';
import Announcement from '../components/Announcement';
import Report from '../components/Report';
import StatusLabel from '../components/StatusLabel';

const GetStartScreen = () => {
  const navigation = useNavigation();
  const handleListItem = () => {
    navigation.navigate('OrderList');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderGetStart
          welcomeText="Xin chào, SUPERSHIP!"
          descriptionText="Sự hài lòng của khách hàng là mục đích mà SuperShip theo đuổi"
          buttonText="Tạo Đơn Hàng"
          onPress={() => {
            navigation.navigate('CreateOrder');
          }}
        />
        <Divider color={colors.backgroundScreen} height={20} />
        <Divider color={colors.brand} height={2} />
        <Announcement
          title="Thông Báo"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse."
        />
        <Report
          title="BÁO CÁO VẬN HÀNH"
          titleColor={colors.brand}
          subtitle="Hôm nay, 18/03/2023"
          liveText="cập nhật 15:27"
        />

        {listGetStartScreen.map((value, key) => {
          return (
            <View key={key}>
              <ListItem1
                title={value.title}
                colorTitle={value.colorTitle}
                quantity={value.quantity}
                note={value.note}
                onPress={() => handleListItem()}
              />
            </View>
          );
        })}
        <Report
          title="BÁO CÁO Số Lượng"
          titleColor={colors.brand}
          subtitle="từ ngày 13/03/2023 Đến 18/03/2023"
          liveText="cập nhật 15:27"
        />
        <View style={styles.statusLabelsContainer}>
          <StatusLabel dotColor="#a73a3a" labelText="Phát Sinh" />
          <StatusLabel dotColor="#00a100" labelText="Đã Lấy" />
          <StatusLabel dotColor="#0076d5" labelText="Đã Giao" />
          <StatusLabel dotColor="#a765a9" labelText="Đã Trả" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  statusLabelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default GetStartScreen;
