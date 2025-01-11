// navbar scroll background function
const navBar = document.getElementById('navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});
 

// Side Menu

const icon = document.getElementById('icon');
const sideMenu = document.getElementById('sidemenu');
const overlay = document.getElementById('overlay');
const close = document.getElementById('close');

icon.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.add("side-open");
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove("side-open");
});

close.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove("side-open");
});




const parallaxImage = document.getElementById('parallaxImage');
const secondSection = document.querySelector('.second');
const mainSection = document.getElementById('main');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Current scroll position
    const secondSectionTop = secondSection.offsetTop; // Top of the second section
    const secondSectionBottom = secondSectionTop + secondSection.offsetHeight;
    const mainSectionBottom = mainSection.offsetTop + mainSection.offsetHeight;

    if (scrollY >= secondSectionTop && scrollY < secondSectionBottom) {
        
        parallaxImage.classList.add('animate');
        parallaxImage.classList.remove('reset', 'hidden');

    } else if (scrollY >= secondSectionBottom) {
        
        parallaxImage.classList.add('hidden');
        parallaxImage.classList.remove('animate');

    } else if (scrollY < mainSectionBottom){

        parallaxImage.classList.add('reset');
        parallaxImage.classList.remove('animate', 'hidden');

    }
});

// resume download

function viewAndDownloadResume() {
    const viewUrl = 'https://drive.google.com/file/d/1OREiAgBMfuDaIn54CArz5oc8YiO0VB4S/view?usp=sharing';
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1OREiAgBMfuDaIn54CArz5oc8YiO0VB4S';

    

    window.open(viewUrl, '_blank');

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Abdul_Aziz_VI_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// scroll effect

document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    const rotation = scrollPosition / 5; // Adjust the divisor to control rotation speed
    
    const svgElement = document.getElementById("rotate");
    svgElement.style.transform = `rotate(${rotation}deg)`; // Apply rotation
});


// thirdsection star

document.addEventListener("DOMContentLoaded", () => {
    const starSections = document.querySelectorAll(".stars-container");
    const starCount = 50; // Adjust the number of stars

    // Function to generate random positions and timings for stars
    function createStars(container) {
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.classList.add("star");

            // Randomize star position
            const xPos = Math.random() * 100; // Percentage of container width
            const yPos = Math.random() * 100; // Percentage of container height

            // Apply position
            star.style.left = `${xPos}%`;
            star.style.top = `${yPos}%`;

            // Randomize animation delay for twinkle effect
            const delay = Math.random() * 5; // 0 to 5 seconds
            star.style.animationDelay = `${delay}s`;

            // Add star to the container
            container.appendChild(star);
        }
    }

    // Create stars for each section
    starSections.forEach((container) => createStars(container));
});

// skill animation

document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".tools");

    rows.forEach((row) => {
        // Clone the content to create a seamless loop
        const items = Array.from(row.children);
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            row.appendChild(clone);
        });
    });
});








