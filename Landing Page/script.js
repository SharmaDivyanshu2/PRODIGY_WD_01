// JavaScript for adding interactivity to the navigation menu
const navbar = document.getElementById("navbar");

// Function to update the navbar style when scrolling
function updateNavbarStyle() {
  if (window.scrollY > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// Event listener for scrolling
window.addEventListener("scroll", updateNavbarStyle);

// Function to toggle the "scrolled" class when hovering over a menu item
function toggleNavbarHoverStyle() {
  navbar.classList.toggle("scrolled");
}

// Event listeners for hovering over menu items
const menuItems = navbar.getElementsByTagName("a");
for (const item of menuItems) {
  item.addEventListener("mouseenter", toggleNavbarHoverStyle);
  item.addEventListener("mouseleave", toggleNavbarHoverStyle);
}

// Function to handle form submission
function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // You can handle form submission here, e.g., send data to a backend server
  console.log("Name: ", name);
  console.log("Email: ", email);
  console.log("Message: ", message);

  // Clearing form inputs after submission (optional)
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  // Show a success message or perform any other actions as needed
  alert("Thank you! Your message has been sent.");
}

// Smooth scrolling when clicking on menu items
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition = targetElement.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const links = document.querySelectorAll(".navbar a");
links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const href = link.getAttribute("href");
    smoothScroll(href, 800);
  });
});
