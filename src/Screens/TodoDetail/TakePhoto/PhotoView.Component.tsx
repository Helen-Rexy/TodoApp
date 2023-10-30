import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type PhotoViewProps = {
  openPhoto: any;
  imageUrl: string | undefined;
};

const PhotoView = ({openPhoto, imageUrl}: PhotoViewProps) => {
  return (
    <View>
      <View style={styles.takePhotoContent}>
        <Text style={{fontSize: 18}}>Add photo for this task</Text>
        <TouchableOpacity onPress={openPhoto}>
          <Text style={styles.openButton}>Take Photo</Text>
        </TouchableOpacity>
      </View>
      {imageUrl !== '' && (
        <View style={styles.containerImage}>
          <Image style={styles.image} source={{uri: 'file://' + imageUrl}} />
        </View>
      )}
    </View>
  );
};

export default PhotoView;

const styles = StyleSheet.create({
  takePhotoContent: {
    display: 'flex',
    marginTop: 20,
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
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    borderRadius: 8,
  },
});
