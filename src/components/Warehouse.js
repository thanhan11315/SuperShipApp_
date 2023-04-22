import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {fetchWarehouses} from '../api';

import colors from '../theme/Colors';
import Button1 from './Button1';
import Loading from './Loading';

const WarehouseSelector = ({selectedWarehouse, setSelectedWarehouse}) => {
  const [warehouses, setWarehouses] = useState([]);
  // const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [showWarehouses, setShowWarehouses] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndSetWarehouses = async () => {
      setIsLoading(true);
      const warehouseData = await fetchWarehouses();
      setIsLoading(false);
      if (warehouseData) {
        setWarehouses(warehouseData);
        setSelectedWarehouse(warehouseData[0]);
      }
    };
    fetchAndSetWarehouses();
  }, []);

  const handleButtonClick = () => {
    setShowWarehouses(!showWarehouses);
  };

  const handleWarehouseSelect = warehouse => {
    setSelectedWarehouse(warehouse);
    setShowWarehouses(false);
  };

  return (
    <View style={styles.container}>
      {isLoading && <Loading />}
      {!isLoading && (
        <View style={styles.warehouseInfo}>
          <View style={{flex: 5, paddingRight: 10}}>
            <Text style={styles.warehouseText}>
              Mã kho hàng: {selectedWarehouse?.code || ''}
            </Text>
            <Text style={styles.warehouseText}>
              Địa chỉ kho hàng: {selectedWarehouse?.formatted_address || ''}
            </Text>
          </View>
          <View style={{flex: 2, height: 40}}>
            <Button1
              title={showWarehouses ? 'Đóng' : 'Đổi Kho'}
              fontSize={14}
              onPress={handleButtonClick}
            />
          </View>
        </View>
      )}
      {showWarehouses && (
        <View style={styles.warehouseList}>
          {warehouses.map((warehouse, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.warehouseItem,
                selectedWarehouse.code === warehouse.code
                  ? {backgroundColor: colors.backGroundLightpink}
                  : null,
              ]}
              onPress={() => handleWarehouseSelect(warehouse)}>
              <Text style={styles.warehouseText}>
                Mã kho hàng: {warehouse.code}
              </Text>
              <Text style={styles.warehouseText}>
                Địa chỉ kho hàng: {warehouse.address}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  warehouseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  warehouseText: {
    color: colors.colorLightgray,
    fontSize: 14,
  },
  warehouseList: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  warehouseItem: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: colors.primary,
  },
});

export default WarehouseSelector;
