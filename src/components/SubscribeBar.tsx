import React from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';

import { GrayText } from '../styles/sharedStyles';
import colors from '../styles/sharedColors';
import { RECURRING_ARRAY } from '../styles/variables';

interface IProps {
    onRecurringOpen: () => void;
    recurringIndex: number;
    isSubscribed: boolean;
}

interface IStyle {
    isSelected: boolean;
    isSubscribed: boolean;
}

const { width } = Dimensions.get('screen');

const DEFAULT_PADDING = 20; // 스크린에서 사용하는 padding
const BAR_HEIGHT = 35;
const BAR_WIDTH = width - DEFAULT_PADDING * 2;
const RECURRING_LAST_INDEX = RECURRING_ARRAY.length - 1;
const THUMB_WIDTH = BAR_WIDTH / 4 - 10;

const SubscribeBarContainer = styled.View`
    height: ${BAR_HEIGHT + 20}px;
`;

const BarContainer = styled.View`
    flex-direction: row;
    height: ${BAR_HEIGHT}px;
    width: ${BAR_WIDTH}px;
    justify-content: space-around;
    align-self: center;
    align-items: center;
    background-color: ${colors.lightGrayColor};
    border-radius: 10px;
`;

const Text = styled(GrayText)<IStyle>`
    z-index: 10;
    text-align: center;
    color: ${(props) => (props.isSelected ? colors.whiteColor : colors.grayTextColor)};
`;

const VerticalTextContainer = styled.TouchableOpacity`
    flex-direction: row;
    width: ${BAR_WIDTH / 4}px;
    height: ${BAR_HEIGHT}px;
    justify-content: center;
    align-items: center;
`;

const VerticalLine = styled.View`
    height: ${BAR_HEIGHT - 20}px;
    margin: 10px 
    width: 0.5px;
    background-color: ${colors.grayColor};
`;

const Thumb = styled.View`
    position: absolute;
    width: ${THUMB_WIDTH}px;
    height: ${BAR_HEIGHT - 4}px;
    border-radius: 8px;
    background-color: ${(props) => (props.isSubscribed ? colors.primaryColor : colors.trackColor)};
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 3px rgba(100, 100, 100, 0.5);
    elevation: 2;
`;

const SubscribeBar: React.FC<IProps> = ({ onRecurringOpen, recurringIndex, isSubscribed }) => {
    return (
        <SubscribeBarContainer>
            <BarContainer>
                {RECURRING_ARRAY.map((_, index) => (
                    <React.Fragment key={index}>
                        <VerticalTextContainer
                            key={index}
                            disabled={!isSubscribed || recurringIndex === index}
                            onPress={() => onRecurringOpen(index)}
                            index={index}
                            activeOpacity={1}>
                            {recurringIndex === index ? (
                                <Thumb index={recurringIndex} isSubscribed={isSubscribed}>
                                    <Text isSelected={recurringIndex === index}>
                                        {index !== RECURRING_LAST_INDEX ? `${RECURRING_ARRAY[index]}원` : '직접입력'}
                                    </Text>
                                </Thumb>
                            ) : (
                                <Text isSelected={recurringIndex === index}>
                                    {index !== RECURRING_LAST_INDEX ? `${RECURRING_ARRAY[index]}원` : '직접입력'}
                                </Text>
                            )}
                        </VerticalTextContainer>
                        {index !== RECURRING_LAST_INDEX && <VerticalLine />}
                    </React.Fragment>
                ))}
            </BarContainer>
        </SubscribeBarContainer>
    );
};

export default SubscribeBar;
