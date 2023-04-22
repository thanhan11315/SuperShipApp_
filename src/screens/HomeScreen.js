import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import Info from '../components/Info';
import ListItem from '../components/ListItem';
import {listHomeScreen} from '../data/ListsData';

const HomeScreen = ({navigation}) => {
  const customerData = {
    phoneNumber: '012345678910',
    Name: 'SuperShip Test',
    Email: 'anlth.doe@example.com',
    customerCode: 'S983213',
    urlAvatar:
      'https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-nguoi-giau-mat-600x600.jpg',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.dividerWhite} />
        <Info customer={customerData} />
        <View style={styles.dividerWhite} />
        <View style={styles.divider} />
        {listHomeScreen.map((value, key) => (
          <View key={key}>
            {!value.divider && (
              <ListItem
                icon={value.icon}
                title={value.title}
                note={value.note}
                colorTitle={value.colorTitle}
                onPress={() => {
                  if (value.navigateTo) {
                    navigation.navigate(value.navigateTo);
                  }
                }}
              />
            )}
            {value.divider && <View style={styles.divider} />}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAF3',
  },
  dividerTop: {
    backgroundColor: '#E8EAF3',
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

export default HomeScreen;
