import React, { useState } from 'react';
import { MutationFunction } from '@apollo/client';

import ModalConfirm from './ModalConfirm';
import Switch from './Switch';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import { MULTIPLE_ARRAY, numberWithCommas, RECURRING_ARRAY } from '../styles/variables';
import SubscribeBar from './SubscribeBar';
import RecurringInput from './RecurringInput';

interface IProps {
    multipleIndex: number;
    recurring: number;
    setRecurring: (recurring: number) => void;
    recurringIndex: boolean;
    setRecurringIndex: (recurringIndex: number) => void;
    isSubscribed: number;
    setIsSubscribed: (isSubscribed: boolean) => void;
    updateOption: ({ multipleIndexProps, recurringIndexProps }) => void;
}

const SubscribeOption = React.memo<IProps>(
    ({
        multipleIndex,
        recurring,
        setRecurring,
        recurringIndex,
        setRecurringIndex,
        isSubscribed,
        setIsSubscribed,
        updateOption,
    }) => {
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
            // alert의 취소/확인버튼
            try {
                setIsSubscribed(true);
                updateOption({ recurringIndexProps: tempIndex });
            } catch (e) {
                console.log(e);
            } finally {
                setIsSubscribeModalOpen(false);
            }
        };
        const onSubscribeClose = () => {
            //  alert의 확인버튼
            try {
                setIsSubscribed(true);
                updateOption({ recurringIndexProps: tempIndex });
            } catch (e) {
                console.log(e);
            } finally {
                setIsSubscribed(false);
                setIsSubscribeModalOpen(false);
            }
        };

        const recurringTitle = '정기 티클';
        const recurringText = isRecurringConfirmed
            ? '정기 티클 설정이 완료되었습니다!'
            : `이제부터 매주 ${
                  tempIndex === 3 ? recurring : numberWithCommas(RECURRING_ARRAY[tempIndex])
              }원이 추가로\n저축됩니다. 계속하시겠습니까?`;

        const onRecurringOpen = (index: number) => {
            if (!index && index !== 0) {
                console.log('[][]', index);
                // 직접입력에서 확인을 탭
                setIsRecurringModalOpen(true);
                setRecurringIndex(index);
            } else if (index === 3) {
                // 바에서 직접입력을 탭
                setRecurring(null);
                setRecurringIndex(3);
                setTempIndex(3);
            } else {
                // 바에서 직접입력을 제외한 금액을 탭
                setIsRecurringModalOpen(true);
                setTempIndex(index); // alert에 표기를 위한 index를 set
            }
        };
        const onRecurringCancel = () => setIsRecurringModalOpen(false);
        const onRecurringOk = () => {
            // alert의 취소/확인버튼
            try {
                setRecurringIndex(tempIndex);
                updateOption({ recurringIndexProps: tempIndex });
            } catch (e) {
                console.log(e);
            } finally {
                setIsRecurringConfirmed(!isRecurringConfirmed);
            }
        };
        const onRecurringClose = () => {
            //  alert의 확인버튼
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
                        <RecurringInput
                            recurring={recurring}
                            setRecurring={setRecurring}
                            isSubscribed={isSubscribed}
                            onRecurringOpen={onRecurringOpen}
                        />
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
