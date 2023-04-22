import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../theme/Colors';
import InputMe1 from '../components/InputMe1';
import InputText from '../components/InputText';

const OrderFilterScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const categories = [
    'Chờ Duyệt',
    'Chờ Lấy Hàng',
    'Đang Lấy Hàng',
    'Đã Lấy Hàng',
    'Hoãn Lấy Hàng',
    'Không Lấy Được',
    'Đang Nhập Kho',
    'Đã Nhập Kho',
    'Đang Chuyển Kho Giao',
    'Đã Chuyễn Kho Giao',
  ];

  const filterItems = (items, query) => {
    if (!query) return items;
    return items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const filteredCategories = filterItems(categories, search);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navTop}>
        <Text style={[styles.navTopText, styles.navTopTitle]}>
          Chọn Danh Mục
        </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.navTopText}>Đóng</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 16, paddingTop: 12}}>
        <InputText placeholder="Mã Đơn SuperShip" fontSize={16} />
      </View>
      <View style={{paddingHorizontal: 16, paddingTop: 12}}>
        <InputMe1
          placeholder="Số Điện Thoại"
          fontSize={16}
          isPhoneNumber={true}
        />
      </View>
      <View style={{paddingHorizontal: 16, paddingTop: 12}}>
        <InputText placeholder="Mã Đơn Của Shop" fontSize={16} />
      </View>
      <View style={{paddingHorizontal: 16, paddingTop: 12, paddingBottom: 12}}>
        <InputText placeholder="Địa Chỉ" fontSize={16} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingBottom: 12,
        }}>
        <View>
          <Text style={{color: colors.colorLightgray}}>Trạng Thái</Text>
          <Text style={{fontWeight: 'bold', color: colors.colorLightgray}}>
            Chưa Chọn
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              backgroundColor: '#fff',
              color: colors.colorLightgray,
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: colors.colorLightgray,
            }}>
            Xóa
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {filteredCategories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {
              // Thực hiện hành động khi người dùng chọn một danh mục
            }}>
            <Text style={styles.text}>{category}</Text>
          </TouchableOpacity>
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
  navTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#a73a3a',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  navTopText: {
    fontSize: 12,
    color: 'white',
  },
  navTopTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#a73a3a',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#fff',
  },
  searchInput: {
    width: '100%',
    height: '100%',
    fontSize: 16,
    paddingLeft: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderBottomColor: colors.backgroundScreen,
  },
  text: {
    fontSize: 16,
    color: colors.colorBlack,
  },
});

export default OrderFilterScreen;
