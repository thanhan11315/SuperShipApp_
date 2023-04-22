import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

class TakePicture extends Component {
  state = {
    cameraPermission: false,
  };

  async componentDidMount() {
    const cameraPermissionStatus = await check(PERMISSIONS[Platform.OS].CAMERA);
    if (cameraPermissionStatus === RESULTS.GRANTED) {
      this.setState({cameraPermission: true});
    }
  }

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      console.log('Path to image: ' + data.uri);
    } catch (err) {
      // console.log('err: ', err);
    }
  };

  render() {
    const {cameraPermission} = this.state;

    return (
      <View>
        {cameraPermission ? (
          <RNCamera
            ref={cam => {
              this.camera = cam;
            }}>
            <View>
              <TouchableOpacity onPress={this.takePicture}>
                <Text>camera</Text>
                <Text>Take Photo</Text>
              </TouchableOpacity>
            </View>
          </RNCamera>
        ) : (
          <View>
            <Text>Camera not authorized</Text>
          </View>
        )}

        <View />
      </View>
    );
  }
}

export default TakePicture;

// ... (phần còn lại của mã)
