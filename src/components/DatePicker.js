import React, {useState} from 'react';
import {View} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

import colors from '../theme/Colors';
import SelectButton from './SelectButton';

const DateOfBirthPicker = ({setDateOfBirth}) => {
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const formatDate = date => {
    return moment(date).format('DD/MM/YYYY');
  };

  const onDateChange = selectedDate => {
    setDate(selectedDate);
    setDateOfBirth(selectedDate);
  };

  const showCalendar = () => {
    setShow(true);
  };

  const hideCalendar = () => {
    setShow(false);
  };

  return (
    <View>
      <View style={{height: 40}}>
        <SelectButton
          placeholder={date ? formatDate(date) : 'DD/MM/YYYY'}
          onPress={() => setShow(!show)}
          color={date ? colors.colorBlack : colors.colorLightgray}
          fontSize={16}
        />
      </View>
      {show && (
        <View
          style={{
            backgroundColor: '#fff',
            padding: 12,
            paddingRight: 12,
            marginTop: 12,
            borderRadius: 8,
          }}>
          <CalendarPicker
            onDateChange={onDateChange}
            selectedDayColor={colors.brand}
            selectedDayTextColor="#FFFFFF"
          />
        </View>
      )}
    </View>
  );
};

export default DateOfBirthPicker;
