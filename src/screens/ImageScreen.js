import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

//importing ImageDetail by creating a custom component to be able to reuse
const ImageScreen = () => {
  return (
    <View>
      <Text> ImageScreen </Text>
      <ImageDetail
        title= "Forest"
        imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail
        title= "Beach" 
        imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail
        title= "Mountain"
        imageSource={require('../../assets/mountain.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
