//  Auto year update 
document.getElementById("year").textContent = new Date().getFullYear();

//  Contact form validation 
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;
    const inputs = form.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      const error = input.nextElementSibling;
      if (input.type  "checkbox") {
        if (!input.checked) {
          error.style.display = "block";
          valid = false;
        } else {
          error.style.display = "none";
        }
      } else if (!input.value.trim()) {
        error.style.display = "block";
        valid = false;
      } else {
        error.style.display = "none";
      }
    });

    if (valid) {
      document.getElementById("successMessage").style.display = "block";
      form.reset();
    }
  });
}

//  Skills bar animation (underway not working) 
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".fill");

  if (skillsSection && skillBars.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          skillBars.forEach((bar) => {
            const targetWidth = bar.getAttribute("style").match(/width:\s*([^;]+)/)[1]; 
            bar.style.width = targetWidth; // triggers animation
          });
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(skillsSection);
  }
});
