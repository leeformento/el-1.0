import React from 'react';
import styled from 'styled-components';


let Div = styled.div`

width: 100%;
height: 100%;

`;

// const BlackAltCircleDown = styled(AltCircleDown)`
//   color: red;
// `


let HeroImage = styled.img`
padding-top:20px;
    height: 100%;
    width: 100%;
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;  
`;

let BgImage = styled.img`
    /* margin-top: -100px; */
    height: 1000px;
    width: 100%;
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;  
`;

const MainHero = () => {
    return (
        <Div>
            <HeroImage alt="hero" src={require('./assets/Hero.png')}/>
            <BgImage alt="hero" src={require('./assets/bg.png')}/>
            {/* <i class="far fa-arrow-alt-circle-down"></i> */}
        </Div>
    )
}

export default MainHero;