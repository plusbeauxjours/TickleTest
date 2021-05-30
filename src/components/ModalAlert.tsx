import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

import colors from '../styles/sharedColors';

interface IProps {
    alertTitle: string;
    alertText: string;
    visible: boolean;
}

const Background = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
`;

const ModalTextBox = styled.View`
    min-height: 160px;
    padding: 50px 15px;
    padding-bottom: 15px;
    align-items: center;
    justify-content: center;
`;

const ModalBox = styled.View`
    width: 260px;
    border-radius: 10px;
    background-color: ${colors.whiteColor};
`;

const CloseIconContainer = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 10px;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 800;
    position: absolute;
    top: 25px;
    text-align: center;
`;

const Text = styled.Text`
    font-size: 16px;
    line-height: 22px;
    text-align: center;
`;
const Icon = styled(Text)`
    margin-top: 15px;
    font-size: 20;
`;

const Content = styled.View`
    margin: 15px 0;
    align-items: center;
    justify-content: center;
`;

const ModalAlert: React.FC<IProps> = ({ alertTitle, alertText, isModalOpen, onClose, children }) => {
    return (
        <Modal transparent visible={isModalOpen}>
            <Background>
                <ModalBox>
                    <ModalTextBox>
                        <Title>{alertTitle}</Title>
                        <CloseIconContainer onPress={onClose}>
                            <Icon>✕</Icon>
                        </CloseIconContainer>
                        {children && <Content>{children}</Content>}
                        <Text>{alertText}</Text>
                    </ModalTextBox>
                </ModalBox>
            </Background>
        </Modal>
    );
};

export default ModalAlert;
