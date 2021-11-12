import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../redux/slice/postsSlice';

const Posts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const post = useSelector(state => state.post)

    const { postsList, loading } = post

    return (
        <div>
            {loading ? <h2>LOADING....</h2> :
                postsList?.map((post, indx) => (
                    <div key={indx}>
                        <h2 >{post?.title}</h2>
                        <p>{post?.body}</p>
                        <hr />
                    </div>
                ))
            }

        </div>
    )
}

export default Posts
