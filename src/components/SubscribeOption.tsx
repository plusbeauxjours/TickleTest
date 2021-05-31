import React, { useState } from 'react';

import ModalConfirm from './ModalConfirm';
import Switch from './Switch';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import { numberWithCommas, RECURRING_ARRAY } from '../styles/variables';
import SubscribeBar from './SubscribeBar';
import RecurringInput from './RecurringInput';

interface IProps {
    recurring: number;
    setRecurring: (recurring: number) => void;
    recurringIndex: boolean;
    setRecurringIndex: (recurringIndex: number) => void;
    isSubscribed: number;
    setIsSubscribed: (isSubscribed: boolean) => void;
    updateOption: ({ multipleIndexProps, recurringIndexProps }) => void;
}

const SubscribeOption = React.memo<IProps>(
    ({ recurring, setRecurring, recurringIndex, setRecurringIndex, isSubscribed, setIsSubscribed, updateOption }) => {
        const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState<boolean>(false); // subscribe switch 확인을 위한 modal
        const [isRecurringModalOpen, setIsRecurringModalOpen] = useState<boolean>(false); // subscribe 금액 확인을 위한 modal
        const [isRecurringConfirmed, setIsRecurringConfirmed] = useState<boolean>(false); // alert 취소/확인을 택하였을 때의 alert message 전환
        const [tempIndex, setTempIndex] = useState<number>(0); // alert에 표기를 위한 index

        //
        // Switch
        //
        const subscribeTitle = '정기 티클';
        const subscribeText = isSubscribed
            ? '정기 티클이 해제되었습니다.'
            : '이제부터 일정금액을 매주 추가\n저축합니다. 계속하시겠습니까?';
        const onSubscribeOpen = () => setIsSubscribeModalOpen(true); // Switch를 탭하였을 떄
        const onSubscribeCancel = () => setIsSubscribeModalOpen(false); // Alert의 취소/확인버튼 (취소)
        const onSubscribeOk = () => {
            // Alert의 취소/확인버튼 (확인)
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
            //  Alert의 확인버튼
            try {
                setIsSubscribed(false);
                updateOption({ recurringIndexProps: tempIndex });
            } catch (e) {
                console.log(e);
            } finally {
                setIsSubscribeModalOpen(false);
            }
        };

        //
        // Bar
        //
        const recurringTitle = '정기 티클';
        const recurringText = isRecurringConfirmed
            ? '정기 티클 설정이 완료되었습니다!'
            : `이제부터 매주 ${
                  tempIndex === 3 ? numberWithCommas(recurring) : numberWithCommas(RECURRING_ARRAY[tempIndex])
              }원이 추가로\n저축됩니다. 계속하시겠습니까?`;
        const onRecurringCancel = () => setIsRecurringModalOpen(false); // Alert의 취소/확인버튼 (취소)
        const onRecurringOpen = (index: number = null) => {
            // Bar의 5,000월, 10,000원, 15,000원, 직접입력을 탭하였을 때
            if (!index && index !== 0) {
                // 직접입력에서 확인을 탭
                setIsRecurringModalOpen(true);
                setRecurringIndex(3);
            } else if (index === 3) {
                // Bar에서 직접입력을 탭
                setRecurring(null);
                setRecurringIndex(3);
                setTempIndex(3);
            } else {
                // Bar에서 직접입력을 제외한 금액 5,000월, 10,000원, 15,000원을 탭
                setTempIndex(index); // Alert에 표기를 위한 index를 set
                setIsRecurringModalOpen(true);
            }
        };
        const onRecurringOk = () => {
            // Alert의 취소/확인버튼 (확인)
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
            //  Alert의 확인버튼
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
