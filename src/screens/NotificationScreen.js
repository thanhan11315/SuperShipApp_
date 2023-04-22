import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../theme/Colors';
import Button1 from '../components/Button1';
import Divider from '../components/Divider';

const NotificationScreen = ({navigation}) => {
  const notifications = [
    {
      id: 1,
      title: 'Đối Soát',
      content: 'Đây là nội dung thông báo mới',
      isRead: false,
      time: '10 phút trước / 02-04 04:33',
      navigationTo: 'ReconciliationDetail',
    },
    {
      id: 2,
      title: 'Lấy Hàng',
      content: 'Đây là nội dung thông báo đã đọc',
      isRead: true,
      time: '1 giờ trước / 02-04 04:33',
      navigationTo: 'Receipt',
    },
    {
      id: 3,
      title: 'Trả Hàng',
      content: 'Đây là nội dung thông báo đã đọc',
      isRead: true,
      time: '1 giờ trước / 02-04 04:33',
      navigationTo: 'Receipt',
    },
    {
      id: 4,
      title: 'S964885SGLV.0269115',
      content: 'Đây là nội dung thông báo đã đọc',
      isRead: false,
      time: '1 giờ trước / 02-04 04:33',
      navigationTo: 'OrderDetail',
    },
    {
      id: 4,
      title: 'Yêu Cầu',
      content: 'Đây là nội dung thông báo đã đọc',
      isRead: false,
      time: '1 giờ trước / 02-04 04:33',
      navigationTo: 'RequestDetails',
    },
  ];

  const getIcon = title => {
    switch (title) {
      case 'Đối Soát':
        return 'folder-open';
      case 'Lấy Hàng':
        return 'paper-plane';
      case 'Trả Hàng':
        return 'undo';
      case 'Yêu Cầu':
        return 'comments';
      default:
        return 'file-text';
    }
  };

  const markAllAsRead = () => {
    console.log('Đánh dấu tất cả thông báo đã đọc');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{backgroundColor: colors.backGroundLightpink}}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Thông báo</Text>
          <View style={{height: 40, width: 150}}>
            <Button1 fontSize={14} title="Đã Đọc Tất Cả" />
          </View>
        </View>
        <View style={styles.summary}>
          <Text>
            Số lượng thông báo:{' '}
            <Text style={{fontWeight: 'bold'}}>{notifications.length}</Text>
          </Text>
          <Text>
            Số lượng thông báo chưa đọc:{' '}
            <Text style={{fontWeight: 'bold'}}>
              {notifications.filter(notif => !notif.isRead).length}
            </Text>
          </Text>
        </View>
      </View>
      <ScrollView>
        {notifications.map((notification, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(notification.navigationTo)}>
            <View style={styles.notificationItem}>
              <View style={{paddingRight: 18, paddingLeft: 18}}>
                <Icon
                  name={getIcon(notification.title)}
                  size={30}
                  color={
                    notification.isRead ? colors.colorLightgray : colors.brand
                  }
                />
              </View>
              <View style={styles.notificationContent}>
                <Text
                  style={[
                    styles.notificationTitle,
                    {
                      color: notification.isRead
                        ? colors.colorLightgray
                        : colors.brand,
                    },
                  ]}>
                  {notification.title}
                </Text>
                <Text style={styles.notificationDescription}>
                  {notification.content}
                </Text>
                <Text style={{color: colors.brand}}>{notification.time}</Text>
              </View>
            </View>
            <Divider color={colors.colorBorderBottom} height={1} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundScreen,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.brand,
  },
  summary: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  notificationItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingRight: 16,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  notificationDescription: {
    color: colors.colorLightgray,
  },
});

export default NotificationScreen;
