import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Info = ({customer}) => {
  const {phoneNumber, Name, Email, customerCode, urlAvatar} = customer;

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image source={{uri: urlAvatar}} style={styles.profileImage} />
        </View>
        <View style={styles.headerTextContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.headerTextTop}>{phoneNumber},</Text>
            <Text style={styles.headerTextTop}>{Name},</Text>
            <Text style={styles.headerTextTop}>{Email}</Text>
          </View>
          <Text style={styles.headerTextBottom}>
            {customerCode} - {Name}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: '#f5d8d7',
    paddingLeft: 12,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    marginLeft: 20,
  },
  profileImageContainer: {
    borderWidth: 3,
    padding: 2,
    borderColor: '#a73a3a',
    borderRadius: 50,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  infoRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerTextTop: {
    color: '#72808e',
    fontSize: 13,
    marginRight: 5,
  },
  headerTextBottom: {
    color: '#a73a3a',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Info;
