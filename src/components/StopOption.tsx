import React from 'react';
import { Alert, Switch } from 'react-native';
import styled from 'styled-components/native';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import colors from '../styles/sharedColors';

interface IProps {
    isStoped: boolean;
    setIsStoped: (isStoped: boolean) => void;
}

const Touchable = styled.TouchableOpacity``;

const StopOption: React.FC<IProps> = ({ isStoped, setIsStoped }) => {
    const onPress = () => {
        const alertTitle = '티클 일시중지';
        const alertText = isStoped
            ? '티클 일시중지가 해제되었습니다.'
            : '이제부터 티클 모으기를 일시중지합니다. 계속하시겠습니까?';
        const alertBtn = isStoped
            ? [
                  {
                      text: '확인',
                      onPress: () => setIsStoped(false),
                  },
              ]
            : [
                  {
                      text: '취소',
                      style: 'cancel',
                      onPress: () => console.log('cancel'),
                  },
                  {
                      text: '확인',
                      onPress: () => setIsStoped(true),
                  },
              ];
        Alert.alert(alertTitle, alertText, alertBtn);
    };

    return (
        <Container style={{ borderBottomWidth: 0 }}>
            <Touchable onPress={onPress}>
                <Row>
                    <Text>티클 일시중지</Text>
                    <Switch />
                </Row>
            </Touchable>
            <GrayText>일시적으로 티클 모으기를 중지합니다.</GrayText>
        </Container>
    );
};

export default StopOption;
