import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';

import RootScreenPresenter from './RootScreenPresenter';

import GET_OPTION from '../../queries/getOption';
import UPDATE_OPTION from '../../mutations/updateOption';
import { MULTIPLE_ARRAY, RECURRING_ARRAY } from '../../styles/variables';

const RootScreenContainer = () => {
    const [multipleIndex, setMultipleIndex] = useState<number>(0); // 0: 1 , 1: 2 , 2: 3 , 3: 4 , 4: 10
    const [recurringIndex, setRecurringIndex] = useState<number | string>(null); // 0: 5,000 , 1: 10,000 , 2: 15,000 , 3: '직접입력'
    const [recurring, setRecurring] = useState<number>(null); // 직접입력
    const [isSubscribed, setIsSubscribed] = useState<boolean>(true);
    const [isStoped, setIsStoped] = useState<boolean>(false);

    const [getOptionFn, { data: getOptionData, loading: getOptionLoading }] = useLazyQuery(GET_OPTION, {
        onError: (e) => console.log(e),
        onCompleted: (res) => {
            console.log(res);
            setMultipleIndex(MULTIPLE_ARRAY.indexOf(res?.option.multiple));
            const tempRecurringIndex = RECURRING_ARRAY.indexOf(res?.option.recurring);
            if (tempRecurringIndex === -1) {
                // 정기 티클 5,000원, 10,000원, 15,000원를 사용하지 않고, 직접 입력 사용중
                setRecurringIndex(3);
                setRecurring(res?.option.recurring);
            } else {
                // 정기 티클 5,000원, 10,000원, 15,000원 사용중
                setRecurringIndex(tempRecurringIndex);
                setIsSubscribed(true);
            }
        },
    });

    const [updateOptionFn, { data: updateOptionData, loading: updateOptionLoading }] = useMutation(UPDATE_OPTION, {
        onError: (e) => console.log(e),
        onCompleted: (res) => console.log(res),
    });

    const updateOption = ({ multipleIndexProps = null, recurringIndexProps = null }) => {
        updateOptionFn({
            variables: {
                multiple: MULTIPLE_ARRAY[multipleIndexProps] ?? MULTIPLE_ARRAY[multipleIndex],
                recurring: recurringIndexProps === 3 ? +recurring : RECURRING_ARRAY[recurringIndexProps],
            },
        });
    };
    useEffect(() => {
        getOptionFn();
    }, []);

    return (
        <RootScreenPresenter
            multipleIndex={multipleIndex}
            setMultipleIndex={setMultipleIndex}
            recurring={recurring}
            setRecurring={setRecurring}
            recurringIndex={recurringIndex}
            setRecurringIndex={setRecurringIndex}
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
            isStoped={isStoped}
            setIsStoped={setIsStoped}
            updateOption={updateOption}
        />
    );
};

export default RootScreenContainer;
