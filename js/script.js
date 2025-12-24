 /* provide animation for work section */
document.addEventListener('DOMContentLoaded', function() {
    const wrapperElements = document.querySelectorAll('.wapper');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('wapper-animate');
            }
        });
    }, { threshold: 0.2 });
    
    wrapperElements.forEach(element => {
        observer.observe(element);
    });
});

/* counting number of likes and many more */
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter-number');
    
    const startCounting = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 1000; // 2 seconds
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
});
/* the provide fact dark section and choose section animation */
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('choose-section')) {
                    entry.target.querySelector('.container').classList.add('choose-animate');
                }
                if (entry.target.classList.contains('facts-dark-section')) {
                    entry.target.querySelector('.container').classList.add('facts-animate');
                }
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('.choose-section, .facts-dark-section').forEach(section => {
        observer.observe(section);
    });
});
/* slider make */
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(index) {
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        items[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % items.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Show first slide
    showSlide(1);

    // Auto slide every 5 seconds
    setInterval(nextSlide, 2000);
});
/* faq section top to bottom  animation */

// Add this to your existing script.js file
document.addEventListener('DOMContentLoaded', function() {
    const faqSection = document.querySelector('.faq-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.container').classList.add('faq-animate');
            }
        });
    }, { threshold: 0.2 });

    observer.observe(faqSection);
});

/* footer animation bottom to top */
// Footer animation trigger
function checkFooterAnimation() {
    const footer = document.querySelector('.footer-section');
    if (footer) {
        const footerPosition = footer.getBoundingClientRect();
        const screenHeight = window.innerHeight;
        
        if (footerPosition.top < screenHeight * 0.85) {
            footer.classList.add('footer-animate');
        }
    }
}

//  scroll event listener
window.addEventListener('scroll', checkFooterAnimation);
// Initial check
checkFooterAnimation();


// AOS (Animate On Scroll) initialization
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

/* navbar problem mobile responsive */
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navbarCollapse.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbarCollapse.contains(e.target) && !navbarToggle.contains(e.target)) {
            navbarCollapse.classList.remove('show');
        }
    });
});


//navbar scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        $('.navbar-custom').addClass('scrolled');
    } else {
        $('.navbar-custom').removeClass('scrolled');
    }
});

function filterCars() {
    const typeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    const capacityFilter = document.querySelector('.capacity-filter').value;
    const carsContainer = document.querySelector('.filtered-cars');
    
    document.querySelectorAll('.car-card').forEach(card => {
        let showCar = true;
        const cardContainer = card.closest('.col-md-4');
        
        // Type filtering
        if (typeFilter !== 'all' && !card.classList.contains(typeFilter)) {
            showCar = false;
        }
        
        // Capacity filtering
        if (capacityFilter !== 'all') {
            const carCapacity = card.querySelector('.car-info span:nth-child(2)').textContent;
            if (!carCapacity.includes(capacityFilter)) {
                showCar = false;
            }
        }
        
        if (showCar) {
            cardContainer.style.display = 'block';
            cardContainer.style.opacity = '1';
            cardContainer.style.transform = 'scale(1)';
        } else {
            cardContainer.style.display = 'none';
            cardContainer.style.opacity = '0';
            cardContainer.style.transform = 'scale(0.8)';
        }
    });
}