import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import axios from 'axios'

import AuthorInfo from '../authorinfo/index.jsx'
import postText from './text.js' 
import './post.css'
import Comments from '../comments/index.jsx'

export default function Post() {

    const {id} = useParams()
    const post = useSelector(state => state.posts.posts.data.find(post => post.id === id))
    


    return (
        <div className='post'>
            <h1>{post.text}</h1>
        <div className='post-meta'>
            <AuthorInfo 
                url={post.owner.picture}
                name={{
                    firstName: post.owner.firstName,
                    lastName: post.owner.lastName
                }}
                date={post.publishDate}
            />
            <p><i className="fas fa-heart"></i><span>{post.likes}</span></p>
        </div>
            <img src={post.image} className='post-image' />
            <p className='post-text'>
                {postText}  
            </p>
            <Comments id={id}/>
            
        </div>
    )
}
