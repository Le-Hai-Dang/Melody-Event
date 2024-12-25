import React, { useState } from 'react';

const AdminDashboard = ({ events, onAddEvent, onEditEvent, onDeleteEvent }) => {
    const [newEvent, setNewEvent] = useState({ title: '', date: '', location: '', image: '', description: '' });
    const [editingEventId, setEditingEventId] = useState(null);

    const handleAddEvent = () => {
        onAddEvent(newEvent);
        setNewEvent({ title: '', date: '', location: '', image: '', description: '' });
    };

    const handleEditEvent = (event) => {
        setEditingEventId(event.id);
        setNewEvent({ title: event.title, date: event.date, location: event.location, image: event.image, description: event.description });
    };

    const handleUpdateEvent = () => {
        onEditEvent({ ...newEvent, id: editingEventId });
        setNewEvent({ title: '', date: '', location: '', image: '', description: '' });
        setEditingEventId(null);
    };

    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="add-event">
                <h3>{editingEventId ? 'Edit Event' : 'Add Event'}</h3>
                <input
                    type="text"
                    placeholder="Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={newEvent.image}
                    onChange={(e) => setNewEvent({ ...newEvent, image: e.target.value })}
                />
                <textarea
                    placeholder="Description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    className="description-input"
                />
                {editingEventId ? (
                    <button onClick={handleUpdateEvent}>Update Event</button>
                ) : (
                    <button onClick={handleAddEvent}>Add Event</button>
                )}
            </div>
            <div className="event-list">
                <h3>Event List</h3>
                {events.map((event) => (
                    <div key={event.id} className="event-item">
                        <div className="event-text">
                            <h4>{event.title}</h4>
                            <p>{event.date}</p>
                            <p>{event.location}</p>
                        </div>
                        <img src={event.image} alt={event.title} className="event-image" />
                        <button onClick={() => handleEditEvent(event)}>Edit</button>
                        <button onClick={() => onDeleteEvent(event.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;