import React from 'react';
import { Text,StyleSheet,View,TouchableOpacity,Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  //Cannnot put comment between the components
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress = {() => navigation.navigate('Components')}
        title = "Go to Component Screen"
      />
      <TouchableOpacity onPress = {() => navigation.navigate('List')}>
        <Text>Go to List Screen</Text>
      </TouchableOpacity>
      <Button
        onPress = {() => navigation.navigate('Image')}
        title = "Go to Image Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
