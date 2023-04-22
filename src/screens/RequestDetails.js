import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Colors';
import TopBar from '../components/TopBar';
import Divider from '../components/Divider';
import Comments from '../components/Comments';
import CustomTextInput from '../components/CustomTextInput';

const RequestDetails = ({navigation}) => {
  const comments = [
    {
      id: 1,
      name: 'Người gửi 1',
      time: '10 phút trước',
      content: 'Nội dung comment 1',
      isCurrentUser: false,
    },
    {
      id: 2,
      name: 'Người gửi 2',
      time: '5 phút trước',
      content: 'Nội dung comment 2',
      isCurrentUser: true,
    },
    {
      id: 3,
      name: 'Người gửi 2',
      time: '5 phút trước',
      content:
        'Nội dung comment 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
      isCurrentUser: true,
    },
    {
      id: 4,
      name: 'Người gửi 2',
      time: '5 phút trước',
      content: 'Nội dung comment 2',
      isCurrentUser: true,
    },
    {
      id: 5,
      name: 'Người gửi 2',
      time: '5 phút trước',
      content: 'Nội dung comment 2',
      isCurrentUser: true,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 45}}>
        <TopBar title="Chi Tiết Yêu Cầu" onPress={() => navigation.goBack()} />
      </View>
      <Divider height={10} color={colors.backgroundScreen} />
      <View
        style={{
          backgroundColor: '#fff',
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 8,
          }}>
          <View>
            <Text style={{color: colors.colorLightgray}}>#TSUIL463003</Text>
            <Text
              style={{
                fontWeight: 'bold',
                color: colors.colorGray,
                fontSize: 16,
              }}>
              Giao hàng gấp
            </Text>
          </View>
          <Text
            style={{
              fontWeight: 'bold',
              color: colors.colorGray,
              fontSize: 16,
            }}>
            Đã Đóng
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: colors.brand}}>11-10 10:03</Text>
          <Text style={{color: colors.colorLightgray}}>6 tháng trước</Text>
        </View>
        <View style={{paddingVertical: 8}}>
          <Divider height={3} color={colors.colorBorderBottom} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="file-text"
            size={20}
            color={colors.colorLightgray}
          />
          <Text
            style={{
              paddingLeft: 10,
              color: colors.brand,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}>
            SGNS983262NT.595050186
          </Text>
        </View>
      </View>
      <ScrollView>
        <Comments comments={comments} />
      </ScrollView>
      <CustomTextInput />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
});

export default RequestDetails;
