import React from 'react';
import {View} from 'react-native';

const Divider = ({color, height}) => {
  return (
    <View
      style={{
        backgroundColor: color,
        height: height,
      }}
    />
  );
};

export default Divider;
