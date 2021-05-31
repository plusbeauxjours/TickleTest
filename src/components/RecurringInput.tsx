import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import colors from '../styles/sharedColors';
import { numberWithCommas } from '../styles/variables';

interface IProps {
    recurring: number;
    setRecurring: (recurring: number) => void;
    isSubscribed: boolean;
    onRecurringOpen: (index: number) => void;
}

interface IStyle {
    isEmpty?: boolean;
    isSubscribed?: boolean;
    recurring?: number;
}

const { width } = Dimensions.get('screen');

const TextInput = styled.TextInput`
    padding: 0;
    color: black;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const TextInputLine = styled.View<IStyle>`
    width: ${width - 120}px;
    height: 0.5px;
    background-color: ${(props) => (props.isEmpty ? colors.grayColor : colors.primaryColor)};
    margin-right: 10px;
`;

const TextInputContainer = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
    align-items: flex-end;
`;
const Column = styled.View`
    flex-direction: column;
`;

const Button = styled.TouchableOpacity<IStyle>`
    width: 70px;
    height: 30px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${(props) =>
        !props.isSubscribed ? colors.trackColor : !props.recurring ? colors.lightGrayColor : colors.primaryColor};
`;

const ButtonText = styled.Text`
    color: ${(props) =>
        !props.isSubscribed ? colors.whiteColor : !props.recurring ? colors.grayTextColor : colors.whiteColor};
`;

const RecurringInput: React.FC<IProps> = ({ recurring, setRecurring, isSubscribed, onRecurringOpen }) => {
    return (
        <TextInputContainer>
            <Column>
                <TextInput
                    disabled={!isSubscribed}
                    onChangeText={(text) => isSubscribed && setRecurring(text.replace(/[^0-9]/g, ''))}
                    value={numberWithCommas(recurring)}
                    keyboardType={'number-pad'}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInputLine isEmpty={!recurring || !isSubscribed} />
            </Column>
            <Button
                disabled={!isSubscribed || !recurring}
                onPress={() => onRecurringOpen()}
                isSubscribed={isSubscribed}
                recurring={recurring}>
                <ButtonText isSubscribed={isSubscribed} recurring={recurring}>
                    확인
                </ButtonText>
            </Button>
        </TextInputContainer>
    );
};

export default RecurringInput;
