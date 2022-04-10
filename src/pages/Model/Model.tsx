import React, {useEffect} from 'react'
import {useAppDispatch} from "../../store/hooks";
import {getAllCarsData} from "../../store/order/actions";
import { Loader } from "components";

const Model = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
      console.log(123)
      dispatch(getAllCarsData());
  }, [])

  return (
    <div>
        <Loader />
    </div>
  )
}

export default Model;