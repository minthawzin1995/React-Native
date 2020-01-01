import React from 'react';
import { Text,StyleSheet,View,TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        type = "outline"
      />
      <Button
        onPress = {() => navigation.navigate('Counter')}
        title = "Counter Screen"
        type = "clear"
      />
      <Button
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        onPress = {() => navigation.navigate('Color')}
        title = "Color Screen"
      />
      <Button
        onPress = {() => navigation.navigate('Square')}
        title = "SquareScreen"
        type = "outline"
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
