import React from 'react';
import styled from 'styled-components';


let Div = styled.div`

width: 100%;
height: 100%;

`;


let HeroImage = styled.img`
padding-top:20px;
    height: 100%;
    width: 100%;
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;  
`;

let BgImage = styled.img`
    margin-top: -50px;
    width: 100%;
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;  
`;

let Sofaman = styled.img`
    margin-top: -14px;
    width: 100%;
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;  
`;

let DivText = styled.h2`
      /* position: absolute;  */
     /* bottom: 8px;
    left: 16px;  */
    font-size: 1.2em;
    text-align: center;
    color: white;
    margin-top: -150px;
    font-family: 'Montserrat';

`;
let DivP = styled.h2`
      /* position: absolute;  */
     /* bottom: 8px;
    left: 16px;  */
    font-size: 1em;
    text-align: center;
    color: white;
    margin-top: -10px;
    font-family: 'Montserrat';

`;

const MainHero = () => {
    return (
        <Div>
            <HeroImage alt="hero" src={require('./assets/Hero.png')}/>
            <BgImage alt="hero" src={require('./assets/bg2.svg')}/>
            {/* <i class="far fa-arrow-alt-circle-down"></i> */}
            <Sofaman alt="hero" src={require('./assets/sofaman.jpg')}/>
            <Div>
            <DivText> The new generation of seating. </DivText>
            </Div>
            <Div>
            <DivP> Watch the film <i class="far fa-play-circle"></i> </DivP>
            </Div>

        </Div>
    )
}

export default MainHero;