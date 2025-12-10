/**
 * MinT Presentation Project - Deploy Like a Pro
 * interactive JavaScript for live workshop
 */

document.addEventListener("DOMContentLoaded", () => {
  initCursorGlow();
  initTerminalAnimation();
  initButtonHandlers();
  initSmoothScroll();
  initScrollAnimations();
  initNavHighlight();
});

/**
 * Cursor glow effect that follows mouse
 */
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;

  let mouseX = 0,
    mouseY = 0;
  let glowX = 0,
    glowY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth follow animation
  function animate() {
    const speed = 0.1;
    glowX += (mouseX - glowX) * speed;
    glowY += (mouseY - glowY) * speed;

    glow.style.left = glowX + "px";
    glow.style.top = glowY + "px";

    requestAnimationFrame(animate);
  }

  animate();

  // Hide on mobile
  if (window.matchMedia("(max-width: 768px)").matches) {
    glow.style.display = "none";
  }
}

/**
 * Terminal typing animation
 */
function initTerminalAnimation() {
  const lines = document.querySelectorAll(".term-line");

  const runAnimation = () => {
    // Reset all lines
    lines.forEach((line) => {
      line.classList.remove("visible");
    });

    // Animate each line with delay
    lines.forEach((line, index) => {
      const delay = parseInt(line.dataset.delay) || index * 400;
      setTimeout(() => {
        line.classList.add("visible");
      }, delay);
    });
  };

  // Initial animation with delay
  setTimeout(runAnimation, 800);

  // Repeat animation every 8 seconds
  setInterval(runAnimation, 8000);
}

/**
 * Button click handlers with effects
 */
function initButtonHandlers() {
  const deployBtn = document.getElementById("deployDemo");
  const viewStepsBtn = document.getElementById("viewSteps");

  if (deployBtn) {
    deployBtn.addEventListener("click", () => {
      // Create confetti effect
      createConfetti();

      // Show celebratory toast
      showToast("🚀 Deployment initiated! You're on your way!", "success");
    });
  }

  if (viewStepsBtn) {
    viewStepsBtn.addEventListener("click", () => {
      document.getElementById("steps")?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}

/**
 * Create confetti celebration effect
 */
function createConfetti() {
  const colors = ["#F43F5E", "#F97316", "#A855F7", "#22C55E", "#3B82F6"];
  const confettiCount = 50;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const startX = Math.random() * window.innerWidth;
    const rotation = Math.random() * 360;

    confetti.style.cssText = `
            position: fixed;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            left: ${startX}px;
            top: -20px;
            border-radius: ${Math.random() > 0.5 ? "50%" : "2px"};
            z-index: 10000;
            pointer-events: none;
            transform: rotate(${rotation}deg);
            animation: confetti-fall ${
              2 + Math.random() * 2
            }s ease-out forwards;
            animation-delay: ${Math.random() * 0.5}s;
        `;

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }

  // Add animation keyframes if not exists
  if (!document.querySelector("#confetti-styles")) {
    const style = document.createElement("style");
    style.id = "confetti-styles";
    style.textContent = `
            @keyframes confetti-fall {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
    document.head.appendChild(style);
  }
}

/**
 * Toast notification system
 */
function showToast(message, type = "info") {
  // Remove existing toasts
  document.querySelectorAll(".toast").forEach((t) => t.remove());

  const toast = document.createElement("div");
  toast.className = "toast";

  const backgrounds = {
    success: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
    info: "linear-gradient(135deg, #F43F5E 0%, #F97316 100%)",
    warning: "linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)",
  };

  toast.style.cssText = `
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: ${backgrounds[type]};
        color: white;
        padding: 1rem 2rem;
        border-radius: 16px;
        font-weight: 600;
        font-family: 'Space Grotesk', sans-serif;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        opacity: 0;
        transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    `;

  toast.textContent = message;
  document.body.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.style.transform = "translateX(-50%) translateY(0)";
    toast.style.opacity = "1";
  });

  // Animate out
  setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(100px)";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 3500);
}

/**
 * Smooth scroll for navigation
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Step cards
  document.querySelectorAll(".step-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${
      index * 0.1
    }s`;
    observer.observe(card);
  });

  // Resource cards
  document.querySelectorAll(".resource-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
      index * 0.1
    }s`;
    observer.observe(card);
  });
}

/**
 * Navigation highlight on scroll
 */
function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-item");

  const observerOptions = {
    threshold: 0.3,
    rootMargin: "-100px 0px -50% 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navItems.forEach((item) => {
          item.classList.remove("active");
          if (item.getAttribute("href") === `#${id}`) {
            item.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}

/**
 * Parallax effect for orbs
 */
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const orbs = document.querySelectorAll(".gradient-orb");

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.1;
    orb.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// // Console branding
// console.log(
//   "%c🌙 MinT Workshop - Deploy Like a Pro",
//   "font-size: 24px; font-weight: bold; background: linear-gradient(135deg, #F43F5E, #F97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
// );
// console.log(
//   "%c📅 December 10, 2025 | 4:20 - 6:00 PM WAT",
//   "color: #F97316; font-size: 14px;"
// );
// console.log(
//   "%cYou're about to deploy like a pro! 🚀",
//   "color: #A855F7; font-size: 14px;"
// );
