import React from 'react';
import styled from 'styled-components';
// import { AltCircleDown } from 'styled-icons/fa-regular/ArrowAltCircleDown';

let Div = styled.div`

width: 100%;
height: 100%;

`;

let i

let HeroImage = styled.img`
padding-top:20px;
    height: 100%;
    width: 100%;
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;  
`;

const MainHero = () => {
    return (
        <Div>
            <HeroImage alt="hero" src={require('./assets/Hero.png')}/>
            <i class="far fa-arrow-alt-circle-down"></i>
        </Div>
    )
}

export default MainHero;