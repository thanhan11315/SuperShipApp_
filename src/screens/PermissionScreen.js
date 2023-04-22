// PermissionsScreen.js
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import OneSignal from 'react-native-onesignal';
import notifee, {TriggerType, AndroidStyle} from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import {Camera} from 'react-native-vision-camera';

const requestNotificationPermission = async () => {
  PushNotificationIOS.requestPermissions().then(
    permissions => {
      if (permissions.alert || permissions.sound || permissions.badge) {
        console.log('Notifications permission granted');
      } else {
        console.log('Notifications permission not granted');
      }
    },
    error => {
      console.error('Error requesting notifications permissions', error);
    },
  );
};

const PERMISSION_TYPES = {
  LOCATION: Platform.select({
    android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_ALWAYS,
  }),
  CAMERA: Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  }),
  CONTACTS: Platform.select({
    android: PERMISSIONS.ANDROID.READ_CONTACTS,
    ios: PERMISSIONS.IOS.READ_CONTACTS,
  }),
  NOTIFICATIONS: Platform.select({
    android: PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
    ios: PERMISSIONS.IOS.POST_NOTIFICATIONS,
  }),
  MICROPHONE: Platform.select({
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
    ios: PERMISSIONS.IOS.MICROPHONE,
  }),
};

const requestPermission = async permissionType => {
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

const checkPermission = async permissionType => {
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

const PermissionsScreen = () => {
  const handlePermissionButton = async permissionType => {
    const isGranted = await checkPermission(permissionType);
    if (!isGranted) {
      await requestPermission(permissionType);
    }
    console.log(isGranted);
  };

  const handleNotificationButtonPress = () => {
    if (Platform.OS === 'ios') {
      requestNotificationPermission();
    } else {
      handlePermissionButton(PERMISSION_TYPES.NOTIFICATIONS);
    }
  };

  useEffect(() => {
    OneSignal.setAppId('03d9fe02-5a32-4733-b503-a065f1eace16');
    OneSignal.setNotificationWillShowInForegroundHandler(notifReceivedEvent => {
      let notif = notifReceivedEvent.getNotification();
      console.log('notification received in foreground:', notif);
      notifReceivedEvent.complete(notif);
    });
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log('notification opened:', notification);
    });
  }, []);

  const handleSubscribeToNotifications = async () => {
    // Kiểm tra quyền thông báo
    const permissionStatus = await OneSignal.getDeviceState();

    // Nếu chưa có quyền, yêu cầu quyền thông báo từ người dùng
    if (!permissionStatus.hasPrompted || !permissionStatus.isSubscribed) {
      await OneSignal.promptForPushNotificationsWithUserResponse(response => {
        console.log('Prompt response:', response);
      });
    } else {
      // Đã có quyền, hiển thị thông báo thành công
      console.log('Subscribed to notifications');
    }
  };

  async function onDisplayNotification() {
    // Yêu cầu quyền (chỉ cần thiết trên iOS)
    await notifee.requestPermission();

    // Tạo kênh thông báo (cần thiết trên Android)
    const channelId = await notifee.createChannel({
      id: 'image_channel',
      name: 'Image Channel',
    });

    // URL của hình ảnh bạn muốn hiển thị bên cạnh thông báo
    const largeIconUrl = 'https://mdl.supership.net/images/SuperShip-Logo.png';

    // URL của hình ảnh bạn muốn hiển thị trong thông báo
    const imageUrl =
      'https://mdl.supership.net/images/SuperShip-Logo-Vuong-Do-Nen-Trang.png';

    await notifee.displayNotification({
      title: 'Thông báo với hình ảnh',
      body: 'Nội dung thông báo',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // thay 'ic_launcher' bằng tên biểu tượng của bạn
        largeIcon: largeIconUrl,
        style: {
          type: AndroidStyle.BIGPICTURE,
          picture: imageUrl,
        },
      },
    });
  }

  const sendNotification = async () => {
    const notificationData = {
      app_id: '03d9fe02-5a32-4733-b503-a065f1eace16', // Thay thế bằng app_id của bạn
      headings: {
        en: 'SuperShip Notification',
      },
      contents: {
        en: 'Đơn hàng đã được giao thành công',
      },
      included_segments: ['Subscribed Users'],
    };

    try {
      const response = await fetch(
        'https://onesignal.com/api/v1/notifications',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Basic MTI2ODZiMTAtNTRmMy00Nzk0LTk2ZWUtYmE0MWJiOWU3NTUx',
          },
          body: JSON.stringify(notificationData),
        },
      );

      if (response.ok) {
        console.log('Notification sent successfully');
      } else {
        const errorData = await response.json();
        console.log('Error sending notification:', response.statusText);
        console.log('Error details:', errorData);
      }
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  const navigation = useNavigation();
  const requestPermissions = async function () {
    await handlePermissionButton(PERMISSION_TYPES.MICROPHONE);
    const isGranted = await checkPermission(PERMISSION_TYPES.CAMERA);
    if (!isGranted) {
      const granted = await requestPermission(PERMISSION_TYPES.CAMERA);
      if (granted) {
        navigation.navigate('CameraScreen');
      }
    } else if (isGranted) {
      navigation.navigate('CameraScreen');
    }
    console.log(isGranted);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permissions Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePermissionButton(PERMISSION_TYPES.LOCATION)}>
        <Text style={styles.buttonText}>Request Location Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePermissionButton(PERMISSION_TYPES.CAMERA)}>
        <Text style={styles.buttonText}>Request Camera Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePermissionButton(PERMISSION_TYPES.CONTACTS)}>
        <Text style={styles.buttonText}>Request Contacts Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleNotificationButtonPress}>
        <Text style={styles.buttonText}>Request Notifications Permission</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubscribeToNotifications}>
        <Text style={styles.buttonText}>Xin quyền thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={sendNotification}>
        <Text style={styles.buttonText}>Gửi thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDisplayNotification}>
        <Text style={styles.buttonText}>Gửi thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={requestPermissions} style={styles.button}>
        <Text>Request Permissions and Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0275d8',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PermissionsScreen;
