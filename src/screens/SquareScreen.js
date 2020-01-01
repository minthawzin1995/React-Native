import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15
const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  //helper function
  const setColor = (color,change) => {
    //color == "red,green or blue"
    //change == COLOR_INCREMENT
    switch(color){
      case 'red':
        red+change >255 || red+change <0 ? null : setRed(red+change);
        console.log(red);
        return;
      case 'green':
        green+change >255 || green+change <0 ? null: setGreen(green+change);
        return;
      case 'blue':
        blue+change > 255 || blue+change <0 ? null: setBlue(blue+change);
        return;
      default:
        return;
      }
    };

  return (
    <View>
      <ColorCounter
        color = "Red"
        onIncrease = {() => setColor('red',COLOR_INCREMENT)}
        onDecrease = {() => setColor('red', -1*COLOR_INCREMENT)}
      />
      <ColorCounter
        color = "Blue"
        onIncrease = {() => setColor('blue',COLOR_INCREMENT)}
        onDecrease = {() => setColor('blue', -1*COLOR_INCREMENT)}
      />
      <ColorCounter
        color = "Green"
        onIncrease = {() => setColor('green',COLOR_INCREMENT)}
        onDecrease = {() => setColor('green', -1*COLOR_INCREMENT)}
      />
      <View
        style ={{
          height: 100,
          width: 100,
          alignItems: 'center',
          backgroundColor: `rgb(${red},${green},${blue})`
        }}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
