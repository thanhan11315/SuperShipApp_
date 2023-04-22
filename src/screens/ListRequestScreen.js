import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import colors from '../theme/Colors';
import TopBar from '../components/TopBar';
import Button1 from '../components/Button1';
import Divider from '../components/Divider';

const ListRequestScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 45}}>
        <TopBar title="Yêu Cầu" />
      </View>
      <ScrollView>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
            <View>
              <Text style={{color: colors.colorLightgray, paddingBottom: 5}}>
                #TSUIL463003
              </Text>
              <Text style={{color: colors.colorLightgray}}>Giao hàng gấp</Text>
              <Text style={{color: colors.brand}}>6 tháng trước</Text>
            </View>
            <Text style={{fontWeight: 'bold', color: colors.colorLightgray}}>
              Đã Đóng
            </Text>
          </View>
        </TouchableOpacity>
        <Divider height={10} />
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
            <View>
              <Text style={{color: colors.colorLightgray, paddingBottom: 5}}>
                #TSUIL463003
              </Text>
              <Text style={{color: colors.colorLightgray}}>Giao hàng gấp</Text>
              <Text style={{color: colors.brand}}>6 tháng trước</Text>
            </View>
            <Text style={{fontWeight: 'bold', color: colors.colorLightgray}}>
              Đã Đóng
            </Text>
          </View>
        </TouchableOpacity>
        <Divider height={10} />
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#fff',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 12,
            }}>
            <View>
              <Text style={{color: colors.colorLightgray, paddingBottom: 5}}>
                #TSUIL463003
              </Text>
              <Text style={{color: colors.colorLightgray}}>Giao hàng gấp</Text>
              <Text style={{color: colors.brand}}>6 tháng trước</Text>
            </View>
            <Text style={{fontWeight: 'bold', color: colors.colorLightgray}}>
              Đã Đóng
            </Text>
          </View>
        </TouchableOpacity>
        <Divider height={10} />
      </ScrollView>
      <View style={{paddingHorizontal: 16, paddingVertical: 12}}>
        <View style={{height: 50}}>
          <Button1
            title="Gửi Yêu Cầu"
            onPress={() => navigation.navigate('CreateRequest')}
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
});

export default ListRequestScreen;
