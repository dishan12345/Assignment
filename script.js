// function content(){
//     console.log("working");
//     const yellowBanner = document.getElementById('yellowBanner');
//     if (window.scrollY >= window.innerHeight) {
//         yellowBanner.classList.add('fixed'); 
//     } else {
//         yellowBanner.classList.remove('fixed'); 
         
//     }
// }
// Select the yellow banner element
const yellowBanner = document.getElementById('yellowBanner');

// Listen to window's scroll event
window.addEventListener('scroll', function () {
    // Check the scroll position
    if (window.scrollY >= 630) { // Adjust based on when the yellow banner should become sticky
        yellowBanner.classList.add('fixed');
    } else {
        yellowBanner.classList.remove('fixed');
    }
});

