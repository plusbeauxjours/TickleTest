import React from 'react';
import styled from 'styled-components/native';

import Header from '../../components/Header';
import MultipleOption from '../../components/MultipleOption';
import SubscribeOption from '../../components/SubscribeOption';
import StopOption from '../../components/StopOption';

interface IProps {
    multipleValue: number;
    setMultipleValue: (value: number) => void;
    price: number;
    isSubscribed: boolean;
    setPrice: (price: number) => void;
    setIsSubscribed: (isSubscribed: boolean) => void;
    isStoped: boolean;
    setIsStoped: (isStoped: boolean) => void;
}

const SafeAreaView = styled.SafeAreaView``;
const RootScreenPresenter: React.FC<IProps> = ({
    multipleValue,
    setMultipleValue,
    price,
    isSubscribed,
    setPrice,
    setIsSubscribed,
    isStoped,
    setIsStoped,
}) => {
    return (
        <React.Fragment>
            <SafeAreaView>
                <Header />
                <MultipleOption multipleValue={multipleValue} setMultipleValue={setMultipleValue} />
                <SubscribeOption
                    price={price}
                    isSubscribed={isSubscribed}
                    setPrice={setPrice}
                    setIsSubscribed={setIsSubscribed}
                />
                <StopOption isStoped={isStoped} setIsStoped={setIsStoped} />
            </SafeAreaView>
        </React.Fragment>
    );
};

export default RootScreenPresenter;
