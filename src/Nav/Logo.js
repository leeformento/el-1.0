import React from 'react';
import styled from 'styled-components';

let Div = styled.div`
display: flex;
flex-flow: row wrap;
width: 100%;
height: 70px;
border-bottom: 1px solid lightgray;
`;

let LogoImage = styled.img`
    height: 60px;
    width: auto;
    padding-left: 100px;
    padding-top: 5px;
`;



const Logo = () => {
    return (
        <Div>
            <LogoImage alt="logo" src={require('./assets/elc.png')}/>
        </Div>
    )
}

export default Logo;