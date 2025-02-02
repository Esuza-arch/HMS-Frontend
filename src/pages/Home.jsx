import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to Tminus Healthcare</h1>
                    <p>Find the best doctors and book appointments with ease. Your health is our priority.</p>
                </div>
            </section>

            <section className="services">
                <h2>Our services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <h3>Find Doctors</h3>
                        <p>Browse through our list of qualified healthcare professionals.</p>
                        <Link to="/doctors" className="button">View doctors</Link>
                    </div>

                    <div className="service-card">
                        <h3>Book Appointments</h3>
                        <p>Schedule appointments with your preferred doctors.</p>
                        <Link to="/appointments" className="button">Book Now</Link>
                    </div>

                    <div className="service-card">
                        <h3>Leave Reviews</h3>
                        <p>Share your experiences to help others.</p>
                        <Link to="/reviews" className="button">Write a Review</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

