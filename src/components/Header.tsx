import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    height: 50px;
`;
const Header = () => {
    return (
        <Container>
            <Text>Header</Text>
        </Container>
    );
};

export default Header;
