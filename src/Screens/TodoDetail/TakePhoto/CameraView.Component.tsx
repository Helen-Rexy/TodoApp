import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Camera, CameraDevice} from 'react-native-vision-camera';

type CameraViewProps = {
  cameraRef: any;
  device: CameraDevice;
  takePhoto: any;
};

const CameraView = ({cameraRef, device, takePhoto}: CameraViewProps) => {
  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo
      />
      <TouchableOpacity style={styles.button} onPress={takePhoto} />
    </View>
  );
};

export default CameraView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
});
