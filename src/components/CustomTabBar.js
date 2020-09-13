import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import HomeIcon from '../assets/svg/home.svg';
import SearchIcon from '../assets/svg/search.svg';
import MenuHistoryIcon from '../assets/svg/menu.svg';
import ProfileIcon from '../assets/svg/user.svg';

const Div = styled.View `
    flex-direction: row;
    height: 50px;
    background-color: #fff;
`;

const Texto = styled.Text`
    font-size: 12px;
    color: #808080;
`;

const Touch = styled.TouchableOpacity `
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export default ({state, descriptors, navigation, index}) => {          /** Props que vem para facilitar a customização */

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);
    }

    return (
        <Div>
            <Touch key={index} onPress={() => goTo('home')}>
                <HomeIcon width="25" height="25" fill={state.index == 0 ?'#000':'#bdbdbd'} />
                <Texto style={{color: state.index == 0 ?'#000':'#666'}}> Início </Texto>
            </Touch>

            <Touch key={index} onPress={() => goTo('search')}>
                <SearchIcon width="25" height="25" fill={state.index == 1 ?'#000':'#bdbdbd'} />
                <Texto style={{color: state.index == 1 ?'#000':'#666'}}> Busca </Texto>

            </Touch>
            <Touch key={index} onPress={() => goTo('history')}>
                <MenuHistoryIcon width="25" height="25" fill={state.index == 2 ?'#000':'#bdbdbd'} />
                <Texto style={{color: state.index == 2 ?'#000':'#666'}}> Pedidos </Texto>
            </Touch>

            <Touch key={index} onPress={() => goTo('profile')}>
                <ProfileIcon width="25" height="25" fill={state.index == 3 ?'#000':'#bdbdbd'} />
                <Texto style={{color: state.index == 3 ?'#000':'#666'}}> Perfil </Texto>
            </Touch>
        </Div>
    );
}

