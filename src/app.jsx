import React from 'react'
import {Switch, Route } from 'react-router-dom'

import Header from './components/header/index.jsx'
import ProductsPage from './pages/productspage.jsx'
import Cart from './components/cart/index.jsx'


export default function App() {
    return (
    <>
    
            <Header />
            <Switch>
                <Route exact path='/'>
                    <ProductsPage />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
            </Switch>
        
    </>
        
        
    )
}

