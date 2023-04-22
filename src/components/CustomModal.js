import React from 'react';
import {Modal, View, Text, StyleSheet, Dimensions} from 'react-native';
import Button1 from './Button1';
import UnderlinedButton from './UnderlineButton';

const screenWidth = Dimensions.get('window').width;

const CustomModal = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>
            Bạn có chắc chắn muốn đổi Tài Khoản Ngân Hàng này thành Tài Khoản
            Chính?
          </Text>
          <Text style={styles.modalText}>
            {' '}
            - Bạn đang yêu cầu chuyển Tài Khoản Ngân Hàng Chính:
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 1,
              }}>
              <UnderlinedButton title="Xác Nhận" />
            </View>
            <View
              style={{
                flex: 1,
                height: 47,
              }}>
              <Button1 title="Tôi Nhầm" onPress={onClose} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    alignItems: 'flex-start',
    elevation: 5,
    width: screenWidth - 40,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#a73a3a',
  },
  modalText: {
    marginBottom: 15,
    color: '#6b7280',
  },
});

export default CustomModal;
