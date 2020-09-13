import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';

const TopTab = createMaterialTopTabNavigator();

export default () => {
  return (
    <TopTab.Navigator
        tabBarOptions={{
            style: {height: 50, paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'},
            labelStyle: {fontSize: 16, fontWeight: 'bold', textTransform: 'capitalize'},
            activeTintColor: '#ea1d2c',
            inactiveTintColor: '#ccc',
            tabStyle: { width: 100 },
            indicatorStyle: {backgroundColor: '#ea1d2c', marginLeft: 20, height: 1, width: 80}
        }}
    >
      <TopTab.Screen name="homeDelivery" component={HomeScreen} options={{tabBarLabel: 'Entrega'}} />
      <TopTab.Screen name="homeRecivery" component={HistoryScreen} options={{tabBarLabel: 'Retirada'}}/>
    </TopTab.Navigator>
  );
}