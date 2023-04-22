import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import colors from '../theme/Colors';

import {createOrder} from '../api';
import {getOrderPrice} from '../api';

import FlexibleInputRow from '../components/FlexibleInputRow';
import FlexibleInputRowGram from '../components/FlexibleInputRowGram';
import Button1 from '../components/Button1';
import Check from '../components/Check';
import InputText from '../components/InputText';
import SelectButton from '../components/SelectButton';
import ToggleSwitch from '../components/ToggleSwitch';
import TextArea from '../components/TextArea';
import SquareCheckBox from '../components/SquareCheckBox';
import Divider from '../components/Divider';
import WarehouseSelector from '../components/Warehouse';
import ListCheck from '../components/ListCheck';
import InputMe1 from '../components/InputMe1';
import InputTextNotA from '../components/InputTextNotA';
import LoadingOverlay from '../components/LoadingOverlay';

const CreateOrderScreen = ({route}) => {
  const navigation = useNavigation();
  // error
  const [displayErrorAdress, setDisplayErrorAdress] = useState(false);
  const [agreeError, setAgreeError] = useState(false);
  //Get value input
  const [city, setCity] = useState('');
  const [cityCode, setCityCode] = useState('');
  const [district, setDistrict] = useState('');
  const [districtCode, setDistrictCode] = useState('');
  const [commune, setCommune] = useState('');
  const [communeCode, setCommuneCode] = useState('');
  const [product, setProduct] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [value, setValue] = useState('');
  const [weight, setWeight] = useState(500);
  const [soc, setSoc] = useState(''); //
  const [note, setNote] = useState(''); //
  const [config, setConfig] = useState(3);
  const [barter, setBarter] = useState('');
  const [partner, setPartner] = useState(''); //
  const [agree, setAgree] = useState(false);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  //
  const [isLoading, setIsLoading] = useState(false);
  //
  const [onSubmit, setOnsubmit] = useState(false);
  const [orderPrice, setOrderPrice] = useState();
  const checkFormValidity = () => {
    return (
      selectedWarehouse &&
      product &&
      phoneNumber &&
      isValidPhoneNumber &&
      name &&
      address &&
      amount &&
      value &&
      weight &&
      config &&
      agree &&
      city &&
      cityCode &&
      district &&
      districtCode &&
      commune &&
      communeCode
    );
  };

  const resetValues = () => {
    setCity('');
    setCityCode('');
    setDistrict('');
    setDistrictCode('');
    setCommune('');
    setCommuneCode('');
    setProduct('');
    setPhoneNumber('');
    setName('');
    setAddress('');
    setAmount('');
    setValue('');
    setWeight('');
    setSoc('');
    setNote('');
    setConfig(3);
    setBarter(false);
    setPartner('');
    setAgree(false);
  };

  //API

  const dataAPI = () => {
    if (selectedWarehouse) {
      const data = {
        pickup_code: selectedWarehouse.code || '',
        pickup_phone: '0898999907',
        pickup_address: selectedWarehouse.address || '',
        pickup_province: selectedWarehouse.province_name || '',
        pickup_district: selectedWarehouse.district_name || '',
        pickup_commune: selectedWarehouse.commune_name || '',
        pickup_name: selectedWarehouse.name || '',
        name: name,
        phone: phoneNumber,
        address: address,
        province: city,
        district: district,
        commune: commune,
        amount: amount,
        value: value,
        weight: weight,
        soc: soc,
        note: note,
        payer: '1',
        service: '1',
        config: config.toString(),
        product_type: '1',
        product: product,
        barter: barter ? 1 : 0,
        partner: partner,
      };
      return data;
    }
    return {};
  };

  const handlePressCreate = async () => {
    console.log(dataAPI);
    resetValues();
    setOnsubmit(!onSubmit);
    setAgreeError(true);
    setDisplayErrorAdress(true);
    if (checkFormValidity()) {
      setIsLoading(true);
      const success = await createOrder(dataAPI());
      setIsLoading(false);
      if (success === 'Success') {
        resetValues();
        Alert.alert('Thông báo', 'Tạo Đơn Thành Công');
      } else {
        Alert.alert(
          'Lỗi',
          'Vui lòng nhập đúng tất cả các thông tin rồi thử lại',
        );
      }
    } else {
      Alert.alert(
        'Lỗi',
        'Vui lòng nhập tất cả thông tin có chú thích yêu cầu nhập',
      );
    }
  };

  useEffect(() => {
    if (selectedWarehouse && city && district && weight && value) {
      const fetchPrice = async () => {
        const priceData = await getOrderPrice(
          selectedWarehouse.province_name,
          selectedWarehouse.district_name,
          city,
          district,
          weight,
          value,
        );
        if (priceData) {
          setOrderPrice(priceData.results[0]);
        }
      };
      fetchPrice();
    }
  }, [selectedWarehouse, district, weight, value]);

  // Add useState hooks for handling form data
  // Example: const [phoneNumber, setPhoneNumber] = useState('');

  //API

  //

  return (
    <SafeAreaView style={styles.container}>
      <LoadingOverlay visible={isLoading} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.topBarText}>Đóng</Text>
            </TouchableOpacity>
            <Text style={styles.topBarTitle}>Tạo Đơn hàng</Text>
            <TouchableOpacity onPress={() => handlePressCreate()}>
              <Text style={styles.topBarText}>Tạo</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionTitle}>Kho hàng</Text>
          <WarehouseSelector
            selectedWarehouse={selectedWarehouse}
            setSelectedWarehouse={setSelectedWarehouse}
          />
          <Text style={styles.sectionTitle}>Sản phẩm</Text>
          <View style={{backgroundColor: '#fff'}}>
            <View style={{paddingTop: 12, paddingHorizontal: 16}}>
              <Check label="Nhập thủ công" isChecked={true} />
            </View>
            <View style={{marginTop: 12, marginBottom: 12}}>
              <View style={styles.input}>
                <InputText
                  placeholder="Nhập tên sản phẩm"
                  fontSize={16}
                  value={product}
                  setValue={setProduct}
                  onSubmit={onSubmit}
                />
              </View>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Người nhận</Text>
          <View style={{paddingTop: 12, backgroundColor: '#fff'}}>
            <View style={{paddingHorizontal: 16}}>
              <InputMe1
                placeholder="Số điện thoại"
                isPhoneNumber={true}
                value={phoneNumber}
                setValue={setPhoneNumber}
                onSubmit={onSubmit}
                setIsValid={setIsValidPhoneNumber}
              />
            </View>
          </View>
          <View style={{paddingTop: 12, backgroundColor: '#fff'}}>
            <View style={styles.input}>
              <InputText
                placeholder="Tên người nhận"
                fontSize={16}
                value={name}
                setValue={setName}
                onSubmit={onSubmit}
              />
            </View>
          </View>
          <View style={{paddingTop: 12, backgroundColor: '#fff'}}>
            <View style={styles.input}>
              <InputText
                placeholder="Số nhà, Đường, Thôn, Ấp"
                fontSize={16}
                value={address}
                setValue={setAddress}
                onSubmit={onSubmit}
              />
            </View>
          </View>
          <View style={{paddingTop: 12, backgroundColor: '#fff'}}>
            <View style={[styles.input, {height: 40}]}>
              <SelectButton
                placeholder={city || 'Chọn Tỉnh/Thành Phố'}
                fontSize={16}
                color={city ? colors.colorBlack : colors.colorLightgray}
                onPress={() => {
                  setDisplayErrorAdress(true);
                  navigation.navigate('SelectCity', {
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
                  });
                }}
              />
            </View>
            {displayErrorAdress && !city && (
              <View style={styles.input}>
                <Text style={styles.errorText}>
                  Vui lòng chọn Tỉnh/Thành Phố{' '}
                </Text>
              </View>
            )}
          </View>
          <View style={{paddingTop: 12, backgroundColor: '#fff'}}>
            <View style={[styles.input, {height: 40}]}>
              <SelectButton
                placeholder={district || 'Chọn Quận/Huyện'}
                fontSize={16}
                color={district ? colors.colorBlack : colors.colorLightgray}
                onPress={() => {
                  if (city && cityCode) {
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
                    });
                  } else {
                    Alert.alert('Lỗi', 'Vui lòng chọn Tỉnh/Thành phố trước.');
                  }
                }}
              />
            </View>
            {displayErrorAdress && !district && (
              <View style={styles.input}>
                <Text style={styles.errorText}>Vui lòng chọn Quận/Huyện </Text>
              </View>
            )}
          </View>
          <View style={{paddingTop: 12, backgroundColor: '#fff'}}>
            <View style={[styles.input, {height: 40}]}>
              <SelectButton
                placeholder={commune || 'Chọn Phường/Xã'}
                fontSize={16}
                color={commune ? colors.colorBlack : colors.colorLightgray}
                onPress={() => {
                  if (district && districtCode) {
                    navigation.navigate('SelectWard', {
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
                    });
                  } else {
                    Alert.alert('Lỗi', 'Vui lòng chọn Quận/Huyện trước');
                  }
                }}
              />
            </View>
            {displayErrorAdress && !commune && (
              <View style={styles.input}>
                <Text style={styles.errorText}>Vui lòng chọn Phường/Xã </Text>
              </View>
            )}
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 12,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                backgroundColor: colors.backGroundLightpink,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: colors.brand,
                paddingHorizontal: 10,
                paddingVertical: 12,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{color: colors.colorLightgray, fontSize: 12}}>
                    Dự Kiến Lấy Hàng:{' '}
                  </Text>
                </View>
                <View>
                  <Text style={{color: colors.colorBlack, fontSize: 12}}>
                    {orderPrice && orderPrice.pickup?.name}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 12,
                }}>
                <View>
                  <Text style={{color: colors.colorLightgray, fontSize: 12}}>
                    Dự Kiến Giao Hàng:{' '}
                  </Text>
                </View>
                <View>
                  <Text style={{color: colors.colorBlack, fontSize: 12}}>
                    {orderPrice && orderPrice.delivery?.name}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Gói hàng</Text>
          <View style={styles.boxItem}>
            <FlexibleInputRow
              label1="Phí Giao Hàng"
              label4={
                orderPrice
                  ? orderPrice.fee.toLocaleString('vi-VN') + ' đ'
                  : '0đ'
              }
            />
          </View>
          <View style={styles.boxItem}>
            <FlexibleInputRow
              label1="Người Trả Phí"
              showIcon={true}
              label3="Shop trả"
              onSubmit={onSubmit}
            />
          </View>
          <View style={styles.boxItem}>
            <FlexibleInputRow
              label1="Thu hộ"
              label2="ĐVT: đồng"
              showInput={true}
              label3="Tiền Thu Khách"
              label4={amount ? amount.toLocaleString('vi-VN') + ' đ' : '0đ'}
              value={amount}
              setValue={setAmount}
              onSubmit={onSubmit}
            />
          </View>
          <View style={styles.boxItem}>
            <FlexibleInputRow
              label1="Trị Giá Hàng"
              label2="ĐVT: đồng"
              showInput={true}
              label3="Phí Bảo Hiểm"
              label4={
                orderPrice
                  ? orderPrice.insurance.toLocaleString('vi-VN') + ' đ'
                  : '0đ'
              }
              value={value}
              setValue={setValue}
              onSubmit={onSubmit}
            />
          </View>
          <View style={styles.boxItem}>
            <FlexibleInputRowGram
              label1="Khối Lượng"
              label2="ĐVT: gram"
              showInput={true}
              value={weight}
              setValue={setWeight}
              onSubmit={onSubmit}
            />
          </View>
          <View style={styles.boxItem}>
            <View>
              {/* <InputTextNotA
              placeholder="Mã Đơn Của Shop (Không Bắt Buộc)"
              fontSize={16}
              value={soc}
              setValue={setSoc}
            /> */}
            </View>
          </View>
          <View style={[styles.boxItem, {paddingBottom: 0}]}>
            <Text
              style={{
                backgroundColor: colors.backgroundLightyellow,
                borderRadius: 5,
                paddingHorizontal: 12,
                paddingVertical: 10,
              }}>
              Nhấn chọn vào Đổi/Lấy hàng về nếu muốn SupperShip thu về hàng đổi.
              Sau đó ghi chú vào ô Ghi Chú Khi Giao, ví dụ: "Đổi về 2 áo", Nếu
              không chọn vào ô này, bạn có thể sẽ không nhận được hàng đổi về.
            </Text>
          </View>
          <View style={[styles.boxItem, {paddingTop: 0}]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{color: colors.colorLightgray, fontSize: 16}}>
                  Đổi/Lấy Hàng Về
                </Text>
              </View>
              <View>
                <ToggleSwitch value={barter} setValue={setBarter} />
              </View>
            </View>
            {barter && (
              <Text
                style={{
                  textAlign: 'right',
                  backgroundColor: '#fff',
                  paddingBottom: 12,
                }}>
                Phí Đổi Hàng{' '}
                <Text style={{fontWeight: 'bold', color: colors.brand}}>
                  10.000 đ
                </Text>
              </Text>
            )}
          </View>
          <View style={[styles.boxItem, {paddingTop: 0, paddingBottom: 12}]}>
            <TextArea
              placeholder="Ghi Chú Khi Giao (Không Bắt Buộc)"
              onChange={Text => setNote(Text)}
            />
          </View>
          <Text style={styles.sectionTitle}>Khuyến Mãi</Text>
          <View style={[styles.boxItem, {paddingBottom: 16}]}>
            <View style={{height: 40}}>
              <InputTextNotA
                placeholder="Mã Khuyến Mãi (Không Bắt Buộc)"
                fontSize={16}
                value={partner}
                setValue={setPartner}
              />
            </View>
          </View>
          <Text style={styles.sectionTitle}>Cấu Hình</Text>
          <ListCheck value={config} setValue={setConfig} />
          <Text style={styles.sectionTitle}>Điều Khoản Dịch Vụ</Text>
          <View style={[styles.boxItem, {paddingBottom: 12}]}>
            <SquareCheckBox
              label="Tôi đồng ý với Điều Khoản Dịch Vụ của SuperShip"
              isChecked={agree}
              setIsChecked={setAgree}
              onPress={() => setAgreeError(true)}
            />
            {agreeError && !agree && (
              <Text style={styles.errorText}>
                Vui lòng chọn đồng ý với điều khoản
              </Text>
            )}
          </View>
          <Divider height={10} />
        </ScrollView>
        <View>
          <View
            style={{
              backgroundColor: '#fff',
              paddingBottom: 20,
              borderTopWidth: 1,
              borderTopColor: colors.colorLightgray,
            }}>
            <View
              style={[
                styles.boxItem,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              ]}>
              <Text style={{fontWeight: 'bold', color: colors.colorLightgray}}>
                Phí Giao Hàng
              </Text>
              <Text style={{color: colors.colorLightgray}}>
                {orderPrice
                  ? orderPrice.fee.toLocaleString('vi-VN') + ' đ'
                  : '0đ'}
              </Text>
            </View>
            <View
              style={[
                styles.boxItem,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 16,
                },
              ]}>
              <Text style={{color: colors.colorLightgray}}>Tổng Phí</Text>
              <Text style={{fontWeight: 'bold', color: colors.colorLightgray}}>
                {orderPrice
                  ? (
                      orderPrice.fee +
                      orderPrice.insurance +
                      (barter ? 10000 : 0)
                    ).toLocaleString('vi-VN') + ' đ'
                  : '0đ'}
              </Text>
            </View>
            <View style={{height: 40, paddingHorizontal: 16}}>
              <Button1
                title="Tạo Đơn"
                fontSize={16}
                onPress={() => handlePressCreate()}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAF3',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#a73a3a',
  },
  topBarText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  topBarTitle: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sectionTitle: {
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.colorGray,
  },

  changeWarehouse: {
    color: '#a73a3a',
    fontSize: 14,
  },
  manualEntry: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#E8EAF3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  dateBox: {
    backgroundColor: '#FFEBEE',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 10,
  },
  dateText: {
    color: '#a73a3a',
    fontSize: 16,
    marginBottom: 4,
  },
  boxItem: {
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  errorText: {
    paddingLeft: 8,
    color: 'red',
    fontSize: 14,
  },
});

export default CreateOrderScreen;
