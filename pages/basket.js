import React,{useEffect} from 'react'
import MainLayout from './components/MainLayout'
import {removeOrder} from '../store/actions/orderAction'
import {useDispatch, useSelector} from 'react-redux'

function basket() {
    const dispatch = useDispatch()
    const {orders} = useSelector(state => state.order)
  const removeFromBasket = (orderId) =>
  {
    dispatch(removeOrder(orderId))
  }

    if(!orders.length)
    {
      return (
        <MainLayout>
          Your basket is empty
          </MainLayout>
      )
    }
    return (
        <MainLayout>
      
        
        {orders.map((order,key)=>{

          return <div key={key}>

            <p>{order.title} </p>
            <button onClick={()=>removeFromBasket(order.id)}>Remove From Basket</button>
          
         </div>
        })}
        
        </MainLayout>
    )
}

export default basket
