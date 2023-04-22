import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import Divider from '../components/Divider';

import colors from '../theme/Colors';

const ActivitiesScreen = ({navigation}) => {
  const value = [
    {
      title: 'Người Dùng',
      content: 'Support@SuperShip.vn',
      time: '2 phút trước',
    },
    {
      title: 'Đơn Hàng',
      content: '1900636152',
      time: '2 phút trước',
    },
    {
      title: 'Người Dùng',
      content: 'fb.com/SuperShip.vn',
      time: '2 phút trước',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 45}}>
        <TopBar title="Hoạt Động" onPress={() => navigation.goBack()} />
      </View>
      {value.map((value, key) => {
        return (
          <View key={key}>
            <Divider height={1} color={colors.colorBorderBottom} />
            <View
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: 16,
                paddingVertical: 12,
              }}>
              <Text
                style={{
                  color: colors.colorGray,
                  fontWeight: 'bold',
                  paddingBottom: 5,
                  fontSize: 16,
                }}>
                {value.title}
              </Text>
              <Text style={{color: colors.colorLightgray, paddingBottom: 5}}>
                {value.content}
              </Text>
              <Text style={{color: colors.brand}}>{value.time}</Text>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
});

export default ActivitiesScreen;
