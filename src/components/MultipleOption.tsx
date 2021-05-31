import React, { useState } from 'react';
import styled from 'styled-components/native';
import { MutationFunction } from '@apollo/client';

import InformationBtn from './InformationBtn';
import ModalConfirm from './ModalConfirm';
import ModalAlert from './ModalAlert';
import MultipleBar from './MultipleBar';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import { MULTIPLE_ARRAY, RECURRING_ARRAY } from '../styles/variables';
import colors from '../styles/sharedColors';

interface IProps {
    multipleIndex: number;
    setMultipleIndex: (multipleIndex: number) => void;
    updateOption: ({ multipleIndexProps, recurringIndexProps }) => void;
    isSubscribed: boolean;
    recurring: number;
    recurringIndex: boolean;
}

const Touchable = styled.TouchableOpacity``;

const ModalRow = styled.View`
    flex-direction: row;
    padding-left: 50px;
    align-items: center;
    margin-bottom: 10px;
    width: 260px;
`;
const WidthText = styled(Text)`
    width: 50px;
`;
const Bold = styled(Text)`
    font-weight: 800;
`;
const PrimaryColorText = styled(Bold)`
    margin-left: 5px;
    color: ${colors.primaryColor};
`;

const MultipleOption = React.memo<IProps>(
    ({ multipleIndex, setMultipleIndex, updateOption, isSubscribed, recurring, recurringIndex }) => {
        const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false); // 티클곱하기 확인을 위한 modal
        const [isAlertModalOpen, setIsAlertModalOpen] = useState<boolean>(false); // 티클곱하기 information을 위한 modal
        const [tempIndex, setTempIndex] = useState<number>(0); // alert에 표기를 위한 index

        const confirmTitle = '티클 곱하기';
        const confirmText = `이제부터 티클이 ${MULTIPLE_ARRAY[tempIndex]}배씩 모입니다.\n빠르게 티클을 모아보세요!`;

        const onConfirmOpen = (index: number) => {
            setIsConfirmModalOpen(true);
            setTempIndex(index); // alert에 표기를 위한 index를 set
        };
        const onConfirmCancel = () => setIsConfirmModalOpen(false);
        const onConfirmOk = () => {
            try {
                setMultipleIndex(tempIndex);
                updateOption({ multipleIndexProps: tempIndex });
            } catch (e) {
                console.log(e);
            } finally {
                setIsConfirmModalOpen(false);
            }
        };
        const onConfirmClose = () => setIsConfirmModalOpen(false);

        const alertTitle = '티클 곱하기';
        const alertText = '티클 곱하기를 이용해\n더욱 빠르게 티클을 모아보세요.';

        const onAlertOpen = () => setIsAlertModalOpen(true);
        const onAlertClose = () => setIsAlertModalOpen(false);
        const ModalAlertContent = () => (
            <>
                <ModalRow>
                    <WidthText>300원</WidthText>
                    <Bold>x2배 =</Bold>
                    <PrimaryColorText>600원</PrimaryColorText>
                </ModalRow>
                <ModalRow>
                    <WidthText />
                    <Bold>x3배 =</Bold>
                    <PrimaryColorText>900원</PrimaryColorText>
                </ModalRow>
                <ModalRow style={{ marginBottom: 0 }}>
                    <WidthText />
                    <Bold>x4배 =</Bold>
                    <PrimaryColorText>1,200원</PrimaryColorText>
                </ModalRow>
            </>
        );

        return (
            <React.Fragment>
                <Container>
                    <Row style={{ justifyContent: 'flex-start' }}>
                        <Text>티클 곱하기</Text>
                        <Touchable onPress={onAlertOpen}>
                            <InformationBtn />
                        </Touchable>
                    </Row>
                    <MultipleBar onConfirmOpen={onConfirmOpen} multipleIndex={multipleIndex} />
                    <GrayText>티클 곱하기를 이용해 티클을 모으는 속도를 조절합니다.</GrayText>
                    <GrayText>설정한 이후 발생한 카드 사용 내역부터 적용됩니다.</GrayText>
                </Container>
                <ModalConfirm
                    alertTitle={confirmTitle}
                    alertText={confirmText}
                    isModalOpen={isConfirmModalOpen}
                    onCancel={onConfirmCancel}
                    onOk={onConfirmOk}
                    onClose={onConfirmClose}
                    hasCancelBtn={true}
                />
                <ModalAlert
                    alertTitle={alertTitle}
                    alertText={alertText}
                    isModalOpen={isAlertModalOpen}
                    onClose={onAlertClose}>
                    <ModalAlertContent />
                </ModalAlert>
            </React.Fragment>
        );
    },
);

export default MultipleOption;
