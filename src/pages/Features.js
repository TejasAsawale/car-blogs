import React, { useState } from 'react';
import '../pages/Features.css';

import CarPerformance from '../assets/CarPerformance.jpg';

const Features = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const blogs = [
        {
            id: 1,
            title: "Performance",
            description: "Performance is at the heart of every driving experience, and our vehicles are engineered to deliver power, precision, and exhilaration. With a range of engine options including turbocharged, V6, V8, hybrid, and electric powertrains, our cars are designed to meet the diverse needs of all drivers.",
            details: "Performance is at the heart of every driving experience, and our vehicles are engineered to deliver power, precision, and exhilaration. With a range of engine options including turbocharged, V6, V8, hybrid, and electric powertrains, our cars are designed to meet the diverse needs of all drivers. Whether you crave the thrill of high horsepower and quick acceleration or seek the efficiency of a fuel-saving hybrid, our performance features ensure that you never compromise on driving pleasure. Advanced transmission systems, such as automatic, manual, and CVT, offer smooth and responsive gear shifts, while enhanced torque and top speeds make every journey a memorable one. Our vehicles are crafted to deliver unparalleled performance on every road, under any condition.",
            image: CarPerformance,
        },
        {
            id: 2,
            title: "Top 10 Cars of 2024",
            description: "Discover the top cars of the year, featuring the best in performance, safety, and style.",
            details: "Our list includes a variety of vehicles, from luxury sedans to high-performance sports cars, each offering a unique blend of features.",
            image: "/path/to/top-cars-2024.jpg",
        },
        {
            id: 3,
            title: "How to Choose the Perfect Car",
            description: "Learn about the key factors to consider when selecting a car that suits your needs and lifestyle.",
            details: "Choosing the right car involves evaluating your needs, budget, and preferences, as well as researching different models and features.",
            image: "/path/to/choose-car.jpg",
        }
    ];

    const handleButtonClick = (id) => {
        if (selectedCard === id) {
            setSelectedCard(null); 
        } else {
            setSelectedCard(id);
        }
    };

    return (
        <div className="Features">
            <header className="Features-header">
                <h1>Features</h1>
                <p>Explore detailed information about our featured cars.</p>
            </header>
            <section className="Features-content">
                <div className="Features-cards">
                    {blogs.map(blog => (
                        <div key={blog.id} className="Features-card">
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>
                            <button 
                                className="Features-button" 
                                onClick={() => handleButtonClick(blog.id)}
                            >
                                {selectedCard === blog.id ? "Show Less" : "Read More"}
                            </button>
                            {selectedCard === blog.id && (
                                <div className="Features-card-details">
                                    <img src={blog.image} alt={blog.title} className="Features-card-image" />
                                    <p>{blog.details}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Features;
