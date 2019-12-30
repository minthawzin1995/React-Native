import React from 'react';
import { Text, StyleSheet,View, Button } from 'react-native';

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>

    //Adding a button to Change View
    <Button
      title="Go to Component Screen"
      onpress = {() => console.log('Button Pressed')}
    />

    //Adding touchableOpacity -> add faded effect on click
    <TouchableOpacity
    onPress = {() => console.log('List is Pressed')}>
      <Text>Go to List Screen</Text>
    </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
