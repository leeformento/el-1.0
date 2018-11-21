import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';


let Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin-top: -45px;
    margin-right: 80px;
    box-sizing: border-box;
    height: 25px;
   
    /* @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v12/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
} */
    
`;

let NavItem = styled.div `
    color: gray;
    word-spacing: 3px;
    font-family: 'Montserrat';

`

let NavBar = props => {
    return (
        <header>
        <   Logo />
            <Nav>
                {/* <NavItem> SofaX  &nbsp;</NavItem> */}
                {/* <NavItem> SofaX &nbsp;</NavItem>
                <NavItem> SofaZ  &nbsp;</NavItem> */}
            </Nav>
        </header>
    )
}

export default NavBar;