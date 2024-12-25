import React, { useState } from 'react';

const TicketPurchase = () => {
    const [zoneInput, setZoneInput] = useState('');
    const [quantity, setQuantity] = useState('');
    const [email, setEmail] = useState('');

    const handlePurchase = async (e) => {
        e.preventDefault();
        const data = { zoneInput, quantity, email };
        const formData = new FormData();
        formData.append("entry.239137663", data.zoneInput);
        formData.append("entry.55633458", data.quantity);
        formData.append("entry.556351331", data.email);
        await fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLSeralYiJ7OVH3l7lnTnoqGsZc6ko-OlxwzmvYVi4dnPU-Q0pQ/formResponse", {
            method: "POST",
            body: formData,
            mode: "no-cors",
        });
        alert(`Purchased ${quantity} ticket(s) for ${email}`);
    };

    return (
        <div className="ticket-purchase">
            <h2></h2>
            <form onSubmit={handlePurchase}>
                <label htmlFor="zoneInput" className="modal-label">Location</label>
                <input
                    id="zoneInput"
                    className="modal-input"
                    type="text"
                    placeholder="What location?"
                    value={zoneInput}
                    onChange={(e) => setZoneInput(e.target.value)}
                    required
                />
                <label htmlFor="quantity" className="modal-label">Tickets</label>
                <input
                    id="quantity"
                    className="modal-input"
                    type="number"
                    placeholder="How many? (250.000 VND/ ticket)"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <label htmlFor="email" className="modal-label">Send To</label>
                <input
                    id="email"
                    className="modal-input"
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button id="buy-tickets" type="submit">OK</button>
            </form>
        </div>
    );
};

export default TicketPurchase;