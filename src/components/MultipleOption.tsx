import React, { useState } from 'react';
import styled from 'styled-components/native';

import InformationBtn from './InformationBtn';
import ModalConfirm from './ModalConfirm';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import colors from '../styles/sharedColors';

interface IProps {
    multipleValue: number;
    setMultipleValue: (multipleValue: number) => void;
}

const Touchable = styled.TouchableOpacity``;

const MultipleOption: React.FC<IProps> = ({ multipleValue, setMultipleValue }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const alertTitle = '티클 곱하기';
    const alertText = `이제부터 티클이 ${multipleValue}배씩 모입니다.\n빠르게 티클을 모아보세요!`;

    const onOpen = () => setIsModalOpen(true);
    const onCancel = () => setIsModalOpen(false);
    const onOk = () => {
        try {
        } catch (e) {
            console.log(e);
        } finally {
            setIsModalOpen(false);
        }
    };
    const onClose = () => setIsModalOpen(false);

    return (
        <React.Fragment>
            <Container>
                <Row style={{ justifyContent: 'flex-start' }}>
                    <Text>티클 곱하기</Text>
                    <Touchable onPress={onOpen}>
                        <InformationBtn />
                    </Touchable>
                </Row>
                <GrayText>티클 곱하기를 이용해 티클을 모으는 속도를 조절합니다.</GrayText>
                <GrayText>설정한 이후 발생한 카드 사용 내역부터 적용됩니다.</GrayText>
            </Container>
            <ModalConfirm
                alertTitle={alertTitle}
                alertText={alertText}
                isModalOpen={isModalOpen}
                onCancel={onCancel}
                onOk={onOk}
                onClose={onClose}
                hasCancelBtn={true}
            />
        </React.Fragment>
    );
};

export default MultipleOption;
