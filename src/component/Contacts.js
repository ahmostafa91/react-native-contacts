import React, { Component } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as action from '../actions';

class Contacts extends Component {

    OnContactSelected(contact) {
        //console.log(contact);
        this.props.ContactSelect(contact);
        this.props.navigation.navigate('details');
    }

    renderContact({item}) {
        return (
            <View style={styles.contact}>
                <TouchableOpacity onPress={this.OnContactSelected.bind(this, item)}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.phone}>{item.phone}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.contacts}
                    renderItem={this.renderContact.bind(this)}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    contact: {
       flex: 1,
       padding: 20,
       borderBottomWidth: 1,
       borderColor: '#ddd',
       backgroundColor: '#fff' 
    },
    name: {
        fontSize: 16
    },
    phone: {
        fontSize: 14,
        color: '#71757594'
    }
});

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    };
}

export default connect(mapStateToProps, action)(Contacts);