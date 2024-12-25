export const events = [];

export const createEvent = (event) => {
    events.push(event);
};

export const getEvents = () => {
    return events;
};

export const updateEvent = (id, updatedEvent) => {
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events[index] = { ...events[index], ...updatedEvent };
    }
};

export const deleteEvent = (id) => {
    const index = events.findIndex(event => event.id === id);
    if (index !== -1) {
        events.splice(index, 1);
    }
};