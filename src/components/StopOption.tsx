import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import ModalConfirm from './ModalConfirm';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import colors from '../styles/sharedColors';
import Switch from './Switch';

interface IProps {
    isStoped: boolean;
    setIsStoped: (isStoped: boolean) => void;
}

const StopOption: React.FC<IProps> = ({ isStoped, setIsStoped }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const alertTitle = '티클 일시중지';
    const alertText = isStoped
        ? '티클 일시중지가 해제되었습니다.'
        : '이제부터 티클 모으기를\n일시중지합니다. 계속하시겠습니까?';

    const onOpen = () => setIsModalOpen(true);
    const onCancel = () => setIsModalOpen(false);
    const onOk = () => {
        try {
            setIsStoped(true);
        } catch (e) {
            console.log(e);
        } finally {
            setIsModalOpen(false);
        }
    };
    const onClose = () => {
        setIsStoped(false);
        setIsModalOpen(false);
    };

    return (
        <React.Fragment>
            <Container style={{ borderBottomWidth: 0 }}>
                <Row>
                    <Text>티클 일시중지</Text>
                    <Switch isOn={isStoped} onOpen={onOpen} />
                </Row>
                <GrayText>일시적으로 티클 모으기를 중지합니다.</GrayText>
            </Container>
            <ModalConfirm
                alertTitle={alertTitle}
                alertText={alertText}
                isModalOpen={isModalOpen}
                onCancel={onCancel}
                onOk={onOk}
                onClose={onClose}
                hasCancelBtn={!isStoped}
            />
        </React.Fragment>
    );
};

export default StopOption;
