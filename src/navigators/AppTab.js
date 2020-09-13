import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const AppTab = createBottomTabNavigator();

export default () => {
    return(
        <AppTab.Navigator
        tabBarOptions={{
            activeTintColor: '#000',
            inactiveTintColor: '#666',
            style:{
                borderTopWidth: 0,
                borderTopColor: 'transparent',
                height: 60,
                padding: 5
            },

            labelStyle: {
                paddingBottom: 10
            },

            keyboardHidesTabBar: true
        }}

        screenOptions={({route}) =>({           // Passando route como objeto para pegar o nome das rotas futuramente
            tabBarIcon: ({ focused }) => {      // Adicionando Icons dinamicamente
                let icon = null;

                switch(route.name) {
                    case 'home':
                        icon = "home";
                    break;
                    case 'search':
                        icon = "search";
                    break;
                    case 'history':
                        icon = "outdent";   
                    break;
                    case 'profile':
                        icon = "user";  
                    break;
                }
                
                // name no Icon irá receber a variável para ser adicionado dinamicamente
                // Se a Tab estiver focado, irá receber a cor Preta ´para dar um destaque a mais dos outros 
                return <Icon name={icon} size={25} style={{color: focused ? '#000' : '#cdcdcd'}}/>
            }
        })} 
        >
            <AppTab.Screen name="home" component={HomeScreen} options={{ tabBarLabel:"Início" }}/>
            <AppTab.Screen name="search" component={SearchScreen} options={{ tabBarLabel:"Busca" }}/>
            <AppTab.Screen name="history" component={HistoryScreen} options={{ tabBarLabel:"Pedidos" }}/>
            <AppTab.Screen name="profile" component={ProfileScreen} options={{ tabBarLabel:"Perfil" }}/>
        </AppTab.Navigator>
    );
}