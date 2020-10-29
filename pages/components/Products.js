import Link from 'next/link'
import Head from 'next/head'
import {addOrder} from '../../store/actions/orderAction'
import {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'



export default  function Products({products}) {
        const dispatch = useDispatch()
      
    
        const addToBasketClick= (product) =>{
              
                dispatch(addOrder(product))
        }

        return  <div className="products">{products.map((product,key)=>{
                return <div className="product" key={key}>
                                <Link href={`/product/[id]`} as ={`/product/${product.id}`}>
                                <a>{product.title}</a>
                        </Link>
                        <button onClick={()=>{addToBasketClick(product)}}>Add to Basket</button>
                </div>
                })} 
        </div>
    
   
   
}




