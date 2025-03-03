document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your public key
    emailjs.init("dLZTj0d5O9tacoaWO");

      renderSkills();
      
    // Skills Data
    function renderSkills() {
        const skillsData = [
          { name: "HTML", image: "images/html-logo.webp" },
          { name: "CSS", image: "images/css-logo.webp" },
          { name: "JavaScript", image: "images/javascript-logo.webp" },
          { name: "Node.js", image: "images/node-logo.webp" },
          { name: "React.js", image: "images/react-logo.webp" }
        ];
        const skillsContainer = document.querySelector('.btn-skills');
        if (skillsContainer) {
          skillsContainer.innerHTML = skillsData.map(skill => `
            <button>
              <span><img src="${skill.image}" alt="${skill.name} logo" /></span>
              ${skill.name}
            </button>
          `).join('');
        }
      }
    // Projects Data
    const projectsData = [
        {
          title: "Netflix Clone",
          description: "A full-stack Netflix clone with user authentication, video streaming features, and a modern responsive design.",
          image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3...",
          tags: ["HTML", "CSS", "JavaScript"],
          links: {
            code: "https://github.com/omarismail12-cmd/portfolio_web_level_1",  // Replace with your GitHub link
            live: "http://127.0.0.1:5501/project-1-new/index.html"   // Replace with your Live Demo link
          }
        },
        {
          title: "Real-time Chat Application",
          description: "A real-time chat application with group and private messaging, typing indicators, and message notifications.",
          image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3...",
          tags: ["React", "Node.js", "Socket.io"],
          links: {
            code: "https://github.com/OmarNajjar-Dev/to-do-list",
            live: "http://127.0.0.1:5501/index.html"
          }
        },
        {
          title: "E-commerce Platform",
          description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure payment integration.",
          image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3...",
          tags: ["React", "Node.js", "MongoDB", "Stripe"],
          links: {
            code: "#",
            live: "#"
          }
        },
        {
          title: "Weather Dashboard",
          description: "An interactive weather dashboard using a third-party API to display current weather conditions and forecasts.",
          image: "data:image/jpeg;base64,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",
          tags: ["JavaScript", "API", "Bootstrap"],
          links: {
            code: "#",
            live: "#"
          }
        }
      ];
      
        // Add more projects as needed
    

    // Render projects dynamically using .map()
    const projectsGrid = document.getElementById('projects-grid');

    projectsGrid.innerHTML = projectsData.map(project => {
      return `
        <div class="project-card">
          <img src="${project.image}" alt="${project.title} Screenshot" />
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="${project.links.code}" target="_blank">
              <i class="fab fa-github"></i> Code
            </a>
            <a href="${project.links.live}" target="_blank">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
          </div>
        </div>
      `;
    }).join('');
    
    // Initialize international phone input with advanced options
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        const iti = window.intlTelInput(phoneInput, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js",
            separateDialCode: true,
            dropdownContainer: document.body, // Moves dropdown outside the form
            geoIpLookup: function(callback) {
                fetch("https://ipapi.co/json")
                    .then(response => response.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("us"));
            },
        });
        // Store the instance for later use in validation
        window.phoneInputInstance = iti;
    }

  

    // Add wave animation to the wave emoji
    const waveEmoji = document.querySelector('.wave');
    if (waveEmoji) {
        setInterval(() => {
            waveEmoji.classList.add('waving');
            setTimeout(() => {
                waveEmoji.classList.remove('waving');
            }, 1000);
        }, 3000);
    }

    // Form validation functions
 function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}


    function validatePhone(phoneInputInstance) {
        if (!phoneInputInstance) return true;
        const phoneNumber = phoneInputInstance.getNumber();
        if (!phoneNumber || phoneNumber.trim() === '') return true; // Phone is optional
        return phoneInputInstance.isValidNumber();
    }

    function validateName(name) {
        return name.trim().length >= 2;
    }

    function validateMessage(message) {
        return message.trim().length >= 10;
    }

    // Handle form validation and submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInputField = document.getElementById('phone');
        const messageInput = document.getElementById('message');
        const submitBtn = document.getElementById('submit-btn');
        const formStatus = document.getElementById('form-status');

        // Real-time validation
        nameInput.addEventListener('blur', function() {
            const nameError = document.getElementById('name-error');
            if (!validateName(this.value)) {
                this.classList.add('error');
                nameError.textContent = 'Name must be at least 2 characters';
            } else {
                this.classList.remove('error');
                nameError.textContent = '';
            }
        });

        emailInput.addEventListener('blur', function() {
            const emailError = document.getElementById('email-error');
            if (!validateEmail(this.value)) {
                this.classList.add('error');
                emailError.textContent = 'Please enter a valid email address';
            } else {
                this.classList.remove('error');
                emailError.textContent = '';
            }
        });

        phoneInputField.addEventListener('blur', function() {
            const phoneError = document.getElementById('phone-error');
            if (this.value && !validatePhone(window.phoneInputInstance)) {
                this.classList.add('error');
                phoneError.textContent = 'Please enter a valid phone number';
            } else {
                this.classList.remove('error');
                phoneError.textContent = '';
            }
        });

        messageInput.addEventListener('blur', function() {
            const messageError = document.getElementById('message-error');
            if (!validateMessage(this.value)) {
                this.classList.add('error');
                messageError.textContent = 'Message must be at least 10 characters';
            } else {
                this.classList.remove('error');
                messageError.textContent = '';
            }
        });

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Reset form status
            formStatus.className = 'form-status';
            formStatus.textContent = '';
            formStatus.style.display = 'none';

            // Get form values
            const name = nameInput.value;
            const email = emailInput.value;
            const phone = phoneInputField.value ? window.phoneInputInstance.getNumber() : '';
            const message = messageInput.value;

            // Validate all fields
            let isValid = true;

            if (!validateName(name)) {
                nameInput.classList.add('error');
                document.getElementById('name-error').textContent = 'Name must be at least 2 characters';
                isValid = false;
            }

            if (!validateEmail(email)) {
                emailInput.classList.add('error');
                document.getElementById('email-error').textContent = 'Please enter a valid email address';
                isValid = false;
            }

            if (phone && !validatePhone(window.phoneInputInstance)) {
                phoneInputField.classList.add('error');
                document.getElementById('phone-error').textContent = 'Please enter a valid phone number';
                isValid = false;
            }

            if (!validateMessage(message)) {
                messageInput.classList.add('error');
                document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
                isValid = false;
            }

            if (!isValid) return;

            // Show loading state
            submitBtn.disabled = true;
            document.querySelector('.btn-text').style.display = 'none';
            document.querySelector('.btn-loading').style.display = 'inline-block';

            // Prepare EmailJS parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                message: message
            };

            // Send email using EmailJS (replace with your actual service and template IDs)
            emailjs.send('service_vv1aoua', 'template_ezsew2r', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Show success message
                    formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
                    formStatus.className = 'form-status success';
                    formStatus.style.display = 'block';

                    // Reset the form
                    contactForm.reset();

                    // Reset phone input
                    if (window.phoneInputInstance) {
                        window.phoneInputInstance.setCountry('us');
                    }

                    // Reset loading state
                    submitBtn.disabled = false;
                    document.querySelector('.btn-text').style.display = 'inline-block';
                    document.querySelector('.btn-loading').style.display = 'none';
                }, function(error) {
                    console.log('FAILED...', error);

                    // Show error message
                    formStatus.textContent = 'Oops! Something went wrong. Please try again later.';
                    formStatus.className = 'form-status error';
                    formStatus.style.display = 'block';

                    // Reset loading state
                    submitBtn.disabled = false;
                    document.querySelector('.btn-text').style.display = 'inline-block';
                    document.querySelector('.btn-loading').style.display = 'none';
                });
        });
    }

   

    // Preloader animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});
