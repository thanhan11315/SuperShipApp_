import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../theme/Colors';

const ListCheck = ({value, setValue}) => {
  // const [value, setValue] = useState(3);
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.boxItem}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            if (setValue) {
              setValue(1);
            }
          }}>
          <View style={styles.checked}>
            {value === 1 && <View style={styles.innerCheck} />}
          </View>
          <Text style={styles.label}>Cho Xem Hàng Nhưng Không Cho Thử</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxItem}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            if (setValue) {
              setValue(2);
            }
          }}>
          <View style={styles.checked}>
            {value === 2 && <View style={styles.innerCheck} />}
          </View>
          <Text style={styles.label}>Cho Thử Hàng</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxItem}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => {
            if (setValue) {
              setValue(3);
            }
          }}>
          <View style={styles.checked}>
            {value === 3 && <View style={styles.innerCheck} />}
          </View>
          <Text style={styles.label}>Không Cho xem Hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxItem: {
    paddingHorizontal: 16,
    paddingTop: 12,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checked: {
    borderWidth: 3,
    borderColor: colors.brand,
    width: 24,
    height: 24,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  innerCheck: {
    width: 14,
    height: 14,
    borderRadius: 12,
    backgroundColor: colors.brand,
  },
  label: {
    fontSize: 14,
    color: colors.colorLightgray,
  },
});

export default ListCheck;
