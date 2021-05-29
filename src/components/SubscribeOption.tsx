import React from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import colors from '../styles/sharedColors';

interface IProps {
    price: number;
    isSubscribed: boolean;
    setPrice: (price: number) => void;
    setIsSubscribed: (isSubscribed: boolean) => void;
}

const Touchable = styled.TouchableOpacity``;

const SubscribeOption: React.FC<IProps> = ({ price, isSubscribed, setPrice, setIsSubscribed }) => {
    const onPress = () => {
        const alertTitle = '정기 티클';
        const alertText = isSubscribed
            ? '이제부터 일정금액을 매주 추가 저축합니다. 계속하시겠습니까?'
            : '정기 티클이 해제되었습니다.';
        const alertBtn = isSubscribed
            ? [
                  {
                      text: '취소',
                      style: 'cancel',
                      onPress: () => console.log('cancel'),
                  },
                  {
                      text: '확인',
                      onPress: () => setIsSubscribed(false),
                  },
              ]
            : [
                  {
                      text: '확인',
                      onPress: () => setIsSubscribed(true),
                  },
              ];
        Alert.alert(alertTitle, alertText, alertBtn);
    };

    return (
        <Container>
            <Touchable onPress={onPress}>
                <Row>
                    <Text>정기 티클</Text>
                </Row>
            </Touchable>
            <GrayText>모인 티클에 더해서 매주 추가 금액을 저축합니다.</GrayText>
        </Container>
    );
};

export default SubscribeOption;
