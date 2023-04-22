import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Button1 from './Button1';
import Logo from '../assets/image/Logo.png';
import colors from '../theme/Colors';

const HeaderGetStart = ({
  welcomeText,
  descriptionText,
  buttonText,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>{welcomeText}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{descriptionText}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button1 title={buttonText} fontSize={12} onPress={onPress} />
        </View>
      </View>
      <View style={styles.logoContainer}>
        <View>
          <Image style={styles.logo} source={Logo} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.backGroundLightpink,
  },
  textContainer: {
    flex: 2,
  },
  welcomeTextContainer: {},
  welcomeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.colorBlack,
  },
  descriptionContainer: {
    marginTop: 8,
    marginBottom: 8,
  },
  description: {
    fontSize: 12,
    color: colors.colorLightgray,
  },
  buttonContainer: {
    width: '80%',
    height: 40,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logo: {
    width: 80,
    height: 80,
  },
});

export default HeaderGetStart;
