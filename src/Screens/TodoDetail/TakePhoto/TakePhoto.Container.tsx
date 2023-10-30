import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {ActivityIndicator, StyleSheet, ToastAndroid, View} from 'react-native';

import CameraView from './CameraView.Component';
import {ITodo} from '../../../Types/Todos';
import PhotoView from './PhotoView.Component';

const TakePhoto = ({state, setState}: {state: ITodo; setState: any}) => {
  const cameraRef = useRef<Camera>(null);
  const device = useCameraDevice('back');

  const [photoScreen, setPhotoScreen] = useState<boolean>(true);

  useEffect(() => {
    checkPermission();
  }, []);
  const takePhoto = async () => {
    if (cameraRef != null) {
      const photos = await cameraRef.current?.takePhoto({
        qualityPrioritization: 'quality',
      });
      setState((prev: any) => ({...prev, imageUrl: photos?.path.toString()}));
      setPhotoScreen(true);
    }
  };

  const openPhoto = () => {
    setPhotoScreen(false);
  };

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    if (newCameraPermission == null) {
      ToastAndroid.show('Camera not found', ToastAndroid.LONG);
    }
  };

  if (device == null) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      {photoScreen ? (
        <PhotoView openPhoto={openPhoto} imageUrl={state.imageUrl} />
      ) : (
        <CameraView
          device={device}
          takePhoto={takePhoto}
          cameraRef={cameraRef}
        />
      )}
    </View>
  );
};

export default TakePhoto;

const styles = StyleSheet.create({
  container: {
    height: 500,
    marginBottom: 30,
  },
});
