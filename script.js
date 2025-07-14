document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initEmailForm();
    initAnimations();
    initParallaxEffect();
});

function initCountdown() {
    const countdownElements = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate.getTime() - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdownElements.days.textContent = String(days).padStart(2, '0');
            countdownElements.hours.textContent = String(hours).padStart(2, '0');
            countdownElements.minutes.textContent = String(minutes).padStart(2, '0');
            countdownElements.seconds.textContent = String(seconds).padStart(2, '0');

            animateNumberChange(countdownElements.seconds);
        } else {
            Object.values(countdownElements).forEach(el => el.textContent = '00');
        }
    }

    function animateNumberChange(element) {
        element.style.transform = 'scale(1.1)';
        element.style.color = '#f093fb';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.color = 'white';
        }, 100);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function initEmailForm() {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        if (isValidEmail(email)) {
            submitEmail(email);
        } else {
            showMessage('Please enter a valid email address.', 'error');
        }
    });

    emailInput.addEventListener('focus', function() {
        this.parentElement.style.background = 'rgba(255, 255, 255, 0.15)';
        this.parentElement.style.transform = 'scale(1.02)';
    });

    emailInput.addEventListener('blur', function() {
        this.parentElement.style.background = 'rgba(255, 255, 255, 0.1)';
        this.parentElement.style.transform = 'scale(1)';
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitEmail(email) {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
        console.log('Email submitted:', email);
        
        const emails = JSON.parse(localStorage.getItem('campaignEmails') || '[]');
        if (!emails.includes(email)) {
            emails.push(email);
            localStorage.setItem('campaignEmails', JSON.stringify(emails));
        }

        showMessage('Thank you! You\'ll be notified when we launch.', 'success');
        document.getElementById('emailInput').value = '';
        
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }, 1500);
}

function showMessage(text, type) {
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const message = document.createElement('div');
    message.className = `message ${type === 'success' ? 'success-message' : 'error-message'}`;
    message.textContent = text;

    const ctaSection = document.querySelector('.cta-section');
    ctaSection.appendChild(message);

    setTimeout(() => {
        message.classList.add('show');
    }, 100);

    setTimeout(() => {
        if (message.parentElement) {
            message.classList.remove('show');
            setTimeout(() => {
                if (message.parentElement) {
                    message.remove();
                }
            }, 300);
        }
    }, 4000);
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                
                if (entry.target.classList.contains('feature-card')) {
                    const delay = Array.from(entry.target.parentElement.children).indexOf(entry.target) * 200;
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, delay);
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    document.querySelectorAll('[class*="animate"]').forEach(el => {
        observer.observe(el);
    });
}

function initParallaxEffect() {
    const floatingElements = document.querySelectorAll('.element');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        floatingElements.forEach((element, index) => {
            const speed = (index + 1) * 0.3;
            element.style.transform = `translate3d(0, ${rate * speed}px, 0) rotate(${scrolled * (index + 1) * 0.1}deg)`;
        });
    });

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        floatingElements.forEach((element, index) => {
            const xPos = (mouseX - 0.5) * 50 * (index + 1);
            const yPos = (mouseY - 0.5) * 50 * (index + 1);
            
            element.style.transform += ` translate(${xPos}px, ${yPos}px)`;
        });
    });
}

document.querySelector('.email-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.submit-btn').click();
    }
});

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    const timeline = [
        { element: '.logo', delay: 0 },
        { element: '.main-title', delay: 200 },
        { element: '.subtitle', delay: 400 },
        { element: '.coming-soon', delay: 600 },
        { element: '.cta-section', delay: 800 },
        { element: '.features-preview', delay: 1000 }
    ];

    timeline.forEach(({ element, delay }) => {
        setTimeout(() => {
            const el = document.querySelector(element);
            if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        }, delay);
    });
});

function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

addSmoothScrolling();

const style = document.createElement('style');
style.textContent = `
    .error-message {
        background: rgba(239, 68, 68, 0.2);
        border: 1px solid rgba(239, 68, 68, 0.3);
        color: white;
        padding: 1rem;
        border-radius: 10px;
        margin-top: 1rem;
        text-align: center;
        backdrop-filter: blur(10px);
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
    }
    
    .error-message.show {
        opacity: 1;
        transform: translateY(0);
    }
    
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
document.head.appendChild(style);