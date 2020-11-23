import React, {Component} from 'react';
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';

export default class FetchDemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: ''
        };
    }
    loadData = () => {
        const url = `https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url).
            then(response => response.text()).
            then(responseText => {
                this.setState({
                    showText: responseText,
                });
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <TextInput
                    style={{
                        height: 50,
                        flex: 1,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginRight: 10,
                    }}
                    onChangeText={text=>{
                        this.searchKey = text;
                    }}
                />
                <Button
                    title="Fetch"
                    onPress={() => {
                        this.loadData();
                    }}
                />
                </View>
                <Text>
                    {this.state.showText}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f5fcff',
    }
});