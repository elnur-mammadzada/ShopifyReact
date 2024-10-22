import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from '../pages/MainPage/MainPage'
import Basket from '../pages/MainPage/Basket/Basket'

const RouterConfig = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/basket' element={<Basket />} />

            </Routes>
        </div>
    )
}

export default RouterConfig
