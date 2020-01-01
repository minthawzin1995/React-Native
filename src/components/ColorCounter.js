import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title = {`Increase ${color}`}
        onPress = {() => onIncrease()}
      />
      <Button
        title = {`Decrease ${color}`}
        onPress = {() => onDecrease()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
