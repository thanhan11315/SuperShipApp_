import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../theme/Colors';
import TopBarWithReload from '../components/TopBarWithReload';
import Divider from '../components/Divider';
import Button1 from '../components/Button1';
import RecipientInformation from '../components/RecipientInformation';
import Modal1 from '../components/Modal1';

const OrderDetailScreen = ({route, navigation}) => {
  const [visible, setVisible] = useState(false);
  // const { order } = route.params;

  handleCancel = () => {
    setVisible(false);
  };

  handleConfirm = () => {
    setVisible(false);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleReload = () => {
    // Thực hiện hành động tải lại ở đây
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal1
        visible={visible}
        onPressCancel={() => handleCancel()}
        onPressConfirm={() => handleConfirm()}
      />
      <View style={{height: 50}}>
        <TopBarWithReload
          title="Chi Tiết Đơn Hàng"
          onPress={handleBackPress}
          onReload={handleReload}
        />
      </View>
      <ScrollView>
        <Text style={styles.sectionTitle}>Thông Tin Chung</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 5,
              borderColor: colors.brand,
              backgroundColor: colors.backGroundLightpink,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
            }}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18, color: colors.brand}}>
              Chờ Lấy Hàng
            </Text>
          </View>
        </View>
        <View style={styles.boxItem}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                padding: 8,
                borderWidth: 1,
                borderColor: colors.brand,
                borderRadius: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.brand}}>Thu Khách</Text>
              <Text style={{fontWeight: 'bold', color: colors.brand}}>
                2.000 đ
              </Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: colors.colorLightgray}}>Mã Đơn Hàng</Text>
              <Text style={{fontWeight: 'bold', color: colors.brand}}>
                SGNS983262NT.810358915
              </Text>
              <Text style={{color: colors.colorLightgray, paddingTop: 10}}>
                31-03-2023 19:39
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.boxItem}>
          <View
            style={{
              backgroundColor: colors.backgroundLightyellow,
              padding: 12,
              borderRadius: 5,
              alignItems: 'center',
            }}>
            <Text style={{color: colors.colorGray}}>
              Hãy cho những nhận xét và đánh giá chính xác nhất cho đơn hàng
              này!
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Rating')}>
              <View
                style={{
                  backgroundColor: colors.colorGreen,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 5,
                  paddingHorizontal: 20,
                  marginTop: 10,
                }}>
                <Text style={{color: '#fff'}}> Đánh Giá </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Người Nhận</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <RecipientInformation />
        </View>
        <Text style={styles.sectionTitle}>Ghi Chú</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: colors.brand,
            }}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <Text style={{color: colors.colorLightgray}}>
                (31-03 19:39) [S983262] SuperShip Test
              </Text>
              <Text style={{color: colors.colorLightgray}}>
                (SuperShip Test)
              </Text>
              <Text style={{color: colors.colorLightgray}}> đã Yêu Cầu</Text>
              <Text style={{color: colors.colorGray, fontWeight: 'bold'}}>
                Lấy Về Hàng Đổi/Trả
              </Text>
            </View>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Gói Hàng</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 5,
              marginBottom: 12,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingBottom: 5,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 16,
                  color: colors.colorGray,
                }}>
                Người Gửi
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: colors.brand,
                }}>
                Tốc Hành
              </Text>
            </View>
            <Divider height={2} color={colors.brand} />
            <Text style={{color: colors.colorLightgray}}>
              Không Cho Xem Hàng
            </Text>
            <Text style={{color: colors.colorGray, fontWeight: 'bold'}}>
              14219499515
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.boxInfo, {marginRight: 10}]}>
              <Text style={styles.titleInfo}>20.000 đ</Text>
              <Text style={styles.textInfo}>Phí Giao Hàng</Text>
            </View>
            <View style={styles.boxInfo}>
              <Text style={styles.titleInfo}>500 gr</Text>
              <Text style={styles.textInfo}>Khối Lượng</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.boxInfo, {marginRight: 10}]}>
              <Text style={styles.titleInfo}>20.000.000 đ</Text>
              <Text style={styles.textInfo}>Trị Giá Hàng</Text>
            </View>
            <View style={styles.boxInfo}>
              <Text style={styles.titleInfo}>100.000 đ</Text>
              <Text style={styles.textInfo}>Phí Bảo Hiểm</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={[styles.boxInfo, {marginRight: 10}]}>
              <Text style={styles.titleInfo}>10.000 đ</Text>
              <Text style={styles.textInfo}>Phí Hàng Đổi</Text>
            </View>
            <View style={styles.boxInfo}>
              <Text style={styles.titleInfo}> 0đ</Text>
              <Text style={styles.textInfo}>Phí Đổi Địa Chỉ</Text>
            </View>
          </View>
        </View>
        <Text style={[styles.sectionTitle, {paddingTop: 0}]}>Người Gửi</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 5,
            }}>
            <Text style={[styles.textInfo, {marginBottom: 5}]}>
              Kho Bàu Cát 1
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              <Text style={styles.textInfo}>Số 4/5, Đường Bàu Cát 1, </Text>
              <Text style={styles.textInfo}>Phường 14, </Text>
              <Text style={styles.textInfo}>Quận Tân Bình, </Text>
              <Text style={styles.textInfo}>Thành Phố Hồ Chí Minh</Text>
            </View>
            <Text style={[styles.textInfo, {marginTop: 5}]}>
              0898999907, SuperShip Test
            </Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Sản Phẩm</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 5,
            }}>
            <Text style={styles.textInfo}>Màng Hình Ti vi</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Hành Trình</Text>
        <View style={[styles.boxItem, {paddingTop: 0}]}>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 12,
              borderRadius: 5,
              paddingTop: 0,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
                paddingTop: 12,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.colorLightgray,
                  fontSize: 16,
                }}>
                Chờ Lấy Hàng
              </Text>
              <Text style={{color: colors.colorLightgray}}>32-03 19:39</Text>
            </View>
            <Text style={{color: colors.colorLightgray, paddingBottom: 10}}>
              Quận Tân Bình, Thành phố Hồ Chí Minh
            </Text>
            <Divider height={1} color={colors.colorLightgray} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
                paddingTop: 12,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: colors.colorLightgray,
                  fontSize: 16,
                }}>
                Chờ Lấy Hàng
              </Text>
              <Text style={{color: colors.colorLightgray}}>32-03 19:39</Text>
            </View>
            <Text style={{color: colors.colorLightgray, paddingBottom: 5}}>
              Quận Tân Bình, Thành phố Hồ Chí Minh
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {flexDirection: 'row', paddingBottom: 12}]}>
        <View style={{height: 50, flex: 6, marginRight: 12}}>
          <Button1
            title="Gửi Yêu Cầu"
            fontSize={16}
            onPress={() => navigation.navigate('CreateRequest')}
          />
        </View>
        <View style={{height: 50, flex: 2, marginRight: 6}}>
          <Button1
            title="Sửa"
            fontSize={16}
            backgroundColor="#fff"
            borderWidth={1}
            borderColor={colors.brand}
            color={colors.brand}
            onPress={() => navigation.navigate('UpdateInfo')}
          />
        </View>
        <View style={{height: 50, flex: 2, marginLeft: 6}}>
          <Button1
            title="Hủy"
            fontSize={16}
            backgroundColor="#fff"
            borderWidth={1}
            borderColor={colors.colorLightgray}
            color={colors.colorLightgray}
            onPress={() => setVisible(true)}
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
  sectionTitle: {
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.colorGray,
  },
  boxItem: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  boxInfo: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 5,
    flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
  },
  titleInfo: {fontWeight: 'bold', color: colors.colorLightgray},
  textInfo: {color: colors.colorLightgray},
});

export default OrderDetailScreen;
