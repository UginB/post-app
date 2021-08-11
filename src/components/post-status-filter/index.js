import React from 'react';

import './post-status-filter.css'

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button type='button' className='btn btn-info'>Все</button>
            <button type='button' className='btnbtn-outline-secondary'>Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;