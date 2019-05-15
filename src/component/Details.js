import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Details extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Details</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Details;