import React, { useState } from 'react';
import '../pages/Home.css';

import Ford1 from '../assets/Ford1.jpeg';
import BMW from '../assets/BMW.jpeg';
import RangeRover from '../assets/RangeRover.jpeg';

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Ford Vehicles: A Legacy of Innovation and Performance",
            description: "Discover how Ford has cemented its place in automotive history with a blend of innovative technology, performance, and classic design...",
            details: "Ford has solidified its place in automotive history...",
            image: Ford1,
        },
        {
            id: 2,
            title: "BMW Vehicles: Excellence Meets Luxury and Performance",
            description: "Discover how BMW has solidified its place in the automotive world with a blend of luxury, performance, and advanced technology...",
            details: "BMW has cemented its reputation in the automotive world...",
            image: BMW,
        },
        {
            id: 3,
            title: "Range Rover Vehicles: The Pinnacle of Luxury and Off-Road Capability",
            description: "Discover how Range Rover has established its legacy with a blend of rugged capability, luxury, and cutting-edge design...",
            details: "Range Rover has established itself as a symbol of rugged luxury...",
            image: RangeRover,
        }
    ]);

    const [selectedCard, setSelectedCard] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newBlog, setNewBlog] = useState({ title: '', description: '', details: '', image: '' });

    const handleButtonClick = (id) => {
        if (selectedCard === id) {
            setSelectedCard(null); 
        } else {
            setSelectedCard(id); 
        }
    };

    const handleEdit = (blog) => {
        setIsEditing(true);
        setNewBlog(blog);
        setSelectedCard(null);
    };

    const handleDelete = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    };

    const handleSave = () => {
        if (newBlog.id) {
            setBlogs(blogs.map(blog => blog.id === newBlog.id ? newBlog : blog));
        } else {
            setNewBlog({ ...newBlog, id: blogs.length + 1 });
            setBlogs([...blogs, { ...newBlog, id: blogs.length + 1 }]);
        }
        setIsEditing(false);
        setNewBlog({ title: '', description: '', details: '', image: '' });
    };

    const handleInputChange = (e) => {
        setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
    };

    return (
        <div className="Home">
            <header className="Home-header">
                <h1>Welcome to CARFUSION</h1>
                <p>Where Cars Come to Life.</p>
            </header>
            <section className="Home-content">
                <h2>Explore Blogs</h2>
                <div className="Home-cards">
                    {blogs.map(blog => (
                        <div key={blog.id} className="Home-card">
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>
                            <button 
                                className="Home-button" 
                                onClick={() => handleButtonClick(blog.id)}
                            >
                                {selectedCard === blog.id ? "Show Less" : "Read More"}
                            </button>
                            {selectedCard === blog.id && (
                                <div className="Home-card-details">
                                    <img src={blog.image} alt={blog.title} className="Home-card-image" />
                                    <p>{blog.details}</p>
                                </div>
                            )}
                            <button className="Home-button" onClick={() => handleEdit(blog)}>Edit</button>
                            <button className="Home-button" onClick={() => handleDelete(blog.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </section>

            {isEditing && (
                <section className="Home-edit-form">
                    <h2>{newBlog.id ? "Edit Blog" : "Create Blog"}</h2>
                    <input
                        type="text"
                        name="title"
                        value={newBlog.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                    />
                    <textarea
                        name="description"
                        value={newBlog.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                    <textarea
                        name="details"
                        value={newBlog.details}
                        onChange={handleInputChange}
                        placeholder="Details"
                    />
                    <input
                        type="text"
                        name="image"
                        value={newBlog.image}
                        onChange={handleInputChange}
                        placeholder="Image URL"
                    />
                    <button className="Home-button" onClick={handleSave}>Save</button>
                    <button className="Home-button" onClick={() => setIsEditing(false)}>Cancel</button>
                </section>
            )}
        </div>
    );
};

export default Home;
