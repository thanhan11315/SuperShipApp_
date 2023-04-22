import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import Button1 from '../components/Button1';
import colors from '../theme/Colors';
import ModalBotttom from '../components/ModalBottom';
import InputText from '../components/InputText';
import TextArea from '../components/TextArea';

const CreateProductScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 45}}>
          <TopBar title="Tạo Sản Phẩm" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Mã sản phẩm" fontSize={16} />
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Tên Sản Phẩm" fontSize={16} />
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Giá sản phẩm(Đồng)" fontSize={16} />
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Khối Lượng (gram)" fontSize={16} />
        </View>
        <View style={styles.boxItem}>
          <TextArea placeholder="Mô Tả (Không Bắt Buộc)" />
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 10}]}>
        <View style={{height: 50}}>
          <Button1 title="Tạo Sản Phẩm" fontSize={16} />
        </View>
      </View>
      <ModalBotttom visible={visible} setVisible={setVisible} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  boxItem: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
});

export default CreateProductScreen;
