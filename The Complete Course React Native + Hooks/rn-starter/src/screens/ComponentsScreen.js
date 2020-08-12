import React from 'react';
import { Text, StyleSheet, View} from 'react-native'


const ComponentsScreen = () => {

    const greeting = <Text style={styles.subHeaderStyle}>My name is Gustavo</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            {greeting}
        </View>
    );

};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
});


export default ComponentsScreen;