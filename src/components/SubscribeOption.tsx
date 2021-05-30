import React, { useState } from 'react';
import styled from 'styled-components/native';

import ModalConfirm from './ModalConfirm';

import { GrayText, Text, Container, Row } from '../styles/sharedStyles';
import colors from '../styles/sharedColors';
import Switch from './Switch';

interface IProps {
    price: number;
    isSubscribed: boolean;
    setPrice: (price: number) => void;
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

const SubscribeOption: React.FC<IProps> = ({
    price,
    setPrice,
    priceIndex,
    setPriceIndex,
    isSubscribed,
    setIsSubscribed,
}) => {
    const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState<boolean>(false);
    const [isPriceModalOpen, setIsPriceModalOpen] = useState<boolean>(false);
    const [isPriceConfirmed, setIsPriceConfirmed] = useState<boolean>(true);

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

    const priceTitle = '정기 티클';
    const priceText = isPriceConfirmed
        ? '정기 티클 설정이 완료되었습니다!'
        : `이제부터 매주 ${price}원이 추가로\n저축됩니다. 계속하시겠습니까?`;

    const onPriceOpen = () => setIsPriceModalOpen(true);
    const onPriceCancel = () => setIsPriceModalOpen(false);
    const onPriceOk = () => {
        try {
        } catch (e) {
            console.log(e);
        } finally {
            setIsPriceConfirmed(!isPriceConfirmed);
        }
    };
    const onPriceClose = () => {
        setIsPriceConfirmed(!isPriceConfirmed);
        setIsPriceModalOpen(false);
    };

    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Text>정기 티클</Text>
                    <Switch isOn={isSubscribed} onOpen={onSubscribeOpen} />
                    <Touchable onPress={onPriceOpen}>
                        <Text>price 테스트</Text>
                    </Touchable>
                </Row>
                {priceIndex === 3 && ( // 3: 집적입력
                    <Row>
                        <TextInput />
                        <TextInputLine isEmpty={!price} />
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
                alertTitle={priceTitle}
                alertText={priceText}
                isModalOpen={isPriceModalOpen}
                onCancel={onPriceCancel}
                onOk={onPriceOk}
                onClose={onPriceClose}
                hasCancelBtn={!isPriceConfirmed}
            />
        </React.Fragment>
    );
};

export default SubscribeOption;
