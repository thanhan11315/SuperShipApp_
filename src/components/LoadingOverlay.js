import React from 'react';
import {View, ActivityIndicator, Image, StyleSheet, Modal} from 'react-native';

import Logo from '../assets/image/Logo.png';
import colors from '../theme/Colors';

const styles = StyleSheet.create({
  loadingOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu mờ phía sau
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

const LoadingOverlay = ({visible}) => {
  return (
    <Modal visible={visible} transparent statusBarTranslucent>
      <View style={styles.loadingOverlay}>
        <View style={{flex: 1}} />
        <View style={[styles.loadingContainer, {flex: 1}]}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
          <ActivityIndicator size="large" color={colors.brand} />
        </View>
        <View style={{flex: 1}} />
      </View>
    </Modal>
  );
};

export default LoadingOverlay;
