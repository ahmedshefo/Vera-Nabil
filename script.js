// Relationship start date
const relationshipDate = new Date('2025-10-12');  // Vera & Nabil - Since October 12, 2025

// Calculate days together
function calculateDays(startDate) {
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

// Animate number counting
function animateCounter(element, targetValue, duration = 2000) {
    let startValue = 0;
    const increment = targetValue / (duration / 16); // 60 FPS
    
    const timer = setInterval(() => {
        startValue += increment;
        if (startValue >= targetValue) {
            element.textContent = targetValue;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(startValue);
        }
    }, 16);
}

// Update days counter
function updateDaysCounters() {
    const days = calculateDays(relationshipDate);
    const counter = document.getElementById('daysCount1');
    
    if (counter) {
        animateCounter(counter, days);
    }
}

// Update current date in footer
function updateCurrentDate() {
    const dateElement = document.getElementById('currentDate');
    if (dateElement) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const currentDate = new Date().toLocaleDateString('en-US', options);
        dateElement.textContent = `Today: ${currentDate}`;
    }
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.message-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Create floating hearts animation
function createFloatingHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(heartsContainer);

    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: absolute;
            bottom: -50px;
            left: ${Math.random() * 100}%;
            font-size: ${Math.random() * 20 + 10}px;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: floatUp ${Math.random() * 3 + 4}s linear forwards;
        `;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 3000);
}

// Add CSS for floating hearts animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add sparkle effect on heart hover
function addHeartInteraction() {
    document.querySelectorAll('.heart').forEach(heart => {
        heart.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'heartbeat 0.6s ease-in-out 3';
            }, 10);
        });
    });
}

// Update day counter every hour
function startDayCounterUpdate() {
    updateDaysCounters();
    setInterval(updateDaysCounters, 3600000); // Update every hour
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateDaysCounters();
    updateCurrentDate();
    addScrollAnimations();
    createFloatingHearts();
    addHeartInteraction();
    startDayCounterUpdate();
});

// Update date at midnight
function scheduleNextDateUpdate() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        updateCurrentDate();
        updateDaysCounters();
        scheduleNextDateUpdate();
    }, timeUntilMidnight);
}

scheduleNextDateUpdate();
