import React from 'react';
import {View, Text} from 'react-native';
import colors from '../theme/Colors';

const RecipientInformation = ({
  name = 'Ân',
  phone = '0898999907',
  street = '32 Thân Nhân Trung',
  ward = 'Phường 13',
  district = 'Tân Bình',
  city = 'Thành phố Hồ Chí Minh',
}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 5,
      }}>
      <Text style={{color: colors.colorLightgray}}>{`${phone} - ${name}`}</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={{color: colors.colorLightgray}}>{`${street}, `}</Text>
        <Text style={{color: colors.colorLightgray}}>{`${ward}, `}</Text>
        <Text style={{color: colors.colorLightgray}}>{`${district}`}</Text>
        <Text style={{color: colors.colorLightgray}}>{`${city}`}</Text>
      </View>
    </View>
  );
};

export default RecipientInformation;
