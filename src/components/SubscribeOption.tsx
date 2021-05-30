import React, { useState } from 'react';
import styled from 'styled-components/native';

import ModalConfirm from './ModalConfirm';
import Switch from './Switch';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import { RECURRING_ARRAY } from '../styles/variables';
import colors from '../styles/sharedColors';
import MultipleBar from './MultipleBar';
import SubscribeBar from './SubscribeBar';

interface IProps {
    recurring: number;
    setRecurring: (recurring: number) => void;
    recurringIndex: boolean;
    setRecurringIndex: (recurringIndex: number) => void;
    isSubscribed: number;
    setIsSubscribed: (isSubscribed: boolean) => void;
}

interface IStyle {
    isEmpty: boolean;
}

const Touchable = styled.TouchableOpacity``;
const TextInput = styled.TextInput`
    padding: 10px 0;
`;
const TextInputLine = styled.View<IStyle>`
    height: 0.5px;
    background-color: ${(props) => (props.isEmpty ? colors.borderColor : colors.primaryColor)};
`;

const SubscribeOption = React.memo<IProps>(
    ({ recurring, setRecurring, recurringIndex, setRecurringIndex, isSubscribed, setIsSubscribed }) => {
        const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState<boolean>(false); // subscribe switch 확인을 위한 modal
        const [isRecurringModalOpen, setIsRecurringModalOpen] = useState<boolean>(false); // subscribe 금액 확인을 위한 modal
        const [isRecurringConfirmed, setIsRecurringConfirmed] = useState<boolean>(false);
        const [tempIndex, setTempIndex] = useState<number>(0); // alert에 표기를 위한 index

        const subscribeTitle = '정기 티클';
        const subscribeText = isSubscribed
            ? '정기 티클이 해제되었습니다.'
            : '이제부터 일정금액을 매주 추가\n저축합니다. 계속하시겠습니까?';
        const onSubscribeOpen = () => setIsSubscribeModalOpen(true);
        const onSubscribeCancel = () => setIsSubscribeModalOpen(false);
        const onSubscribeOk = () => {
            try {
                setIsSubscribed(true);
            } catch (e) {
                console.log(e);
            } finally {
                setIsSubscribeModalOpen(false);
            }
        };
        const onSubscribeClose = () => {
            setIsSubscribed(false);
            setIsSubscribeModalOpen(false);
        };

        const recurringTitle = '정기 티클';
        const recurringText = isRecurringConfirmed
            ? '정기 티클 설정이 완료되었습니다!'
            : `이제부터 매주 ${
                  tempIndex !== 3 ? RECURRING_ARRAY[tempIndex] : recurring
              }원이 추가로\n저축됩니다. 계속하시겠습니까?`;

        const onRecurringOpen = (index: number) => {
            if (index !== 3) {
                setIsRecurringModalOpen(true);
                setRecurringIndex(null);
                setTempIndex(index); // alert에 표기를 위한 index를 set
            } else {
                setRecurringIndex(index);
            }
        };
        const onRecurringCancel = () => setIsRecurringModalOpen(false);
        const onRecurringOk = () => {
            try {
                console.log('index', tempIndex);
                setRecurringIndex(tempIndex);
            } catch (e) {
                console.log(e);
            } finally {
                setIsRecurringConfirmed(!isRecurringConfirmed);
            }
        };
        const onRecurringClose = () => {
            setIsRecurringConfirmed(!isRecurringConfirmed);
            setIsRecurringModalOpen(false);
        };

        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Text>정기 티클</Text>
                        <Switch isOn={isSubscribed} onOpen={onSubscribeOpen} />
                    </Row>
                    <SubscribeBar
                        onRecurringOpen={onRecurringOpen}
                        recurringIndex={recurringIndex}
                        isSubscribed={isSubscribed}
                    />
                    {recurringIndex === 3 && ( // 0: 5,000 , 1: 10,000 , 2: 15,000 , 3: 직접입력
                        <Row>
                            <TextInput />
                            <TextInputLine isEmpty={recurring?.length === 0} />
                        </Row>
                    )}
                    <GrayText>모인 티클에 더해서 매주 추가 금액을 저축합니다.</GrayText>
                </Container>
                <ModalConfirm
                    alertTitle={subscribeTitle}
                    alertText={subscribeText}
                    isModalOpen={isSubscribeModalOpen}
                    onCancel={onSubscribeCancel}
                    onOk={onSubscribeOk}
                    onClose={onSubscribeClose}
                    hasCancelBtn={!isSubscribed}
                />
                <ModalConfirm
                    alertTitle={recurringTitle}
                    alertText={recurringText}
                    isModalOpen={isRecurringModalOpen}
                    onCancel={onRecurringCancel}
                    onOk={onRecurringOk}
                    onClose={onRecurringClose}
                    hasCancelBtn={!isRecurringConfirmed}
                />
            </React.Fragment>
        );
    },
);

export default SubscribeOption;
