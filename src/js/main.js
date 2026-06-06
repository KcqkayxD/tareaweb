/**
 * KcQ - Consultoría de Diseño de Interiores
 * Script principal: Navegación, validación de formulario e interacciones
 */

document.addEventListener('DOMContentLoaded', function() {

    // ===== ELEMENTOS DEL DOM =====
    const header = document.querySelector('.header');
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const menuLinks = document.querySelectorAll('.header__menu-link');
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    // ===== NAVEGACIÓN: Header scroll =====
    function handleScroll() {
        if (window.scrollY > 80) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar

    // ===== NAVEGACIÓN: Menú móvil =====
    function toggleMenu() {
        const isOpen = mainNav.classList.toggle('header__menu--open');
        menuToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    // Cerrar menú al hacer click en un enlace (mobile)
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('header__menu--open')) {
                toggleMenu();
            }
        });
    });

    // ===== NAVEGACIÓN: Active link =====
    function setActiveLink() {
        const scrollPosition = window.scrollY + 150;

        menuLinks.forEach(function(link) {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    menuLinks.forEach(function(l) { l.classList.remove('active'); });
                    link.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);

    // ===== VALIDACIÓN DEL FORMULARIO =====
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Limpiar errores previos
            clearErrors();

            let isValid = true;

            // Validar nombre
            const nombre = document.getElementById('nombre');
            const nombreError = document.getElementById('nombre-error');
            if (!nombre.value.trim()) {
                showError(nombre, nombreError, 'El nombre es obligatorio');
                isValid = false;
            } else if (nombre.value.trim().length < 3) {
                showError(nombre, nombreError, 'El nombre debe tener al menos 3 caracteres');
                isValid = false;
            }

            // Validar email
            const email = document.getElementById('email');
            const emailError = document.getElementById('email-error');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim()) {
                showError(email, emailError, 'El correo electrónico es obligatorio');
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                showError(email, emailError, 'Ingresa un correo electrónico válido');
                isValid = false;
            }

            // Validar asunto
            const asunto = document.getElementById('asunto');
            const asuntoError = document.getElementById('asunto-error');
            if (!asunto.value.trim()) {
                showError(asunto, asuntoError, 'El asunto es obligatorio');
                isValid = false;
            } else if (asunto.value.trim().length < 5) {
                showError(asunto, asuntoError, 'El asunto debe tener al menos 5 caracteres');
                isValid = false;
            }

            // Validar mensaje
            const mensaje = document.getElementById('mensaje');
            const mensajeError = document.getElementById('mensaje-error');
            if (!mensaje.value.trim()) {
                showError(mensaje, mensajeError, 'El mensaje es obligatorio');
                isValid = false;
            } else if (mensaje.value.trim().length < 10) {
                showError(mensaje, mensajeError, 'El mensaje debe tener al menos 10 caracteres');
                isValid = false;
            }

            // Si todo es válido
            if (isValid) {
                // Simular envío
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;

                setTimeout(function() {
                    contactForm.reset();
                    formSuccess.classList.add('form__success--visible');
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;

                    // Ocultar mensaje de éxito después de 5 segundos
                    setTimeout(function() {
                        formSuccess.classList.remove('form__success--visible');
                    }, 5000);
                }, 1500);
            }
        });

        // Validación en tiempo real (al salir del campo)
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(function(input) {
            input.addEventListener('blur', function() {
                validateField(input);
            });

            // Limpiar error al escribir
            input.addEventListener('input', function() {
                const errorId = input.getAttribute('aria-describedby');
                if (errorId) {
                    const errorElement = document.getElementById(errorId);
                    if (errorElement && errorElement.textContent) {
                        errorElement.textContent = '';
                        input.classList.remove('form__input--error');
                    }
                }
            });
        });
    }

    // ===== FUNCIONES AUXILIARES =====

    function showError(input, errorElement, message) {
        input.classList.add('form__input--error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.form__error');
        errorElements.forEach(function(el) {
            el.textContent = '';
        });

        const inputs = document.querySelectorAll('.form__input, .form__textarea');
        inputs.forEach(function(input) {
            input.classList.remove('form__input--error');
        });

        formSuccess.classList.remove('form__success--visible');
    }

    function validateField(input) {
        const value = input.value.trim();
        const errorId = input.getAttribute('aria-describedby');
        const errorElement = document.getElementById(errorId);

        if (!errorElement) return;

        // Limpiar error previo
        errorElement.textContent = '';
        input.classList.remove('form__input--error');

        const fieldName = input.getAttribute('name');

        switch(fieldName) {
            case 'nombre':
                if (!value) {
                    showError(input, errorElement, 'El nombre es obligatorio');
                } else if (value.length < 3) {
                    showError(input, errorElement, 'El nombre debe tener al menos 3 caracteres');
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    showError(input, errorElement, 'El correo electrónico es obligatorio');
                } else if (!emailRegex.test(value)) {
                    showError(input, errorElement, 'Ingresa un correo electrónico válido');
                }
                break;

            case 'asunto':
                if (!value) {
                    showError(input, errorElement, 'El asunto es obligatorio');
                } else if (value.length < 5) {
                    showError(input, errorElement, 'El asunto debe tener al menos 5 caracteres');
                }
                break;

            case 'mensaje':
                if (!value) {
                    showError(input, errorElement, 'El mensaje es obligatorio');
                } else if (value.length < 10) {
                    showError(input, errorElement, 'El mensaje debe tener al menos 10 caracteres');
                }
                break;
        }
    }

    // ===== SCROLL SUAVE PARA NAVEGACIÓN =====
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = header.offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== BOTÓN FLOTANTE WHATSAPP =====
    const whatsappNumber = '56955198638'; 
    const whatsappMessage = 'Hola, quiero más información sobre sus servicios.';
    const whatsappUrl = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(whatsappMessage);

    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = whatsappUrl;
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.setAttribute('aria-label', 'Abrir chat de WhatsApp');
    whatsappBtn.style.position = 'fixed';
    whatsappBtn.style.right = '20px';
    whatsappBtn.style.bottom = '20px';
    whatsappBtn.style.width = '56px';
    whatsappBtn.style.height = '56px';
    whatsappBtn.style.borderRadius = '50%';
    whatsappBtn.style.backgroundColor = '#25D366';
    whatsappBtn.style.color = '#ffffff';
    whatsappBtn.style.display = 'flex';
    whatsappBtn.style.alignItems = 'center';
    whatsappBtn.style.justifyContent = 'center';
    whatsappBtn.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    whatsappBtn.style.textDecoration = 'none';
    whatsappBtn.style.fontSize = '28px';
    whatsappBtn.style.zIndex = '9999';
    whatsappBtn.innerHTML = '&#9990;';

    document.body.appendChild(whatsappBtn);

});
