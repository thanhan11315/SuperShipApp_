import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

const CameraScreen = () => {
  const devices = useCameraDevices();
  const device = devices.back;
  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} preset="medium" />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0275d8',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CameraScreen;
