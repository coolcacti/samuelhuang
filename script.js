document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const links = navLinks.querySelectorAll("a");


  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  links.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
  });
 });
});


document.addEventListener('DOMContentLoaded', function() {
  const texts = ["a developer", "a bookworm", "a baker", "an engineer", "an artist"];
  const element = document.querySelector('.typewriter');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isEnd = false;

  function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      // Backspace effect
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Typing effect
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    // Check if we've finished typing or deleting
    if (!isDeleting && charIndex === currentText.length) {
      // Pause at the end of typing
      isEnd = true;
      setTimeout(() => {
        isDeleting = true;
        isEnd = false;
        typeWriter();
      }, 2000); // 2 second pause before deleting
      return;
    } else if (isDeleting && charIndex === 0) {
      // Move to next text after deleting
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length; // Loop back to first text
    }

    // Set typing/deleting speed
    const speed = isDeleting ? 100 : isEnd ? 2000 : 150;
    setTimeout(typeWriter, speed);
  }

  // Add cursor class and start typing
  element.classList.add('cursor');
  setTimeout(typeWriter, 500); // Initial delay
});