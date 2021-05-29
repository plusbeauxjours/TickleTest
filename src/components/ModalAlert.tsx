import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

import colors from '../styles/sharedColors';

interface IProps {
    alertTitle: string;
    alertText: string;
    visible: boolean;
}

interface IStyle {
    isConfirmModal: boolean;
}

const Background = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
`;

const ModalBox = styled.View`
    width: 260px;
    height: 260px;
    border-radius: 20px;
    background-color: ${colors.whiteColor};
`;

const BtnContainer = styled.View`
    width: 260px;
    height: 50px;
    flex-direction: row;
    position: absolute;
    bottom: 0;
`;

const Touchable = styled.TouchableOpacity<IStyle>`
    width: ${(props) => (props.isConfirmModal ? 260 : 130)}px;
    height: 50px;
    justify-content: center;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 18px;
    font-weight: 800;
`;
const Text = styled.Text``;
const BtnText = styled(Title)`
    color: ${colors.primaryColor};
`;

const ModalAlert: React.FC<IProps> = ({ alertTitle, alertText, visible, isConfirmModal }) => {
    return (
        <Modal animationType="fade" transparent visible={visible}>
            <Background>
                <ModalBox>
                    <Title>{alertTitle}</Title>
                    <Text>{alertText}</Text>
                    {isConfirmModal ? (
                        <BtnContainer>
                            <Touchable
                                style={{ borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}
                                isConfirmModal={isConfirmModal}
                                onPress={() => null}>
                                <BtnText>확인</BtnText>
                            </Touchable>
                        </BtnContainer>
                    ) : (
                        <BtnContainer>
                            <Touchable style={{ borderBottomLeftRadius: 20 }} onPress={() => null}>
                                <BtnText>취소</BtnText>
                            </Touchable>
                            <Touchable
                                style={{ borderBottomRightRadius: 20 }}
                                isConfirmModal={isConfirmModal}
                                onPress={() => null}>
                                <BtnText>확인</BtnText>
                            </Touchable>
                        </BtnContainer>
                    )}
                </ModalBox>
            </Background>
        </Modal>
    );
};

export default ModalAlert;
