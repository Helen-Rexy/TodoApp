import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import CameraView from './CameraView.Component';
import {ITodo} from '../../../Types/Todos';

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
      // setPhoto(photos?.path.toString());
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
        <View>
          <View style={styles.takePhotoContent}>
            <Text style={{fontSize: 18}}>Add photo for this task</Text>
            <TouchableOpacity onPress={openPhoto}>
              <Text style={styles.openButton}>Take Photo</Text>
            </TouchableOpacity>
          </View>
          {state.imageUrl !== '' && (
            <View style={styles.containerImage}>
              <Image
                style={styles.image}
                source={{uri: 'file://' + state.imageUrl}}
              />
            </View>
          )}
        </View>
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
  takePhotoContent: {
    display: 'flex',
    marginTop: 20,
    // flexDirection: 'row',
    gap: 10,
    height: 'auto',
  },
  containerImage: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderWidth: 1,
    borderColor: '#d5d5d5',
    width: '90%',
    height: '70%',
    marginTop: 40,
    marginBottom: 20,
  },
  openButton: {
    borderWidth: 2,
    borderColor: '#2089dc',
    color: '#2089dc',
    width: 130,
    height: 40,
    // alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
});
