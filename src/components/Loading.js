import React from 'react';
import {View, ActivityIndicator, Image, StyleSheet} from 'react-native';

import Logo from '../assets/image/Logo.png';
import colors from '../theme/Colors';

const styles = StyleSheet.create({
  loading: {
    backgroundColor: '#fff',
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
  },
  logo: {
    flex: 1,
    marginBottom: 20,
  },
});

const Loading = () => {
  return (
    <View style={styles.loading}>
      <View style={[styles.loadingContainer, {flex: 1}]}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <ActivityIndicator size="large" color={colors.brand} />
      </View>
    </View>
  );
};

export default Loading;
