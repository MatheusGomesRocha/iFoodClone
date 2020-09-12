import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const AppTab = createBottomTabNavigator();

export default () => {
    return(
        <AppTab.Navigator>
            <AppTab.Screen name="home" component={HomeScreen} />
            <AppTab.Screen name="search" component={SearchScreen} />
            <AppTab.Screen name="history" component={HistoryScreen} />
            <AppTab.Screen name="profile" component={ProfileScreen} />
        </AppTab.Navigator>
    );
}