document.addEventListener('DOMContentLoaded', () => {

   // Scroll-to-top button
   const scrollToTopButton = document.createElement('button');
   scrollToTopButton.textContent = '↑';
   scrollToTopButton.classList.add('scroll-to-top');
   document.body.appendChild(scrollToTopButton);

   window.addEventListener('scroll', () => {
       if (window.scrollY > 300) {
           scrollToTopButton.style.display = 'block';
       } else {
           scrollToTopButton.style.display = 'none';
       }
   });
   scrollToTopButton.addEventListener('click', () => {
       window.scrollTo({ top: 0, behavior: 'smooth' });
   });

   // Menu buttons
   const menuOpenButton = document.querySelector("#menu-open-button");
   const menuCloseButton = document.querySelector("#menu-close-button");

   menuOpenButton.addEventListener("click", () => {
       document.body.classList.toggle("show-mobile-menu");
   });

   menuCloseButton.addEventListener("click", () => menuOpenButton.click());

   // Contact form validation
   try {
       document.querySelector(".contact-form").addEventListener("submit", function(event) {
           event.preventDefault(); // Prevent default form submission

           let isValid = true;

           // Validate Name
           let name = document.getElementById("name");
           let nameError = document.getElementById("name-error");
           if (name.value.trim() === "") {
               nameError.textContent = "Name is required.";
               nameError.style.color = "red";
               isValid = false;
           } else {
               nameError.textContent = ""; 
           }

           // Validate Email
           let email = document.getElementById("email");
           let emailError = document.getElementById("email-error");
           const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if (email.value.trim() === "") {
               emailError.textContent = "Email is required.";
               emailError.style.color = "red";
               isValid = false;
           } else if (!emailPattern.test(email.value)) {
               emailError.textContent = "Please enter a valid email address.";
               emailError.style.color = "red";
               isValid = false;
           } else {
               emailError.textContent = "";
           }

           // Validate Message
           let message = document.getElementById("message");
           let messageError = document.getElementById("message-error");
           if (message.value.trim() === "") {
               messageError.textContent = "Message is required.";
               messageError.style.color = "red";
               isValid = false;
           } else {
               messageError.textContent = "";
           }

           // Validate Terms Checkbox
           let checkbox = document.getElementById("terms-checkbox");
           if (!checkbox.checked) {
               alert("You must agree to the terms and conditions.");
               isValid = false;
           }

           // If all validations pass, proceed with form submission
           if (isValid) {
               let form = document.getElementById("contact-form");
               let successMessage = document.getElementById("success-message");

               if (form && successMessage) {
                   // Simulate form submission (since action is empty)
                   form.remove(); // Remove the form
                   successMessage.style.display = 'block'; // Show success message
               }
           }
       });
   } catch (error) {
       console.error("Error in contact form validation:", error);
   }

   // Eco Tips

   const tips = [
      "Tip: Use reusable bags to reduce plastic waste.",
      "Fact: A single tree can absorb up to 48 pounds of CO2 per year.",
      "Tip: Turn off lights when not in use to save energy.",
      "Fact: The average person wastes 30% of the food they buy."
   ];
   
   const ecoTipsElement = document.getElementById('eco-tips');
   
   let currentTip = 0;
   setInterval(() => {
      ecoTipsElement.innerHTML = `<p>${tips[currentTip]}</p>`;
      currentTip = (currentTip + 1) % tips.length;
   }, 6000);

  // Read More Button
  const readMoreButton = document.createElement('button');
  readMoreButton.textContent = 'Read More';
  readMoreButton.classList.add('read-more-button');
  document.querySelector('.mission-section .p3-details').appendChild(readMoreButton);

  readMoreButton.addEventListener('click', () => {
      const extraContent = document.createElement('p');
      extraContent.textContent = 'Our approach is built on three core principles: Education, Action, and Community. We provide clear, well-researched resources, actionable steps, and foster a network of like-minded individuals who want to make a difference. From simple lifestyle swaps to in-depth guides on sustainable practices, EcoChic makes it easy for anyone to embrace an eco-conscious mindset. Whether its reducing waste, supporting ethical brands, or learning about climate-positive solutions, we believe that sustainability should be accessible, inclusive, and rewarding.';
      extraContent.classList.add('extra-content');
      document.querySelector('.mission-section .p3-details').appendChild(extraContent);

      readMoreButton.style.display = 'none';
  });

  // Logo Hover Effect
  const logot = document.querySelector('.logo-text');
  logot.addEventListener('mouseover', () => {
      logot.style.color = '#ccc';
  });
  logot.addEventListener('mouseout', () => {
      logot.style.color = '#fff';
  });

   // Newsletter Popup
   const newsletterPopup = document.createElement('div');
   newsletterPopup.classList.add('newsletter-popup');
   newsletterPopup.innerHTML = `
       <div class="popup-content">
           <h3>Subscribe to Our Newsletter</h3>
           <p>Get the latest updates on sustainability tips and eco-friendly living.</p>
           <form class="subs-input">
               <input type="email" placeholder="Enter your email">
               <button id="sub-but">Subscribe</button>
               <button id="close-popup">Close</button>
           </form>
       </div>
   `;
   document.body.appendChild(newsletterPopup);

   setTimeout(() => {
       newsletterPopup.style.display = 'flex';
   }, 2000);

   document.getElementById('close-popup').addEventListener('click', () => {
       newsletterPopup.parentElement.removeChild(newsletterPopup); // Use parentElement.removeChild
   });

   document.getElementById('sub-but').addEventListener('click', () => {
       newsletterPopup.parentElement.removeChild(newsletterPopup); // Use parentElement.removeChild
   });

});