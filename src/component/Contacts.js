import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Contacts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Contacts</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Contacts;