import React from 'react';
import styled from 'styled-components/native';

import Header from '../../components/Header';
import MultipleOption from '../../components/MultipleOption';
import SubscribeOption from '../../components/SubscribeOption';
import StopOption from '../../components/StopOption';

interface IProps {
    multipleIndex: number;
    setMultipleIndex: (multipleIndex: number) => void;
    recurring: number;
    setRecurring: (recurring: number) => void;
    recurringIndex: boolean;
    setRecurringIndex: (recurringIndex: number) => void;
    isSubscribed: number;
    setIsSubscribed: (isSubscribed: boolean) => void;
    isStoped: boolean;
    setIsStoped: (isStoped: boolean) => void;
    updateOption: ({ multipleIndexProps, recurringIndexProps }) => void;
}

const SafeAreaView = styled.SafeAreaView``;
const RootScreenPresenter: React.FC<IProps> = ({
    multipleIndex,
    setMultipleIndex,
    recurring,
    setRecurring,
    recurringIndex,
    setRecurringIndex,
    isSubscribed,
    setIsSubscribed,
    isStoped,
    setIsStoped,
    updateOption,
}) => {
    return (
        <React.Fragment>
            <SafeAreaView>
                <Header />
                <MultipleOption
                    multipleIndex={multipleIndex}
                    setMultipleIndex={setMultipleIndex}
                    updateOption={updateOption}
                />
                <SubscribeOption
                    recurring={recurring}
                    setRecurring={setRecurring}
                    recurringIndex={recurringIndex}
                    setRecurringIndex={setRecurringIndex}
                    isSubscribed={isSubscribed}
                    setIsSubscribed={setIsSubscribed}
                    updateOption={updateOption}
                />
                <StopOption isStoped={isStoped} setIsStoped={setIsStoped} />
            </SafeAreaView>
        </React.Fragment>
    );
};

export default RootScreenPresenter;
