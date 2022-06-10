import { useParams, Link } from 'react-router-dom';
import React from 'react';

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  return (
    <main className='PostPage'>
      <article className='post'>
        {post &&
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.date}</p>
            <p className='postBody'>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>
              Delete post
            </button>
          </>
        }
        {!post &&
        <>
        <h2>Page Not Found</h2>
        <p>Well, that's disappointing</p>
        <Link to='/'>Visit Our Homepage</Link>
        </>
        }
      </article>
    </main>
  )
}

export default PostPage;
