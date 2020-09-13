import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTopBar from './HomeTopBar';
import SearchScreen from '../screens/SearchScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CustomTabBar from '../components/CustomTabBar';

const AppTab = createBottomTabNavigator();

export default () => {
    return(
        <AppTab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            tabBarOption={{
                keyboardHidesTabBar: true
            }}
        >
            <AppTab.Screen name="home" component={HomeTopBar} options={{ tabBarLabel:"Início" }}/>
            <AppTab.Screen name="search" component={SearchScreen} options={{ tabBarLabel:"Busca" }}/>
            <AppTab.Screen name="history" component={HistoryScreen} options={{ tabBarLabel:"Pedidos" }}/>
            <AppTab.Screen name="profile" component={ProfileScreen} options={{ tabBarLabel:"Perfil" }}/>
        </AppTab.Navigator>
    );
}