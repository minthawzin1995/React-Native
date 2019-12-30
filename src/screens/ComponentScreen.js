//Create react component here

/*
Four parts to javascript component :
1. Import libraries
2. Create component -> function that returns JSX
3. Create stylesheet
4. Export component
*/

//importing libraries
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

//creating component
const ComponentScreen = () => {
	const yourname = "Min";
		return (<View>
		<Text style={styles.textStyle_1}>Getting started with</Text>
		<Text style={styles.textStyle_1}>react native!</Text>
		<Text style={styles.textStyle_2}>My name is {yourname}</Text>
		</View>
	);
};

//creating StyleSheet
const styles = StyleSheet.create({
	textStyle_1: {
		fontSize: 45
	},
	textStyle_2: {
		fontSize: 20
	}
});

//exporting component
export default ComponentScreen;
