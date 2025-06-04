import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {Shopcontext} from '../Context/Shopcontext'
import Breadcrums from '../Components/Breadcrums/Breadcrums'
import Productdisplay from '../Components/Productdisplay/Productdisplay'
import Descriptionbox from '../Components/Descriptionbox/Descriptionbox'
import Relatedproducts from '../Components/Relatedproducts/Relatedproducts'

const Product = () => {
  const {all_product}=useContext(Shopcontext)
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
        <Breadcrums product={product}/>
        <Productdisplay product={product}/>
        <Descriptionbox/>
        <Relatedproducts/>
    </div>
  )
}

export default Product