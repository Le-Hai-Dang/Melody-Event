import React from 'react';
import './EventDetails.css';

const EventDetails = ({ event, onClose }) => {
    return (
        <div className="event-details-overlay" onClick={onClose}>
            <div className="event-details" onClick={(e) => e.stopPropagation()}>
                <h2>{event.title}</h2>
                <img src={event.image} alt={event.title} className="event-details-image" />
                <p>{event.description}</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EventDetails;