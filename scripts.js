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

const container = document.querySelector('.scrolling-image-container');
let scrollPosition = 0; // Initial scroll position
  const speed = 2; // Scrolling speed (pixels per frame)

  // Duplicate images to allow seamless looping
  function duplicateImages() {
    const images = Array.from(container.children);
    images.forEach((img) => {
      const clone = img.cloneNode(true);
      container.appendChild(clone); // Append the clone
    });
  }

  // Circular scrolling logic
  function circularScroll() {
    scrollPosition += speed; // Move scroll position
    container.style.transform = `translateX(-${scrollPosition}px)`; // Scroll left

    // Reset position when the scroll exceeds the original content width
    if (scrollPosition >= container.scrollWidth / 2) {
      scrollPosition = 0; // Reset to the start
    }

    requestAnimationFrame(circularScroll); // Keep scrolling
  }

  // Initialize circular scrolling
  duplicateImages();
  circularScroll();

  const meetTeamBtn = document.getElementById('meetTeamBtn');
  const teamPopup = document.getElementById('teamPopup');
  const closePopup = document.getElementById('closePopup');

  // Show the popup when the button is clicked
  meetTeamBtn.addEventListener('click', () => {
    teamPopup.style.display = 'flex'; // Make popup visible
  });

  // Close the popup when the close icon is clicked
  closePopup.addEventListener('click', () => {
    teamPopup.style.display = 'none';
  });

  // Close the popup when clicking outside of the content area
  teamPopup.addEventListener('click', (event) => {
    if (event.target === teamPopup) {
      teamPopup.style.display = 'none';
    }
  });

  document.getElementById('viewMoreBtn').addEventListener('click', function () {
    // Show the hidden products
    const hiddenProducts = document.querySelectorAll('.hidden-products');
    for(var i=0; i<hiddenProducts.length; i++) {
      hiddenProducts[i].style.display = 'block'
    }
    
    // Remove the "View More" button
    this.style.display = 'none';
  });
