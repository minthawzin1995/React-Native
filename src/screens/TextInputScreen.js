import React, {useState} from 'react';
import {View, Text,StyleSheet, TextInput} from 'react-native';

const TextInputScreen = () => {
  const [name,setName] = useState('');

  return (
    <View>
      <Text> Enter Name: </Text>
      <TextInput
        style={styles.input}
        autoCapitalize ="none"
        autoCorrect="false"
        value={name}
        onChangeText={newValue => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    margin:15,
    borderColor: 'blue',
    borderWidth: 1
  }
});

export default TextInputScreen;
