export const sendEmailNotification = (recipient, subject, message) => {
    // Simulate sending an email notification
    console.log(`Sending email to: ${recipient}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
};

export const sendTicketPurchaseConfirmation = (recipient, eventDetails) => {
    const subject = "Ticket Purchase Confirmation";
    const message = `Thank you for purchasing a ticket for ${eventDetails.name}. Your ticket details are as follows:\n${JSON.stringify(eventDetails)}`;
    sendEmailNotification(recipient, subject, message);
};