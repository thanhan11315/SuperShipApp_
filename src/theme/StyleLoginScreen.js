import {StyleSheet} from 'react-native';
import colors from './Colors';
const styleLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 164,
    height: 156,
  },
  // WelcomeBackBox: {
  //   marginTop: 89,
  //   marginBottom: 47,
  // },
  WelcomeBackText: {
    fontWeight: 700,
    fontSize: 36,
    color: colors.brand,
  },
  button: {
    backgroundColor: '#a73a3a',
    width: 134,
    height: 47,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 18,
  },
  text: {
    fontWeight: 700,
    fontSize: 14,
    color: colors.brand,
  },
});
export default styleLogin;
