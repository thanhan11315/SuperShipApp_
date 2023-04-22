import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopBar from '../components/TopBar';
import Divider from '../components/Divider';

import colors from '../theme/Colors';

const ContactInfoScreen = ({navigation}) => {
  const value = [
    {
      title: 'Email',
      content: 'Support@SuperShip.vn',
    },
    {
      title: 'Hotline',
      content: '1900636152',
    },
    {
      title: 'Facebook',
      content: 'fb.com/SuperShip.vn',
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{height: 45}}>
        <TopBar title="Liên Hệ" onPress={() => navigation.goBack()} />
      </View>
      {value.map((value, key) => {
        return (
          <View key={key}>
            <Divider height={10} color={colors.backgroundScreen} />
            <View
              style={{
                backgroundColor: '#fff',
                flexDirection: 'row',
                paddingHorizontal: 16,
                paddingVertical: 12,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: colors.colorLightgray}}>{value.title}</Text>
              <Text style={{color: colors.colorLightgray}}>
                {value.content}
              </Text>
            </View>
          </View>
        );
      })}
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
    marginTop: 12,
  },
});

export default ContactInfoScreen;
