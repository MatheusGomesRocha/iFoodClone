import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ea1d2c;
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
            
        </Container>
    );
}