import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Alert } from 'react-native';
import { connect } from 'react-redux';

import Card from './common/Card';
import CardItem from './common/Card';
import Button from './common/Button';


class Details extends Component {

    callContact() {
        const phone = this.props.contact.phone;
        const url = `tel:${phone}`;
        this.lanuchUrl(url);
    }

    textContact() {
        const phone = this.props.contact.phone;
        const url = `sms:${phone}`;
        this.lanuchUrl(url);
    }

    lanuchUrl(url) {
        Linking.canOpenURL(url)
            .then(supported => {
                if (!supported) {
                    Alert.alert('App Not supported');
                } else {
                    Linking.openURL(url);
                }
            });
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <View style={styles.container}>
                        <Text style={styles.name}>{ this.props.contact.name }</Text>
                    </View>
                </CardItem>

                <CardItem>
                    <View style={styles.button}>
                        <Button onPress={this.callContact.bind(this)} >Call</Button>
                    </View>
                    <View style={styles.button}>
                        <Button onPress={this.textContact.bind(this)}>Text</Button>
                    </View>
                </CardItem>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    name: {
        fontSize: 18
    },
    button: {
        height: 70
    }
});

const mapStateToProps = (state) => {
    return {
        contact: state.selection.contact
    }
}

export default connect(mapStateToProps)(Details);