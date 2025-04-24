// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Hero from '../components/Hero';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
  }, []);

  return (
    <>
      <Hero />
      <div className="container py-4" id='blogs'>
        <h2 style={{fontSize:"2.5rem", fontWeight:"800"}} className='text-center text-primary mb-5'>Blogs</h2>
        <div className="row">
          {posts.map(post => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={post.id}>
              <Link to={`/posts/${post.id}`} className="text-decoration-none">
                <Card post={post} />
              </Link>
            </div>
          ))}
        </div>
        <Link
          to="/new"
          className="btn btn-primary rounded-circle position-fixed"
          style={{
            bottom: '8%',
            right: '5%',
            width: '50px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 2,
          }}
          title="New Post"
        >
          <i class="bi bi-feather"></i>
        </Link>

      </div>
    </>

  );
};

export default Home;
