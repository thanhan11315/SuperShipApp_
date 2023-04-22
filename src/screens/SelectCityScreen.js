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

const SelectCityScreen = ({route, navigation}) => {
  const [search, setSearch] = useState('');
  const [borderWidth, setBorderWidth] = useState(1);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        'https://api.mysupership.vn/v1/partner/areas/province',
      );
      console.log('callCities');
      setCities(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredCities = filterItems(cities, search, 'name');

  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={isLoading} />
      <View style={styles.navTop}>
        <Text style={[styles.navTopText, styles.navTopTitle]}>
          Chọn khu vực
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CreateOrder')}>
          <Text style={styles.navTopText}>Đóng</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 16, paddingVertical: 12}}>
        <View style={[styles.searchInputContainer, {borderWidth}]}>
          <Icon name="search" size={18} color={colors.colorLightgray} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm thành phố..."
            onChangeText={setSearch}
            value={search}
            onFocus={() => setBorderWidth(2)}
            onBlur={() => setBorderWidth(1)}
          />
        </View>
      </View>
      <ScrollView>
        {filteredCities.map((city, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => {
              setCity(city.name);
              setCityCode(city.code);
              setDistrict('');
              setDistrictCode('');
              setCommune('');
              setCommuneCode('');
              navigation.navigate('SelectDistrict', {
                city: city.name,
                cityCode: city.code,
                setCity,
                setCityCode,
                setDistrict,
                setDistrictCode,
                setCommune,
                setCommuneCode,
              });
            }}>
            <Text style={styles.text}>{city.name}</Text>
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

export default SelectCityScreen;
