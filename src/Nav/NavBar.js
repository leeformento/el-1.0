import React from 'react';
import Logo from './Logo';
import styled from 'styled-components';


let Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin-top: -45px;
    margin-right: 80px;
    box-sizing: border-box;
    
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
                <NavItem> SofaX  &nbsp;</NavItem>
                <NavItem> SofaX &nbsp;</NavItem>
                <NavItem> SofaZ  &nbsp;</NavItem>
            </Nav>
        </header>
    )
}

export default NavBar;