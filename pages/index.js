import Link from 'next/link'
import MainLayout from './components/MainLayout'
import Products from './components/Products'
import axios from 'axios'


export default function Index({products})
{
    
  
        return <MainLayout>
            
            <Products products={products} />
        </MainLayout>
      
        
}
Index.getInitialProps = async ({req}) =>{
   
    const products = await axios.get(`${process.env.API_URL}/products`)
   
    return {
        products:products.data
    }
}
