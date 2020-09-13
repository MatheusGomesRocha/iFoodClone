import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ea1d2c;
    align-items: center;
    justify-content: center
`;

const Img = styled.Image`
    width: 180px;
    height: 130px;
`;

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.reset({
                routes: [
                    { name: 'apptab' }
                ]
            })
        }, 2000)
    }, [])
    
    return(
        <Container>
            <StatusBar barStyle="light-content" backgroundColor="#ea1d2c"/>
            <Img source={require('../../assets/img/ifood_logo.png')} />
        </Container>
    );
}