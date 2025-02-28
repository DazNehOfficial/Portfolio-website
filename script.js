const words = ["optimal", "profitable", "sustainable"]; // Array of words
const wordElement = document.getElementById("word");
const cursorElement = document.getElementById("cursor");
let wordIndex = 0;
let charIndex = 0;

function type() {
    // Show the cursor while typing
    cursorElement.style.display = "inline"; 

    if (charIndex < words[wordIndex].length) {
        wordElement.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust typing speed (in milliseconds)
    } else {
        // Wait for a moment before deleting
        setTimeout(deleteText, 1000); // Adjust pause before deleting
    }
}

function deleteText() {
    // Show the cursor while deleting
    cursorElement.style.display = "inline"; 

    if (charIndex > 0) {
        wordElement.innerHTML = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50); // Adjust deleting speed (in milliseconds)
    } else {
        // Move to the next word
        wordIndex = (wordIndex + 1) % words.length; // Loop back to the first word
        // Show the cursor again before typing the next word
        setTimeout(type, 500); // Adjust pause before typing the next word
    }
}

// Start typing effect when the page loads
window.onload = function() {
    type(); // Start typing effect
};

document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-card');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the section is visible

        projectCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('visible');
            } else {
                card.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check on page load
});

document.addEventListener("DOMContentLoaded", () => {
    const skillItems = document.querySelectorAll('.skill-item');

    // Animate each skill item on entrance
    skillItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            delay: index * 0.1, // Stagger the entrance
            ease: "power2.out"
        });
    });
});