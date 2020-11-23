import React, {Component} from 'react';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import {
    connect
} from 'react-redux';

const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: 'Hot',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: 'Trending',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'trending-up'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: 'Favorite',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: 'Mine',
            tabBarIcon: ({tintColor, focused}) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
};

class DynamicTabNavigator extends React.Component {
    constructor(props) {
        super(props);
    }
    _tabNavigator() {
        if (this.Tabs) {
            return this.Tabs;
        }
        const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
        const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
        return this.Tabs = createAppContainer(createBottomTabNavigator(
            tabs,
            {
                tabBarComponent: props => (
                    <TabBarComponent
                        theme={this.props.theme}
                        {...props}
                    />
                )
            }
        ));
    } 
    render() {
        const Tabs = this._tabNavigator();
        return (
            <Tabs />
        );
    }
}

class TabBarComponent extends React.Component {
    render() {
        return (
            <BottomTabBar
                {...this.props}
                activeTintColor={this.props.theme}
            />
        );
    }
}

const mapStateToProps = state => ({
    theme: state.theme.theme
});

export default connect(mapStateToProps) (DynamicTabNavigator);