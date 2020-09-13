import React from 'react';

import {
    Container,

    Scroll,

    BtnFilter,
    BtnText,
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>
                <BtnFilter>
                    <BtnText>Tipo de loja</BtnText>
                </BtnFilter>
                <BtnFilter>
                    <BtnText>Ordernar</BtnText>
                </BtnFilter>
                <BtnFilter>
                    <BtnText>Entregas</BtnText>
                </BtnFilter>
                 <BtnFilter>
                    <BtnText>Tipo de loja</BtnText>
                </BtnFilter>
                <BtnFilter>
                    <BtnText>Tipo de loja</BtnText>
                </BtnFilter>
                <BtnFilter>
                    <BtnText>Tipo de loja</BtnText>
                </BtnFilter>
                 <BtnFilter>
                    <BtnText>Tipo de loja</BtnText>
                </BtnFilter>
                <BtnFilter>
                    <BtnText>Tipo de loja</BtnText>
                </BtnFilter>
            </Scroll>
        </Container>
    );
}