import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false); // Track if the user has liked the post

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Post not found');
                }
                return res.json();
            })
            .then(data => {
                setPost(data);
                setLikes(data.likes || 0); // Set initial likes count from the post data
                setHasLiked(localStorage.getItem(`liked-${id}`) === 'true'); // Check if user has liked the post
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this post?");
        if (confirmDelete) {
            fetch(`http://localhost:3000/posts/${id}`, {
                method: "DELETE"
            })
                .then(() => {
                    alert("Post deleted!");
                    navigate("/");
                })
        }
    };
    const handleLikeToggle = () => {
        const updatedLikes = hasLiked ? likes - 1 : likes + 1;

        // Ensure likes is treated as a number
        const currentLikes = parseInt(likes, 10) || 0; // Safely parse likes as a number

        setLikes(currentLikes + (hasLiked ? -1 : 1)); // Update likes based on the like state
        setHasLiked(!hasLiked); // Toggle like status

        // Update the likes on the server
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "PATCH", // Using PATCH to update the likes count
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ likes: currentLikes + (hasLiked ? -1 : 1) })
        })
            .then(res => res.json())
            .then(() => {
                // Store the liked status in localStorage to prevent multiple likes
                if (!hasLiked) {
                    localStorage.setItem(`liked-${id}`, 'true');
                } else {
                    localStorage.removeItem(`liked-${id}`);
                }
            })
       
    };


    if (loading) return <div className="p-6">Loading...</div>;
    if (error) return <div className="p-6 text-danger">{error}</div>;

    return (
        <div className="container py-5" style={{minWidth:"100vw", minHeight:"100vh"}} >
            <div className="card shadow-lg p-4" style={{maxWidth:"80vw", display:"block", margin:"auto"}}>

                <img
                    src={post.image}
                    alt={post.title}
                    className="card-img-top mb-4 rounded"
                    style={{
                        height: 'auto',
                        maxHeight: '500px',
                        objectFit: 'cover',
                        maxWidth: '100%' 
                    }}
                />
                <h1 className="card-title text-start text-primary display fw-bold mb-5" style={{ fontSize: '2.5rem' }}>
                    {post.title}
                </h1>
                <p className="text-center text-muted mb-4 d-flex justify-content-between" style={{ fontSize: '1.2rem' }}>
                  <span><strong>By:</strong> {post.author}</span>  <span><strong>Date:</strong> {post.date}</span> 
                </p>
                <p className="card-text text-gray-600" style={{ fontSize: '1.5rem', color: '#6c757d' }}>
                    {post.content}
                </p>

                <div className="mt-5 text-center d-flex justify-content-between">
                    {/* Like Button with Heart Icon */}
                    <button
                        onClick={handleLikeToggle}
                        className="btn btn-lg mx-2 fw-bold"
                        style={{ backgroundColor: 'transparent', border: 'none' }}
                    >
                        <i
                            className={`bi ${hasLiked ? 'bi-heart-fill' : 'bi-heart'}`}
                            style={{ fontSize: '1.5rem', color: hasLiked ? 'red' : '#6c757d' }}
                        ></i>
                        <span className="m-2">{likes}</span> {/* Display the number of likes */}
                    </button>

                    {/* Delete Button */}
                    <button
                        onClick={handleDelete}
                        className="btn btn-outline-danger px-4 py-0 fw-bold"
                    >
                        Delete Post
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostDetail;