import {useRouter} from 'next/router'
import MainLayout from '../components/MainLayout'
import axios from "axios"
import {useEffect, useState} from 'react'
export default function Product({product})
{
    

    return <MainLayout title={product.title}>
        <div className="product">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>


    </MainLayout>
}


Product.getInitialProps = async ({query}) => {
  
    const product = await axios.get(`${process.env.API_URL}/products/${query.id}`)
   
    return {
        product:product.data
    }
}