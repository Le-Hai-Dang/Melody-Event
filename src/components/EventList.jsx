import React, { useState } from 'react';
import EventDetails from './EventDetails.jsx';

const EventList = ({ events }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEventClick = (event) => {
        setSelectedEvent(event);
    };

    const handleClose = () => {
        setSelectedEvent(null);
    };

    return (
        <div>
            <div className="event-list">
                {events.map((event) => (
                    <div key={event.id} className="event-item" onClick={() => handleEventClick(event)}>
                        <div className="event-text">
                            <h4>{event.title}</h4>
                            <p>{event.date}</p>
                            <p>{event.location}</p>
                        </div>
                        <img src={event.image} alt={event.title} className="event-image" />
                    </div>
                ))}
            </div>
            {selectedEvent && <EventDetails event={selectedEvent} onClose={handleClose} />}
        </div>
    );
};

export default EventList;