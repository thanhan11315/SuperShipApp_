import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';

export const requestPermission = async permissionType => {
  try {
    const permission = permissionType;
    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      console.log('The permission is granted');
      return true;
    } else {
      console.log('The permission is not granted');
      return false;
    }
  } catch (error) {
    console.log('Error while requesting permission:', error);
    return false;
  }
};

export const checkPermission = async permissionType => {
  try {
    const permission = permissionType;
    const result = await check(permission);

    if (result === RESULTS.GRANTED) {
      console.log('The permission is granted');
      return true;
    } else {
      console.log('The permission is not granted');
      return false;
    }
  } catch (error) {
    console.log('Error while checking permission:', error);
    return false;
  }
};

export const PERMISSION_TYPES = {
  LOCATION: Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
  }),
  CAMERA: PERMISSIONS[Platform.OS].CAMERA,
  CONTACTS: PERMISSIONS[Platform.OS].CONTACTS,
  NOTIFICATIONS: PERMISSIONS[Platform.OS].USER_NOTIFICATIONS,
};
