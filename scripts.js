document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll(".animate");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Stop observing once active
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );
  
    animateElements.forEach((el) => observer.observe(el));
  });

const modal = document.getElementById("popupModal");
const btn = document.getElementById("shopNowButton");
const closeBtn = document.querySelector(".close-btn");

// Open modal on button click
btn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});