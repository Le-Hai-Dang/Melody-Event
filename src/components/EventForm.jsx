import React, { useState } from 'react';

const EventForm = ({ onSubmit, initialData = {} }) => {
    const [title, setTitle] = useState(initialData.title || '');
    const [date, setDate] = useState(initialData.date || '');
    const [location, setLocation] = useState(initialData.location || '');
    const [image, setImage] = useState(initialData.image || '');
    const [description, setDescription] = useState(initialData.description || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, date, location, image, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label>Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <label>Location</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            <label>Image URL</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
            <label>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default EventForm;