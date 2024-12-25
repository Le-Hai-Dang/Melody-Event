import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Slider from './components/Slider.jsx';
import TicketPurchase from './components/TicketPurchase.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import Login from './components/Login.jsx';
import EventList from './components/EventList.jsx';
import './styles/App.css';
import './styles/tourDates.css'; 

function App() {
    const [events, setEvents] = useState([
   
        { id: 1, title: 'Event 1', date: '2024-12-27', location: 'Ho Chi Minh city', image: require('./assets/img/Places/HoChiMinhcity.jpg').default, description: 'Get ready to rock! Melody is thrilled to announce our upcoming live performance at Ho Chi Minh City. Join us for an unforgettable night filled with electrifying music, dazzling lights, and incredible energy. Prepare to be blown away as we bring our latest hits and fan favorites to the stage. This is one event you want to miss. Mark your calendars and grab your tickets now. Let make some unforgettable memories together. We excited to connect with our amazing fans at our upcoming concert! Melody has been working hard to create a show that will celebrate our music and our incredible community. Come together with us for a night of singing, dancing, and pure joy. We can wait to see you there' },
        { id: 2, title: 'Event 2', date: '2024-12-28', location: 'Da Nang city', image: require('./assets/img/Places/DaNangcity.jpg').default, description: 'Get ready to rock! Melody is thrilled to announce our upcoming live performance at Ho Chi Minh City. Join us for an unforgettable night filled with electrifying music, dazzling lights, and incredible energy. Prepare to be blown away as we bring our latest hits and fan favorites to the stage. This is one event you want to miss. Mark your calendars and grab your tickets now. Let make some unforgettable memories together. We excited to connect with our amazing fans at our upcoming concert! Melody has been working hard to create a show that will celebrate our music and our incredible community. Come together with us for a night of singing, dancing, and pure joy. We can wait to see you there' },
        { id: 3, title: 'Event 3', date: '2024-12-29', location: 'Ha Noi capital', image: require('./assets/img/Places/HaNoicapital.jpg').default, description: 'Get ready to rock! Melody is thrilled to announce our upcoming live performance at Ho Chi Minh City. Join us for an unforgettable night filled with electrifying music, dazzling lights, and incredible energy. Prepare to be blown away as we bring our latest hits and fan favorites to the stage. This is one event you want to miss. Mark your calendars and grab your tickets now. Let make some unforgettable memories together. We excited to connect with our amazing fans at our upcoming concert! Melody has been working hard to create a show that will celebrate our music and our incredible community. Come together with us for a night of singing, dancing, and pure joy. We can wait to see you there'},
    ]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const handleAddEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    const handleEditEvent = (updatedEvent) => {
        setEvents(events.map(event => (event.id === updatedEvent.id ? updatedEvent : event)));
    };

    const handleDeleteEvent = (id) => {
        setEvents(events.filter(event => event.id !== id));
    };

    const handleLogin = (credentials) => {
   
        if (credentials.username === 'admin' && credentials.password === 'admin') {
            setIsLoggedIn(true);
            setIsAdmin(true);
        } else if (credentials.username === 'user' && credentials.password === 'user') {
            setIsLoggedIn(true);
            setIsAdmin(false);
        }
        setShowLogin(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
    };

    return (
        <div className="App">
            <Header isLoggedIn={isLoggedIn} onLogin={() => setShowLogin(true)} onLogout={handleLogout} />
            <Slider />
            <main>
                <section id="about-we" className="content-section">
                    <h2 className="section-heading">MELODY</h2>
                    <p className="about-text">Introducing Melody, a vibrant trio that’s shaking up the music scene. Comprising David, the charismatic guitarist with a knack for soulful melodies, Madison, the powerhouse vocalist whose range defies limits, and Amelia, the rhythmic backbone on drums, they create a sound that’s both fresh and familiar. Their chemistry is palpable, each performance a testament to their shared passion for music that resonates. With Melody, every note tells a story, and every song is an invitation to feel, dance, and dream.</p>
                    <div className="singer-list">
                        <div className="singer-item">
                            <img src={require('./assets/img/Singer/Singer1.png').default} alt="David" className="singer-img" />
                            <h3 className="singer-name">David</h3>
                        </div>
                        <div className="singer-item">
                            <img src={require('./assets/img/Singer/Singer2.png').default} alt="Madison" className="singer-img" />
                            <h3 className="singer-name">Madison</h3>
                        </div>
                        <div className="singer-item">
                            <img src={require('./assets/img/Singer/Singer3.png').default} alt="Amelia" className="singer-img" />
                            <h3 className="singer-name">Amelia</h3>
                        </div>
                    </div>
                </section>
                <section id="events" className="content-section">
                    <h2 className="section-heading">EVENTS</h2>
                    <EventList events={events} />
                </section>
                <section id="tour" className="tour-section">
                    <h2 className="section-heading text-white">TOUR DATES</h2>
                    <p className="section-subheading text-white">Remember to book your tickets!</p>
                    <TicketPurchase />
                </section>
                {isLoggedIn && isAdmin && (
                    <AdminDashboard
                        events={events}
                        onAddEvent={handleAddEvent}
                        onEditEvent={handleEditEvent}
                        onDeleteEvent={handleDeleteEvent}
                    />
                )}
            </main>
            <Footer />
            {showLogin && !isLoggedIn && <Login onLogin={handleLogin} />}
        </div>
    );
}

export default App;