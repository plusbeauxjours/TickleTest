import React from 'react';
import styled from 'styled-components/native';
import colors from '../styles/sharedColors';

interface IProps {
    isOn: boolean;
    onOpen: () => void;
}

const TRACK_WIDTH = 50;
const PADDING = 2;

const Thumb = styled.View`
    width: ${TRACK_WIDTH * 0.6 - PADDING * 2}px;
    height: ${TRACK_WIDTH * 0.6 - PADDING * 2}px;
    border-radius: ${(TRACK_WIDTH * 0.6) / 2}px;
    background-color: ${colors.whiteColor};
`;

const Track = styled.View<IProps>`
    width: ${TRACK_WIDTH}px;
    height: ${TRACK_WIDTH * 0.6}px;
    border-radius: ${(TRACK_WIDTH * 0.6) / 2}px;
    background-color: ${(props) => (props.isOn ? colors.primaryColor : colors.trackColor)};
    justify-content: center;
    align-items: ${(props) => (props.isOn ? 'flex-end' : 'flex-start')};
    padding: ${PADDING}px;
`;
const Touchable = styled.TouchableOpacity``;

const Switch: React.FC<IProps> = ({ isOn, onOpen }) => {
    return (
        <Touchable activeOpacity={1} onPress={onOpen}>
            <Track isOn={isOn} activeOpacity>
                <Thumb />
            </Track>
        </Touchable>
    );
};

export default Switch;
