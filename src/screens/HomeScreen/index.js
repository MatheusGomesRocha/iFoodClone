import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container,

    Scroll,

    AdressView,     // Na verdade é um btn
    AdressText,

    ScrollHorizontal,

    BtnFilter,
    BtnText,

    ScrollImages,
    ImgView,
    Img,
    ImgTitle,
} from './style';

export default () => {
    return(
        <Container>
            <Scroll>

                <AdressView>
                    <>
                        <AdressText>R. Santos Dumont, 3008</AdressText>
                        <Icon style={{marginLeft: 10}} name="angle-down" size={18} color="#ea1d2c"/>
                    </>
                </AdressView>
                
                <ScrollHorizontal horizontal={true} showsHorizontalScrollIndicator={false}>

                <BtnFilter style={{marginLeft: 15}}>
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

                 <BtnFilter style={{marginRight: 15}}>
                    <BtnText>Super Restaurante</BtnText>
                </BtnFilter>

                </ScrollHorizontal>

                <ScrollImages horizontal={true} showsHorizontalScrollIndicator={false} decelerationRate="fast">
                    <ImgView style={{marginLeft: 15}}>
                        <Img source={require('../../assets/img/supermercado.jpg')} />
                        <ImgTitle>Mercado</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/promoçoes.jpg')} />
                        <ImgTitle>Promoções</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/vale_refeiçao.jpg')} />
                        <ImgTitle>Vale-refeição</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/açai.jpg')} />
                        <ImgTitle>Açai</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/doces_bolos.jpg')} />
                        <ImgTitle>Doces & Bolos</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/salgados.jpg')} />
                        <ImgTitle>Salgados</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/pastel.jpg')} />
                        <ImgTitle>Pastel</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/sorvetes.jpg')} />
                        <ImgTitle>Sorvetes</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/padarias.jpg')} />
                        <ImgTitle>Padaria</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/brasileira.jpg')} />
                        <ImgTitle>Brasileira</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/saudavel.jpg')} />
                        <ImgTitle>Saudável</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/bebida.jpg')} />
                        <ImgTitle>Bebidas</ImgTitle>
                    </ImgView>

                    <ImgView>
                        <Img source={require('../../assets/img/pizza.jpg')} />
                        <ImgTitle>Pizza</ImgTitle>
                    </ImgView>

                    <ImgView style={{marginRight: 15}}>
                        <Img source={require('../../assets/img/vegetariana.jpg')} />
                        <ImgTitle>Vegetariana</ImgTitle>
                    </ImgView>
                </ScrollImages>


            </Scroll>
        </Container>
    );
}