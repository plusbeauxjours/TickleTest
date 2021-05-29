import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import colors from '../styles/sharedColors';

interface IProps {
    multipleValue: number;
    setMultipleValue: (multipleValue: number) => void;
}

const Touchable = styled.TouchableOpacity``;

const MultipleOption: React.FC<IProps> = ({ multipleValue, setMultipleValue }) => {
    const onPress = (value: number) => {
        const alertTitle = '티클 곱하기';
        const alertText = `이제부터 티클이 ${multipleValue}배씩 모입니다. 빠르게 티클을 모아보세요!`;
        const alertBtn = [
            {
                text: '취소',
                style: 'cancel',
                onPress: () => console.log('cancel'),
            },
            {
                text: '확인',
                onPress: () => setMultipleValue(value),
            },
        ];
        Alert.alert(alertTitle, alertText, alertBtn);
    };

    return (
        <Container>
            <Touchable onPress={() => onPress(1)}>
                <Row>
                    <Text>티클 곱하기</Text>
                </Row>
            </Touchable>
            <GrayText>티클 곱하기를 이용해 티클을 모으는 속도를 조절합니다.</GrayText>
            <GrayText>설정한 이후 발생한 카드 사용 내역부터 적용됩니다.</GrayText>
        </Container>
    );
};

export default MultipleOption;
