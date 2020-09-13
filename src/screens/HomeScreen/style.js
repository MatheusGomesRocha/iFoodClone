import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Scroll = styled.ScrollView`
`;


export const AdressView = styled.TouchableHighlight`
    flex-direction: row;
    align-items: center;
    margin: 10px 0 0 15px;
`;

export const AdressText = styled.Text`
    font-weight: bold;
`;

export const ScrollHorizontal = styled.ScrollView`
    margin-top: 32px;
    height: 65px;
`;

export const BtnFilter = styled.TouchableHighlight`
    height: 30px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
    padding: 10px;
    flex-direction: row;
    margin-left: 8px;
`;
export const BtnText = styled.Text`
    color: #888;
`;


export const ScrollImages = styled.ScrollView`
`;

export const ImgView = styled.View`
    margin-left: 12px;
    align-items: center;
`;

export const Img = styled.Image`
    height: 70px;
    width: 100px;
    border-radius: 5px;
`;

export const ImgTitle = styled.Text`
    font-size: 12px;
    color: #888;
    margin-top: 10px;
`;
