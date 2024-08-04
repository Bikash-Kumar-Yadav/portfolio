// // Toggle icon navbar
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//    menuIcon.classList.toggle('fa-xmark');
//    navbar.classList.toggle('active');
// }

// // Scroll Section active link
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     let top = window.scrollY;

//     sections.forEach(sec => {
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
//             });
//         }
//     });

//     // Sticky navbar
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // Remove toggle icon and navbar when clicking on a link
//     menuIcon.classList.remove('fa-xmark');
//     navbar.classList.remove('active');
// };

// // Scroll Reveal
// ScrollReveal({
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
// });

// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
// ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// // Typed JS
// const typed = new Typed('.multiple-text', {
//     strings: ['Android Developer', 'Web Developer', 'Machine learning enthusiast'],
//     typeSpeed: 70,
//     backSpeed: 70,
//     backDelay: 1000,
//     loop: true,
// });

document.addEventListener('DOMContentLoaded', function() {
    // Toggle icon navbar
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };

    // Scroll Section active link
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                });
            }
        });

        // Sticky navbar
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        // Remove toggle icon and navbar when clicking on a link
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };

    // Scroll Reveal
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    // Typed JS
    const typed = new Typed('.multiple-text', {
        strings: ['Android Developer', 'Web Developer', 'Machine learning enthusiast'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Client-side validation
        if (!name || !email || !phone || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Email format validation
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Construct the request body
        const requestBody = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message
        };

        // Replace 'http://localhost:3000/api/contact' with your server endpoint
        fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Assuming server responds with JSON
        })
        .then(data => {
            console.log('Success:', data);
            alert('Message sent successfully!');
            contactForm.reset(); // Clear the form inputs
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
    });

    // Function to validate email format
    function isValidEmail(email) {
        // Regular expression for basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
