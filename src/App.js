import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import Routes from './RootNavigator';

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <Routes />
            </Provider>
        );
    }
}