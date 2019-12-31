import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

//importing ImageDetail by creating a custom component to be able to reuse
const ImageScreen = () => {
  return (
    <View>
      <Text> ImageScreen </Text>
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
