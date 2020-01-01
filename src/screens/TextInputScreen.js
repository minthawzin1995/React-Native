import React, {useState} from 'react';
import {View, Text,StyleSheet, TextInput} from 'react-native';

const TextInputScreen = () => {
  const [name,setName] = useState('');
  const [password, setPassword] = useState('');

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
      <Text> Enter Password: </Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={newValue=> setPassword(newValue)}
      />
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
