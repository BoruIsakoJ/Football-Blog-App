import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        image: '',
        content: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...formData, date: new Date().toLocaleDateString(), likes: 0 })
        })
            .then(res => res.json())
            .then(() => {
                alert('Post added successfully!');
                navigate('/');
            })

    };

    return (
        <div style={{height:"100vh"}} className="container my-5">
            <h2 className="mb-4 text-center">Create New Blog Post</h2>
            <form  onSubmit={handleSubmit} className="card p-4 shadow-lg">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Post title"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input
                        type="text"
                        name="author"
                        className="form-control"
                        value={formData.author}
                        onChange={handleChange}
                        placeholder="Author name"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        className="form-control"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Direct image URL"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        name="content"
                        className="form-control"
                        rows="20"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write your post content..."
                        required
                    ></textarea>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-success px-4">
                        Submit Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPost;