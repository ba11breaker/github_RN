import React, {Component} from 'react';
import {
    createMaterialTopTabNavigator
} from 'react-navigation-tabs';
import {
    createAppContainer
} from 'react-navigation';
import {
    View, 
    SafeAreaView,
    Text,
    StyleSheet
} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.tabNames = [
            'Jave', 'Android', 'iOS', 'React', 'React Native', 'PHP'
        ];
    }
    _genTabs() {
        const tabs = {};
        this.tabNames.forEach((item, index) => {
            tabs[`tab${index}`] = {
                screen: props => (
                    <PopularTab
                        {...this.props}
                        tabLabel={item}
                    />
                ),
                navigationOptions: {
                    title: item
                }
            };
        });
        return tabs;
    }
    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            this._genTabs(),
            {
                tabBarOptions: {
                    tabStyle: styles.tabStyle,
                    upperCaseLabel: false,
                    scrollEnabled: true,
                    style: {
                        backgroundColor: '#a67',
                    },
                    indicatorStyle: styles.indicatorStyle,
                    labelStyle: styles.labelStyle
                }
            }
        ));
        return (
            <View style={styles.container}>
                <TabNavigator />
            </View>
        )
    }
}

class PopularTab extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>{this.props.tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({}, 'FetchDemoPage');
                }}>Go to Detail</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabStyle: {
        minWidth: 50,
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: '#000', 
    },
    labelStyle: {
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6,
    }
})