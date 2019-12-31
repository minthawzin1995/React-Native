import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

//Parent-child relationship between ImageScreen and ImageDetail
//Added static image
const ImageDetail = (props) => {;
  return <View>
    <Image source= {props.imageSource}/>
    <Text>{props.title}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;
