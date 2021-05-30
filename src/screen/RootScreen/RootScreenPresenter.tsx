import React from 'react';
import styled from 'styled-components/native';

import Header from '../../components/Header';
import MultipleOption from '../../components/MultipleOption';
import SubscribeOption from '../../components/SubscribeOption';
import StopOption from '../../components/StopOption';

interface IProps {
    multipleIndex: number;
    setMultipleIndex: (multipleIndex: number) => void;
    price: number;
    isSubscribed: boolean;
    setPrice: (price: number) => void;
    setIsSubscribed: (isSubscribed: boolean) => void;
    isStoped: boolean;
    setIsStoped: (isStoped: boolean) => void;
}

const SafeAreaView = styled.SafeAreaView``;
const RootScreenPresenter: React.FC<IProps> = ({
    multipleIndex,
    setMultipleIndex,
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
                <MultipleOption multipleIndex={multipleIndex} setMultipleIndex={setMultipleIndex} />
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
