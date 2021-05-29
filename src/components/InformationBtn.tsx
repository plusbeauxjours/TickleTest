import React from 'react';
import styled from 'styled-components/native';

const Circle = styled.View`
    width: 18px;
    height: 18px;
    border-radius: 9px;
    border-width: 1.2px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`;

const Text = styled.Text`
    font-size: 10px;
    font-weight: 800;
`;

const Point = styled.View`
    bottom: 1px;
    width: 2px;
    height: 2px;
    border-radius: 1px;
    background-color: black;
`;

const Line = styled.View`
    top: 1px;
    width: 2px;
    height: 5px;
    background-color: black;
`;

const InformationBtn = () => (
    <Circle>
        <Point />
        <Line />
        {/* <Text>i</Text> */}
    </Circle>
);

export default InformationBtn;
