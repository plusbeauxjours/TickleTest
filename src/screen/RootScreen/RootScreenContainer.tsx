import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';

import RootScreenPresenter from './RootScreenPresenter';

import GET_OPTION from '../../queries/getOption';
import UPDATE_OPTION from '../../mutations/updateOption';

const RootScreenContainer = () => {
    const [multiple, setMultiple] = useState<number>(null);
    const [recurring, setRecurring] = useState<number>(null);
    const [multipleValue, setMultipleValue] = useState<number>(1);
    const [priceIndex, setPriceIndex] = useState<number>(0); // 0: 5,000 , 1: 10,000 , 2: 15,000 , 3: 직접입력
    const [price, setPrice] = useState<number>(null);
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const [isStoped, setIsStoped] = useState<boolean>(false);

    const [getOptionFn, { data: getOptionData, loading: getOptionLoading }] = useLazyQuery(GET_OPTION, {
        onError: (e) => console.log(e),

        onCompleted: (res) => console.log(res),
    });

    const [updateOptionFn, { data: updateOptionData, loading: updateOptionLoading }] = useMutation(UPDATE_OPTION, {
        variables: { multiple, recurring },
        onCompleted: (res) => console.log(res),
    });

    useEffect(() => {
        getOptionFn();
    }, []);

    return (
        <RootScreenPresenter
            multipleValue={multipleValue}
            setMultipleValue={setMultipleValue}
            price={price}
            setPrice={setPrice}
            isSubscribed={isSubscribed}
            priceIndex={priceIndex}
            setPriceIndex={setPriceIndex}
            setIsSubscribed={setIsSubscribed}
            isStoped={isStoped}
            setIsStoped={setIsStoped}
        />
    );
};

export default RootScreenContainer;
