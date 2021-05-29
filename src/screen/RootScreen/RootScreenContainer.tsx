import React, { useEffect, useState } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';

import RootScreenPresenter from './RootScreenPresenter';

import GET_OPTION from '../../queries/getOption';
import UPDATE_OPTION from '../../mutations/updateOption';

const RootScreenContainer = () => {
    const [multiple, setMultiple] = useState<number>(null);
    const [recurring, setRecurring] = useState<number>(null);

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

    return <RootScreenPresenter />;
};

export default RootScreenContainer;
