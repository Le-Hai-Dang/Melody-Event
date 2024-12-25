import React, { useState } from 'react';

function EventCard({ event, onBuyTickets, onEdit, onDelete, isAdmin }) {
  const [showForm, setShowForm] = useState(false);
  const [tickets, setTickets] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleBuyTickets = (e) => {
    e.preventDefault();
    const data = { zoneInput: event.location, quantity: tickets, email: email };
    postData(data);
    setShowForm(false);
  };

  async function postData(data) {
    const formData = new FormData();
    formData.append("entry.239137663", data.zoneInput);
    formData.append("entry.55633458", data.quantity);
    formData.append("entry.556351331", data.email);

    fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });
  }

  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <button className="button" onClick={() => setShowForm(!showForm)}>Buy Tickets</button>
      {showForm && (
        <div>
          <input type="number" value={tickets} onChange={(e) => setTickets(e.target.value)} placeholder="Number of tickets" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
          <button className="button" onClick={handleBuyTickets}>Submit</button>
        </div>
      )}
      {isAdmin && (
        <div>
          <button className="button" onClick={() => onEdit(event)}>Edit</button>
          <button className="button" onClick={() => onDelete(event.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default EventCard;