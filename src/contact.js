function contactInitialize() {
    const content = document.getElementById('content');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('container');
    const contact = document.createElement('h1');
    contact.textContent = "Contact Us!"
    content.appendChild(contactContainer);
    contactContainer.appendChild(contact);

    const contactMessageContainer = document.createElement('div');
    contactMessageContainer.classList.add('container');
    const contactMessage = document.createElement('p');
    contactMessage.textContent = "We love to hear from customers! For any comments, questions, or concerns, feel free to give us a call during buisness hours. We are also available via email at the below address. As always, the best way to reach us is to drop by!"
    content.appendChild(contactMessageContainer);
    contactMessageContainer.appendChild(contactMessage);

    const contactInfoContainer = document.createElement('div');
    contactInfoContainer.classList.add('container');
    const phoneNum = document.createElement('p');
    phoneNum.textContent = "Phone Number: 206-123-1234";
    const email = document.createElement('p');
    email.textContent = "Email: bigAls@bigAls.com";
    content.appendChild(contactInfoContainer);
    contactInfoContainer.appendChild(phoneNum);
    contactInfoContainer.appendChild(email);
};

export {contactInitialize};