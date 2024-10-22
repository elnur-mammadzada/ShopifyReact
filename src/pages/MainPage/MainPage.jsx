import React from 'react'
import MUIDataGrid from '../../components/DataGrid/MUIDataGrid'
import Header from './Header/Header'
import MUIContainer from '../../components/Container/MUIContainer'
import '../MainPage/MainPage.css'
import ProductList from './ProductList/ProductList'
import RouterConfig from '../../config/RouterConfig'

const MainPage = () => {
    const productData = [
        { id: 1, name: 'iPhone 13', price: 999 },
        { id: 2, name: 'Samsung Galaxy S21', price: 799 },
        { id: 3, name: 'MacBook Pro', price: 1999 },
        { id: 4, name: 'Dell XPS 13', price: 1199 },
        { id: 5, name: 'Sony WH-1000XM4 ', price: 349 },
        { id: 6, name: 'Apple Watch Series 7', price: 399 },
        { id: 7, name: 'iPad Pro', price: 1099 },
        { id: 8, name: 'Google Pixel 6', price: 599 },
        { id: 9, name: 'Nintendo Switch', price: 299 },
        { id: 10, name: 'Bose QuietComfort Earbuds', price: 279 },
        { id: 11, name: 'Kindle Paperwhite', price: 129 },
        { id: 12, name: 'Logitech MX Master 3 Mouse', price: 99 },
    ]
    return (
        <div className='body'>
            <MUIContainer>
                <Header />

              
                <ProductList productData={productData} />


            </MUIContainer>
        </div>
    )
}

export default MainPage
