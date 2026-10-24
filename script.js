const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.textContent = "Thanks for your message. This demo form is not connected to a mail service yet.";
        contactForm.reset();
    });
}