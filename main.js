// HAMBARGER MENU ICONS
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// HAMBARGER MENU ICONS

document.querySelectorAll('.splide').forEach(function (el) {
  new Splide(el, {
    type: "loop",
    perPage: 3,
    gap: 20,
    speed: 1200,
    rewind: true,
    pagination: true,
    focus: "center",

    breakpoints: {
      991: {
        perPage: 2,
        gap: 12,
      },
      767: {
        perPage: 1,
        gap: 8,
      },
    },
  }).mount();
});


if (document.getElementById("slider2")) {
  var slider = new Splide("#slider2", {
    type: "loop",
    perPage: 4,
    gap: 20,
    speed: 1200,
    rewind: true,
    pagination: true,
    focus: "center",
    breakpoints: {
      960: {
        perPage: 1,
        gap: 5,
      },
      600: {
        perPage: 2,
        gap: 5,
      },
    },
  });
  slider.mount();
}

// COUNTER
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".card-counter p");
  const section = document.querySelector(".why-choose-us");
  let hasStarted = false;

  if (!section || counters.length === 0) return;

  function formatValue(target) {
    if (target === 98) return "98%";
    if (target >= 1000) return "1K+";
    return target + "+";
  }

  function startCounter() {
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"), 10);
      let current = 0;
      const increment = Math.max(1, Math.floor(target / 100));

      function updateCounter() {
        current += increment;

        if (current < target) {
          counter.innerText = current;
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = formatValue(target);
        }
      }

      updateCounter();
    });
  }

  function onScroll() {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!hasStarted && sectionTop <= windowHeight - 100) {
      startCounter();
      hasStarted = true;
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
});

// secound Counter

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(
    ".stats-box h2, .stats-box-border-less h2"
  );
  const section = document.querySelector(".our-exparts-team");
  let started = false;

  if (!section || counters.length === 0) return;

  function formatNumber(value) {
    if (value === 98) return "98%";
    if (value >= 1000) return value.toLocaleString() + "+";
    return value + "+";
  }

  function animateCounter(counter) {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    let current = 0;
    const increment = Math.max(1, Math.floor(target / 120));

    function update() {
      current += increment;

      if (current < target) {
        counter.innerText = current.toLocaleString();
        requestAnimationFrame(update);
      } else {
        counter.innerText = formatNumber(target);
      }
    }

    update();
  }

  function onScroll() {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (!started && sectionTop <= windowHeight - 120) {
      counters.forEach((counter) => animateCounter(counter));
      started = true;
      window.removeEventListener("scroll", onScroll);
    }
  }

  window.addEventListener("scroll", onScroll);
});
