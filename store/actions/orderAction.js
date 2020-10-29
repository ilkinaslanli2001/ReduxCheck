import {REMOVE_ORDER,ADD_ORDER} from '../types'
import store from '../store'


export const addOrder = (order) => async dispatch =>{
    dispatch({
        type:ADD_ORDER,
        payload:order
    })
}

export const removeOrder = (orderId) => async dispatch =>{
    dispatch({
        type:REMOVE_ORDER,
        payload:orderId
    })
}