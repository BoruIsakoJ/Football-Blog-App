import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const NewPost = () => {
    const navigate = useNavigate();
    const { quill, quillRef } = useQuill();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        image: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                setFormData((prev) => ({
                    ...prev,
                    content: quill.root.innerHTML // preserves formatting
                }));
            });
        }
    }, [quill]);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://football-blogs-json-server.onrender.com/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...formData,
                date: new Date().toLocaleDateString(),
                likes: 0
            })
        })
            .then(res => res.json())
            .then(() => {
                alert('Post added successfully!');
                navigate('/');
            });
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4  fw-bold text-secondary text-center">Create New Blog Post</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={formData.title}
                        onChange={handleChange}
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
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <div ref={quillRef} style={{ height: '300px' }} />
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
