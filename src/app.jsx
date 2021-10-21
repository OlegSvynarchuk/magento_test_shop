import React from 'react'
import {Switch, Route } from 'react-router-dom'

import Posts from './components/posts/index.jsx'
import Post from './components/post/index.jsx'
import './index.css'
import Header from './components/header/index.jsx'

export default function App() {
    return (
    <div className='app'>
    
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Posts />
                </Route>
                <Route path='/:id'>
                    <Post />
                </Route>
            </Switch>

        
    </div>
        
        
    )
}

