import React from 'react';
import { Link } from 'react-router-dom';

function Card({ post }) {
  if (!post) return <div>Loading...</div>;

  // Function to get the first 20 words of the content
  const getFirst20Words = (content) => {
    const plainText = content.replace(/<[^>]+>/g, ''); // Removes HTML tags
    const words = plainText.split(/\s+/); // Splits by any whitespace
    return words.slice(0, 20).join(' ') + (words.length > 20 ? '...' : '');
  };
  

  return (
    <div className="card shadow-sm rounded-2 mb-4 mx-auto" style={{ width: '20rem', height:"500px" }}>
      <img
        src={post.image}
        alt={post.title}
        className="card-img-top"
        style={{ height: '200px', objectFit: 'cover' }}
      />

      <div className="card-body">
        <h5 className="card-title fw-bold text-primary">{post.title}</h5>
        <p className="card-text text-muted">{`By ${post.author} | ${post.date}`}</p>
        <p className="card-text ">{getFirst20Words(post.content)}</p>
        <Link to={`/posts/${post.id}`} className="btn btn-link text-decoration-none">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
