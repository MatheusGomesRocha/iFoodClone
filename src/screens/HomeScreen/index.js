import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,

    Scroll,

    ScrollHorizontal,

    BtnFilter,
    BtnText,
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>
                <ScrollHorizontal horizontal={true} showsHorizontalScrollIndicator={false}>


                <BtnFilter>
                    <>
                        <BtnText>Filtros</BtnText>
                        <Icon style={{marginLeft: 10}} name="tasks" size={12} />
                    </>
                </BtnFilter>

                <BtnFilter>
                    <>
                        <BtnText>Tipo de loja</BtnText>
                        <Icon style={{marginLeft: 10}} name="angle-down" size={15} />
                    </>
                </BtnFilter>

                <BtnFilter>
                    <>
                        <BtnText>Ordernar</BtnText>
                        <Icon style={{marginLeft: 10}} name="angle-down" size={15} />
                    </>
                </BtnFilter>

                <BtnFilter>
                    <BtnText>Entrega grátis</BtnText>
                </BtnFilter>

                 <BtnFilter>
                     <>
                        <BtnText>Vale-refeição</BtnText>
                        <Icon style={{marginLeft: 10}} name="angle-down" size={15} />
                    </>
                </BtnFilter>

                <BtnFilter>
                    <>
                        <BtnText>Distância</BtnText>
                        <Icon style={{marginLeft: 10}} name="angle-down" size={15} />
                    </>
                </BtnFilter>

                <BtnFilter>
                    <BtnText>Entrega Parceira</BtnText>
                </BtnFilter>

                 <BtnFilter>
                    <BtnText>Super Restaurante</BtnText>
                </BtnFilter>

                </ScrollHorizontal>
            </Scroll>
        </Container>
    );
}