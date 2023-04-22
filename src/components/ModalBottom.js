// WarehouseOptionsModal.js
import React, {useState} from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  View,
  Modal,
} from 'react-native';
import Divider from './Divider';
import colors from '../theme/Colors';

const ModalBotttom = ({visible, setVisible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <TouchableWithoutFeedback onPress={() => setVisible(false)}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.optionsContainer}>
              <Text style={styles.optionsTitle}>Chọn Hành Động</Text>
              <Divider height={1} color={colors.colorBorderBottom} />
              <TouchableOpacity onPress={() => console.log('Mặc Định')}>
                <Text style={[styles.optionText, {color: colors.brand}]}>
                  Mặc Định
                </Text>
              </TouchableOpacity>
              <Divider height={1} color={colors.colorBorderBottom} />
              <TouchableOpacity onPress={() => console.log('Xóa Kho')}>
                <Text style={[styles.optionText, {color: colors.colorBlue}]}>
                  Xóa Kho
                </Text>
              </TouchableOpacity>
              <Divider height={10} color={colors.colorBorderBottom} />
              <TouchableOpacity onPress={() => console.log('Hủy')}>
                <Text style={[styles.optionText, {color: colors.colorBlue}]}>
                  Hủy
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  optionsContainer: {
    backgroundColor: '#fff',
    width: '100%',
  },
  optionsTitle: {
    paddingVertical: 12,
    color: colors.colorLightgray,
    fontSize: 14,
    textAlign: 'center',
  },
  optionText: {
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 12,
  },
});

export default ModalBotttom;
