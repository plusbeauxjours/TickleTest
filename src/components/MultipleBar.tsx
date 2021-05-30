import React from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';

import { GrayText } from '../styles/sharedStyles';
import colors from '../styles/sharedColors';
import { MULTIPLE_ARRAY } from '../styles/variables';

interface IProps {
    onConfirmOpen: () => void;
    multipleIndex: number;
}

interface IStyle {
    index: number;
}

const { width } = Dimensions.get('screen');

const DEFAULT_PADDING = 20; // 스크린에서 사용하는 padding
const BAR_PADDING = DEFAULT_PADDING + 15; // bar는 스크린에서 사용하는 width보다 짧음
const VERTICAL_LINE_HEIGHT = 12;
const THUMB_SIZE = VERTICAL_LINE_HEIGHT * 2.5;
const BAR_WIDTH = width - BAR_PADDING * 2;
const MULTIPLE_LAST_INDEX = MULTIPLE_ARRAY.length - 1;

const MultipleBarContainer = styled.View`
    margin-top: 15px;
    height: 60px;
`;

const HorizontalLine = styled.View`
    position: absolute;
    align-self: center;
    width: ${BAR_WIDTH}px;
    top: ${VERTICAL_LINE_HEIGHT / 2}px;
    height: 1px;
    background-color: ${colors.trackColor};
`;

const VerticalLine = styled.View`
    width: 1px;
    height: ${VERTICAL_LINE_HEIGHT}px;
    background-color: ${colors.trackColor};
`;

const BarContainer = styled.View`
    width: ${BAR_WIDTH}px;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
`;

const VerticalText = styled(GrayText)<IStyle>`
    margin-top: 10px;
    text-align: center;
    width: 40px;
`;

const VerticalTextContainer = styled.TouchableOpacity<IStyle>`
    position: absolute;
    height: 40px;
    left: ${(props) => (BAR_WIDTH / MULTIPLE_LAST_INDEX) * props.index - DEFAULT_PADDING}px;
    align-items: center;
`;

const Thumb = styled.View<IStyle>`
    position: absolute;
    width: ${THUMB_SIZE}px;
    height: ${THUMB_SIZE}px;
    border-radius: ${THUMB_SIZE / 2}px;
    background-color: ${colors.primaryColor};
    top: -9px;
    left: ${(props) => (BAR_WIDTH / MULTIPLE_LAST_INDEX) * props.index}px;
    box-shadow: 2px 2px 2px rgba(100, 100, 100, 0.5);
    elevation: 2;
`;

const MultipleBar: React.FC<IProps> = ({ onConfirmOpen, multipleIndex }) => {
    return (
        <MultipleBarContainer>
            <HorizontalLine />
            <BarContainer>
                {MULTIPLE_ARRAY.map((_, index) => (
                    <VerticalTextContainer
                        key={index}
                        onPress={() => onConfirmOpen(index)}
                        index={index}
                        activeOpacity={1}>
                        <VerticalLine />
                        <VerticalText index={index}>{MULTIPLE_ARRAY[index]}배</VerticalText>
                    </VerticalTextContainer>
                ))}
            </BarContainer>
            <Thumb index={multipleIndex} />
        </MultipleBarContainer>
    );
};

export default MultipleBar;
