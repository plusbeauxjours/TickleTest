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
const Header = () => {
    return (
        <Container>
            <Title>티클 옵션</Title>
        </Container>
    );
};

export default Header;
