import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreloadScreen from '../screens/PreloadScreen';
import AppTab from './AppTab';

const PreloadStack = createStackNavigator();

export default () => {
    return(
        <PreloadStack.Navigator
            screenOptions={{
                title: null,
                headerTransparent: true,
            }}
        >
            <PreloadStack.Screen name="preload" component={PreloadScreen} />
            <PreloadStack.Screen name="apptab" component={AppTab} />
        </PreloadStack.Navigator>
    );
}