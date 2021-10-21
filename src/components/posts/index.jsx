import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import './posts.css'


import { loadPostsAsync } from '../../redux/postsSlice'
import AuthorInfo from '../authorinfo/index.jsx'


export default function Posts() {

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(loadPostsAsync())
    }, [dispatch])

    const {posts} = useSelector(state => state.posts)
    posts && console.log(posts.data)
    return (
           <div className='posts-list'>
            {
                posts && posts.data.map(post => {
                    return(
                        
                        <Link key={post.id} className="posts-list-item" 
                              to={`/${post.id}`}>
                            <img src={post.image} className='posts-list-item-img'></img>
                            <h2 className='posts-list-item-title'>{post.text}</h2>
                           
                            <AuthorInfo
                                url={post.owner.picture}
                                name={{
                                    firstName: post.owner.firstName,
                                    lastName: post.owner.lastName
                                }}
                                date={post.publishDate}
                            />        
                                
                          

                            
                        </Link>
                    
                    )
                })
            }
        </div>
    )
}
