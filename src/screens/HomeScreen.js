import React from 'react';
import { Text,StyleSheet,View,TouchableOpacity,Button } from 'react-native';

const HomeScreen = props => {
  //Cannnot put comment between the components
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onpress = {() => props.navigation.navigate('Components')}
        title="Go to Component Screen"
      />
      <TouchableOpacity onPress = {() => props.navigation.navigate('List')}>
        <Text>Go to List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
