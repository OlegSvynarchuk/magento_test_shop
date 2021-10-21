import React, {useState, useEffect} from 'react'
import axios from 'axios'


import AuthorInfo from '../authorinfo/index.jsx'
import Error from '../error/index.jsx'
import Loading from '../Loading/index.jsx'
import './comment.css'

export default function Comments({id}) {
    const [comments, setComments] = useState([])
    const [commentInput, setCommentInput] = useState('')
    const [error, setError] = useState(null)

    useEffect(async () => {
        try {
            
            const response = await axios.get(`https://dummyapi.io/data/v1/post/${id}/comment`, {
                headers : {
                    'app-id' : '616d8725b4c1fe5238e08575'
                }
            })
            setComments(response.data.data)
        } catch(err) {
            setError(error)
        }
    }, [])

    
    function handleAddComment(e) {
        setCommentInput(e.target.value)
    }
    
    function handleCommentSubmit() {

    }




    return (
        <div className='comments'>
            <h3>Comments: {comments.length}</h3>
            {error && <Error />}
            {comments.length === 0 && <Loading />}
            { comments.length > 0 && <ul>
                {comments.map(comment => {
                    return (
                        <li key={comment.id} className='comment'>
                            <AuthorInfo
                                url={comment.owner.picture}
                                name={{
                                    firstName: comment.owner.firstName,
                                    lastName: comment.owner.lastName
                                }}
                                date={comment.publishDate}
                            />
                            <p className='comment-message'>{comment.message}</p>
                        </li>
                    )
                        
                })}
            </ul>
            }
            <div>
                <form onSubmit={handleCommentSubmit}>
                    <textarea 
                        className='comment-input'
                        type='text'
                        placeholder={"Add a comment"}
                        onChange={handleAddComment}
                    />
                    <button type='submit' className='comment-add-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}
