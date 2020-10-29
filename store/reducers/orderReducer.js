import {ADD_ORDER, REMOVE_ORDER}  from '../types'
const initialState = {
    orders:[],
    
}
export const orderReducer = (state=initialState,action)=>{
    switch(action.type)
    {
      
        case ADD_ORDER:

            return {
                ...state,
                orders:[...state.orders,action.payload]
            }

        case REMOVE_ORDER:

            let newOrders = [...state.orders]
            const index = state.orders.findIndex((order)=>order.id==action.payload)
           
            if(index>=0)
            {
                newOrders.splice(index,1)
                
            }
           
            return {...state, 
                orders: newOrders
            }
            
        default:
            return state
    }
}