import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

import colors from '../styles/sharedColors';

interface IProps {
    alertTitle: string;
    alertText: string;
    isModalOpen: boolean;
    onCancel: () => void;
    onOk: () => void;
    onClose: () => void;
    hasCancelBtn: boolean;
}

interface IStyle {
    hasCancelBtn: boolean;
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
    padding-bottom: 70px;
    align-items: center;
    justify-content: center;
`;

const ModalBox = styled.View`
    width: 260px;
    border-radius: 10px;
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
    width: ${(props) => (props.hasCancelBtn ? 130 : 260)}px;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-top-width: 0.5px;
    border-color: ${colors.borderColor};
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
    margin-top: 15px;
    text-align: center;
`;

const BtnText = styled.Text`
    font-size: 16px;
    font-weight: 800;
    color: ${colors.primaryColor};
`;

const ModalConfirm: React.FC<IProps> = ({
    alertTitle,
    alertText,
    isModalOpen,
    onCancel,
    onOk,
    onClose,
    hasCancelBtn = true,
}) => {
    return (
        <Modal transparent visible={isModalOpen}>
            <Background>
                <ModalBox>
                    <ModalTextBox>
                        <Title>{alertTitle}</Title>
                        <Text>{alertText}</Text>
                    </ModalTextBox>
                    {hasCancelBtn ? (
                        <BtnContainer>
                            <Touchable
                                style={{ borderBottomLeftRadius: 10, borderRightWidth: 0.5 }}
                                hasCancelBtn={hasCancelBtn}
                                onPress={onCancel}>
                                <BtnText style={{ color: colors.grayTextColor }}>취소</BtnText>
                            </Touchable>
                            <Touchable
                                style={{ borderBottomRightRadius: 10 }}
                                hasCancelBtn={hasCancelBtn}
                                onPress={onOk}>
                                <BtnText>확인</BtnText>
                            </Touchable>
                        </BtnContainer>
                    ) : (
                        <BtnContainer>
                            <Touchable
                                style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 20 }}
                                hasCancelBtn={hasCancelBtn}
                                onPress={onClose}>
                                <BtnText>확인</BtnText>
                            </Touchable>
                        </BtnContainer>
                    )}
                </ModalBox>
            </Background>
        </Modal>
    );
};

export default ModalConfirm;
