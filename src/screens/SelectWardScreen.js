import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {filterItems} from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Colors';
import axios from 'axios';
import LoadingOverlay from '../components/LoadingOverlay';

const SelectWardScreen = ({route, navigation}) => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [borderWidth, setBorderWidth] = useState(1);
  const [wards, setWards] = useState([]);
  const {
    city,
    cityCode,
    district,
    districtCode,
    commune,
    communeCode,
    setCity,
    setCityCode,
    setDistrict,
    setDistrictCode,
    setCommune,
    setCommuneCode,
  } = route.params;

  useEffect(() => {
    const fetchWards = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.mysupership.vn/v1/partner/areas/commune?district=${districtCode}`,
        );
        setWards(response.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWards();
  }, [districtCode]);

  const filteredWards = filterItems(wards, search, 'name');

  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={isLoading} />
      <View style={styles.navTop}>
        <Text style={[styles.navTopText, styles.navTopTitle]}>
          Chọn phường/xã
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateOrder')}>
          <Text style={styles.navTopText}>Đóng</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginRight: 40}}>
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 12,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SelectDistrict', {
                city,
                cityCode,
                district,
                districtCode,
                commune,
                communeCode,
                setCity,
                setCityCode,
                setDistrict,
                setDistrictCode,
                setCommune,
                setCommuneCode,
              })
            }
            style={{marginRight: 10}}>
            <Icon name="arrow-left" size={18} color={colors.brand} />
          </TouchableOpacity>
          <View style={[styles.searchInputContainer, {borderWidth}]}>
            <Icon name="search" size={18} color={colors.colorLightgray} />
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm phường/xã..."
              onChangeText={setSearch}
              value={search}
              onFocus={() => setBorderWidth(2)}
              onBlur={() => setBorderWidth(1)}
            />
          </View>
        </View>
      </View>
      <ScrollView>
        {filteredWards.map((ward, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {
              setCommune(ward.name);
              setCommuneCode(ward.code);
              navigation.navigate('CreateOrder');
            }}>
            <Text style={styles.text}>{ward.name}</Text>
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

export default SelectWardScreen;
