import React, {useEffect} from 'react'
import {  useLazyQuery, useQuery } from '@apollo/client'
import GET_OPTION from '../../queries/getOption'
import RootScreenPresenter from './RootScreenPresenter'

const RootScreenContainer = ()=>{
    const [getOptionFn, {data: getOptionData, loading: getOptionLoading }] = useLazyQuery(GET_OPTION, {
        onError:(e)=>console.log(e),
        onCompleted:(res)=>console.log(res)
    })

    const [updateOptionFn, {data: updateOptionData, loading: updateOptionLoading}] = 
    useEffect(()=>{
        getOptionFn()
        console.log('joi')
    },[])

    return <RootScreenPresenter/>
}

export default RootScreenContainer