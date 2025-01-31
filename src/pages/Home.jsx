import React from 'react';

function Home() {
    return (
        <div>
            <section>
                <div>
                    <h1>Welcome to Edel</h1>
                    <p>Find the best doctors and book appointments with ease. Your health is our priority.</p>
                </div>
            </section>

            <section>
                <h2>Our services</h2>
                <div>
                    <div>
                        <h3>Find Doctors</h3>
                        <p>Browse through our list of qualified healthcare professionals.</p>
                        <link to="/doctors">View doctors</link>
                    </div>

                    <div>
                        <h3>Book Appointments</h3>
                        <p>Schedule appointments with your preferred doctors.</p>
                        <link to="/appointments">Book Now</link>
                    </div>

                    <div>
                        <h3>Leave Reviews</h3>
                        <p>Share your experiences to help others.</p>
                        <link to="/reviews">Write a Review</link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

