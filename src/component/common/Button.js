import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {
    return (
        <TouchableOpacity 
            style={styles.buttonStyle}
            onPress={props.onPress}
        >
            <Text style={styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        height: 35,
        borderRadius: 5,
        backgroundColor: '#f4511e',
        marginVertical: 20
    },
    textStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default Button;