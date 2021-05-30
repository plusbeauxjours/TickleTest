import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
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
    padding: ${PADDING}px;
`;
const Touchable = styled.TouchableOpacity``;

const Switch: React.FC<IProps> = ({ isOn, onOpen }) => {
    const translation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(translation, {
            toValue: isOn ? 20 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [isOn]);

    return (
        <Touchable activeOpacity={1} onPress={onOpen}>
            <Track isOn={isOn} activeOpacity>
                <Thumb as={Animated.View} style={{ transform: [{ translateX: translation }] }} />
            </Track>
        </Touchable>
    );
};

export default Switch;
