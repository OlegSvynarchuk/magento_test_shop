import React from 'react'

export default function AuthorInfo({url, name, date}) {
    return (
    <div className='author-info'>
                                
                                
        <img src={url} className='avatar-image'/>
        <div>
            <p className='author-name'>{`${name.firstName} ${name.lastName}`}</p>
            <p className='date-created'>{date.split('T')[0]}</p>
        </div>
    
    </div>
    )
}
