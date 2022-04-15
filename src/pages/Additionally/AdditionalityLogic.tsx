import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';

import AdditionalityView from './AdditionallyView'; 
import { getOrderRates } from 'store/order/actions';

const Additionality = () => {

    const dispatch = useAppDispatch();
    
    const { isLoading } = useAppSelector(({order}) => ({
        isLoading: order.options.rates.isLoading
    }))

    useEffect(() => {
        dispatch(getOrderRates())
    }, [])

    return <AdditionalityView isLoading={isLoading} />
}

export default Additionality;