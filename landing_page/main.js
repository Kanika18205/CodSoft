const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

 // Add event listeners for collection cards to toggle flipped effect
 const collectionCards = document.querySelectorAll('.collection_card');

 collectionCards.forEach(card => {
   card.addEventListener('click', () => {
     card.classList.toggle('flipped');
   });
 });
 // Handle the form submission with validation
 const contactForm = document.querySelector('.contact_form');
 contactForm.addEventListener('submit', function(e) {
   e.preventDefault(); // Prevent the default form submission
 
   // Validate fields (simple check)
   const name = contactForm.querySelector('input[type="text"]').value;
   const email = contactForm.querySelector('input[type="email"]').value;
   const message = contactForm.querySelector('textarea').value;
 
   if (name && email && message) {
     //send the form data to your server
     alert('Thank you for your message! We\'ll get back to you soon.');
     
     // reset the form
     contactForm.reset();
   } else {
     alert('Please fill in all fields before submitting.');
   }
 });

//scroll
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1100,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1300,
});


ScrollReveal().reveal(".info_content h2", {
    ...scrollRevealOption,
    delay: 1600,
  });

  ScrollReveal().reveal(".info_content p", {
    ...scrollRevealOption,
    delay: 1800,
  });
  ScrollReveal().reveal(".features_content h2", {
    ...scrollRevealOption,
    delay: 1200,
  });
  ScrollReveal().reveal(".features_content ul", {
    ...scrollRevealOption,
    delay: 1800,
  });
  ScrollReveal().reveal(".collections_section", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".contact_section", {
    ...scrollRevealOption,
    delay: 800,
  });
