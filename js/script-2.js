
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





