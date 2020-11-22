import React from 'react';
import {
    StyleSheet,
    Text, 
    View
} from 'react-native';

export default class WelcomePage extends React.Component {
    componentDidMount() {
        this.timer = setTimeout(() => {

        }, 200);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Welcomg Page
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});