import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EventList from '../components/EventList';

const HomePage = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to the Event Promotion Website</h1>
                <p>Find and purchase tickets for your favorite events!</p>
                <EventList />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;