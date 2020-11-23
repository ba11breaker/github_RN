import React from 'react';
import {
    Provider
} from 'react-redux';
import AppNavigators from './navigator/AppNavigators';
import store from './store';

export default class App extends React.Component {
    render() {
        /**
         * Transfer store to the whole app
         */
        return (
            <Provider store={store}>
                <AppNavigators />
            </Provider>
        )
    }
}