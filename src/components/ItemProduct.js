import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../theme/Colors';
import Modal2 from './Modal2';

const ItemProduct = () => {
  const [visible, setVisible] = useState(false);

  const onPressCancel = () => {
    setVisible(false);
  };
  const onPressConfirm = () => {
    setVisible(false);
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Modal2
        onPressCancel={onPressCancel}
        onPressConfirm={onPressConfirm}
        visible={visible}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', flex: 12}}>
          <Text style={{color: colors.colorGray, fontWeight: 'bold', flex: 10}}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Text>
          <View style={{flex: 1}}>
            <Text
              style={{
                width: 10,
                height: 10,
                borderRadius: 8,
                backgroundColor: colors.brand,
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'stretch',
            flex: 2,
          }}
          onPress={() => setVisible(true)}>
          <FontAwesome name="ellipsis-h" size={22} color={colors.brand} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 12,
        }}>
        <Text style={{color: colors.colorLightgray}}>20604216</Text>
        <Text style={{color: colors.colorLightgray}}>100 gr</Text>
        <Text style={{color: colors.colorLightgray}}>800.000 đ</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default ItemProduct;
