import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import colors from '../theme/Colors';
import TopBar from '../components/TopBar';
import SelectButton from '../components/SelectButton';
import Button1 from '../components/Button1';
import InputText from '../components/InputText';
import TextArea from '../components/TextArea';

const CreateRequestScreen = ({navigation}) => {
  const [requestTitle, setRequestTitle] = useState('');
  const [requestDescription, setRequestDescription] = useState('');

  const handleCreateRequest = () => {
    // Thực hiện tạo yêu cầu ở đây
    console.log('Tiêu đề:', requestTitle);
    console.log('Mô tả:', requestDescription);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{height: 40}}>
          <TopBar title="Tạo yêu cầu" onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton
              placeholder="Chọn Danh Mục"
              fontSize={16}
              onPress={() => navigation.navigate('SelectCategory')}
            />
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={{height: 40}}>
            <SelectButton placeholder="Mã Đơn Hàng" fontSize={16} />
          </View>
        </View>
        <View style={styles.boxItem}>
          <InputText placeholder="Chủ Đề" fontSize={16} />
        </View>
        <View style={styles.boxItem}>
          <TextArea placeholder="nội dung" fontSize={16} />
        </View>
      </ScrollView>
      <View style={[styles.boxItem, {paddingBottom: 12}]}>
        <View style={{height: 40}}>
          <Button1 title="Tạo Yêu Cầu" />
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
  boxItem: {
    backgroundColor: colors.backgroundScreen,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
});

export default CreateRequestScreen;
