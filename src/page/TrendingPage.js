import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    Button
} from 'react-native';
import {
    connect
} from 'react-redux';
import actions from '../action';

class TrendingPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text>TrendingPage</Text>
                <Button
                    title={'change theme'}
                    onPress={() => {
                        this.props.onThemeChange('red');
                    }} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    }
});

const mapDispatchToProps = dispatch => ({
    onThemeChange: theme => dispatch(actions.onThemeChange(theme))
});

export default connect(null, mapDispatchToProps) (TrendingPage);