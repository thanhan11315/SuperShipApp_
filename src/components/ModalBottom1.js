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
import moment from 'moment';

const ModalBottom1 = ({visible, setVisible, getRange}) => {
  const dateRanges = [
    {
      label: '7 ngày',
      start: moment().subtract(6, 'days').startOf('day'),
      end: moment().endOf('day'),
    },
    {
      label: '14 ngày',
      start: moment().subtract(13, 'days').startOf('day'),
      end: moment().endOf('day'),
    },
    {
      label: '30 ngày',
      start: moment().subtract(29, 'days').startOf('day'),
      end: moment().endOf('day'),
    },
    {
      label: '90 ngày',
      start: moment().subtract(89, 'days').startOf('day'),
      end: moment().endOf('day'),
    },
    {
      label: 'Tháng này',
      start: moment().startOf('month'),
      end: moment().endOf('month'),
    },
    {
      label: 'Tháng trước',
      start: moment().subtract(1, 'month').startOf('month'),
      end: moment().subtract(1, 'month').endOf('month'),
    },
  ];

  const handleTimeSelection = range => {
    console.log('Start:', range.start.format('DD/MM/YYYY'));
    console.log('End:', range.end.format('DD/MM/YYYY'));
    getRange(range);
  };

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
              <Text style={styles.optionsTitle}>Chọn Khoảng Thời Gian</Text>
              <Divider height={1} color={colors.colorBorderBottom} />
              {dateRanges.map((range, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() => {
                      handleTimeSelection(range);
                      setVisible(false);
                    }}>
                    <Text
                      style={[styles.optionText, {color: colors.colorBlue}]}>
                      {range.label} ({range.start.format('DD/MM')} -{' '}
                      {range.end.format('DD/MM')})
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <Divider height={1} color={colors.colorBorderBottom} />
              <Divider height={10} color={colors.colorBorderBottom} />
              <TouchableOpacity onPress={() => setVisible(false)}>
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

export default ModalBottom1;
