import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Colors';

const SelectReconciliationCalendarScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [borderWidth, setBorderWidth] = useState(1);
  const Calendars = [
    'Tạo Đối Soát 3 lần/tuần vào Thứ 3, Thứ 5, Thứ 7',
    'Tạo Đối Soát 2 lần/tuần vào Thứ 5, Thứ 7',
    'Tạo Đối Soát 1 lần/tuần vào Thứ 7',
    'Tạo Đối Soát Hàng Ngày(Trừ Thứ 6, Chủ Nhật)',
  ];

  const filterItems = (items, query) => {
    if (!query) return items;
    return items.filter(item =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const filteredCalendars = filterItems(Calendars, search);

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
      <View style={{paddingHorizontal: 16, paddingVertical: 12}}>
        <View style={[styles.searchInputContainer, {borderWidth}]}>
          <Icon name="search" size={18} color={colors.colorLightgray} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm danh mục..."
            onChangeText={setSearch}
            value={search}
            onFocus={() => setBorderWidth(2)}
            onBlur={() => setBorderWidth(1)}
          />
        </View>
      </View>
      <ScrollView>
        {filteredCalendars.map((category, index) => (
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
    height: 45,
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

export default SelectReconciliationCalendarScreen;
