import React from 'react';
import styled from 'styled-components/native';

import { Title } from '../styles/sharedStyles';

const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 20px;
`;

const Image = styled.Image`
    width: 28px;
    height: 28px;
`;

const Header = () => {
    return (
        <Container>
            <Title>티클 옵션</Title>
            <Image source={require('../assets/help-icon.png')} />
        </Container>
    );
};

export default Header;
