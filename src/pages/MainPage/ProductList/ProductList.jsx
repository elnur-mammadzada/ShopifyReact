import React from 'react'
import '../ProductList/ProductList.css'
import Product from './Product/Product'
import { useDispatch } from 'react-redux'

const ProductList = ({ productData }) => {
    
    return (
        <div>
            <Product productData={productData} />
        </div>
    )
}

export default ProductList

