import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView``;

export const ScrollHorizontal = styled.ScrollView`
    margin-top: 20px;
    height: 100px;
`;

export const BtnFilter = styled.TouchableHighlight`
    height: 35px;
    border-radius: 20px;
    border: 1px solid #ccc;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-left: 10px;
    flex-direction: row;
`;
export const BtnText = styled.Text`
    color: #434343;
`;