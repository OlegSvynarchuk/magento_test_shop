import React from 'react'
import {Link} from 'react-router-dom'

import './header.css'

export default function Header() {
    return (
        <div className='header'>
           <h2>what a blog without dog <span><i className="fas fa-paw"></i></span></h2> 
           <nav className='navbar'>
               <Link to='/'>Posts</Link>
           </nav>
        </div>
    )
}
