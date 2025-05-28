// Smoothly scroll to a section by ID
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// Toggle light/dark theme
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleThemeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// Function used by 404 page "Take me back home" link
function showHome() {
    scrollToSection("home");
}

// Basic typewriter effect for the element having class "typed-text"
document.addEventListener("DOMContentLoaded", function () {
    const typedTextElement = document.querySelector(".typed-text");
    if (!typedTextElement) return;
    
    const text = "Welcome to my digital universe!";
    let index = 0;
    function type() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
});

// Animate skill bars when the "skills" section is visible using IntersectionObserver
function animateSkillBars() {
    const skillProgressElements = document.querySelectorAll(".skill-progress");
    skillProgressElements.forEach((el) => {
        const progress = el.getAttribute("data-progress");
        el.style.width = progress + "%";
    });
}

// Optional: Reset skill bars when out of view
function resetSkillBars() {
    const skillProgressElements = document.querySelectorAll(".skill-progress");
    skillProgressElements.forEach((el) => {
        el.style.width = "0%";
    });
}

const skillsSection = document.getElementById("skills");
if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                } else {
                    resetSkillBars();
                }
            });
        },
        { threshold: 0.5 }
    );
    skillsObserver.observe(skillsSection);
}

// Dummy contact form submission handler (replace with actual integration when needed)
const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // For a real submission, integrate your API here.
        const formStatus = document.getElementById("form-status");
        formStatus.textContent = "Message sent successfully!";
        contactForm.reset();
    });
}

// Reveal sections on scroll and re-trigger visibility events
const sections = document.querySelectorAll('main section');
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    },
    { threshold: 0.15 }
);

sections.forEach(section => sectionObserver.observe(section));

