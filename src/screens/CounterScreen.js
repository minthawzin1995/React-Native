import React, {useReducer} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

//Screen to count and increase and decrease by using useState
const reducer = (state, action)=>{
  switch(action.actionToTake){
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return;
    }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count:0});

  return (
    <View>
      <Button
        title = "Increase"
        onPress = {() => {
          dispatch({actionToTake: 'increment', payload: 1})
        }}
      />
      <Button
        title = "Decrease"
        onPress = {() => {
          dispatch({actionToTake: 'decrement', payload: 1})
        }}
      />
      <Text>Current Count:{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
