      // Mobile Menu Toggle
      const menuToggle = document.getElementById("menuToggle");
      const navLinks = document.getElementById("navLinks");

      menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      // Close mobile menu when clicking on a link
      const navItems = document.querySelectorAll(".nav-links a");
      navItems.forEach((item) => {
        item.addEventListener("click", () => {
          navLinks.classList.remove("active");
        });
      });

      // Header scroll effect
      window.addEventListener("scroll", () => {
        const header = document.getElementById("header");
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Animate skill bars when they come into view
      const skillBars = document.querySelectorAll(".skill-progress");

      const animateSkillBars = () => {
        skillBars.forEach((bar) => {
          const barPosition = bar.getBoundingClientRect().top;
          const screenPosition = window.innerHeight / 1.3;

          if (barPosition < screenPosition) {
            const width = bar.getAttribute("data-width");
            bar.style.width = width + "%";
          }
        });
      };

      window.addEventListener("scroll", animateSkillBars);
      // Trigger once on page load
      window.addEventListener("load", animateSkillBars);

      // Form submission
      const contactForm = document.getElementById("contactForm");
      const formStatus = document.getElementById("formStatus");
      const submitBtn = document.getElementById("submitBtn");

      contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Show sending status
        formStatus.textContent = "Sending your message...";
        formStatus.className = "form-status sending";
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
          formStatus.textContent =
            "Thank you! Your message has been sent successfully.";
          formStatus.className = "form-status success";
          contactForm.reset();
          submitBtn.disabled = false;

          // Hide status message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = "none";
          }, 5000);
        }, 1500);
      });