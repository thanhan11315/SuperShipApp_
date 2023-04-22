import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, ScrollView} from 'react-native';
import AuthContext from '../contexts/AuthContext';
import ListItem from '../components/ListItem';
import TopBar from '../components/TopBar';
import CustomButton from '../components/CustomButton';
import UnderlinedButton from '../components/UnderlineButton';
import {listSettingScreen} from '../data/ListsData';

const SettingScreen = () => {
  const navigation = useNavigation();

  const {logout} = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <View style={{height: 100}}>
        <TopBar
          title="Cài Đặt"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.divider} />
        {listSettingScreen.map((value, key) => (
          <View key={key}>
            {!value.divider && (
              <View key={key}>
                <ListItem
                  icon={value.icon}
                  title={value.title}
                  note={value.note}
                  colorTitle={value.colorTitle}
                />
              </View>
            )}
            {value.divider && <View key={key} style={styles.divider} />}
          </View>
        ))}
        <CustomButton
          title="Đăng Xuất"
          onPress={() => {
            handleLogout();
          }}
        />
      </ScrollView>
      <View style={{paddingBottom: 20}}>
        <UnderlinedButton title="Xóa Tài Khoản" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAF3',
  },
  dividerTop: {
    backgroundColor: '#a73a3a',
    height: 60,
  },
  dividerWhite: {
    backgroundColor: '#fff',
    height: 20,
  },
  divider: {
    backgroundColor: '#E8EAF3',
    height: 10,
  },
  headerTextTop: {
    color: '#72808e',
    fontSize: 18,
  },
  headerTextBottom: {
    color: '#a73a3a',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default SettingScreen;
