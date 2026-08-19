/* =========================
   MENU MOBILE
========================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});


/* FECHAR MENU AO CLICAR */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        menuButton.textContent = "☰";
    });
});


/* =========================
   REVEAL AO SCROLL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   CONTADOR
========================= */

const counters = document.querySelectorAll("[data-number]");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target =
                Number(counter.dataset.number);

            let current = 0;

            const duration = 1200;

            const start = performance.now();

            function update(time) {

                const progress =
                    Math.min(
                        (time - start) / duration,
                        1
                    );

                // easeOut
                const eased =
                    1 - Math.pow(1 - progress, 3);

                current =
                    Math.floor(target * eased);

                counter.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            }

            requestAnimationFrame(update);

            counterObserver.unobserve(counter);
        });

    },
    {
        threshold: 0.7
    }
);


counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* =========================
   NAVBAR AO ROLAR
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,5,8,.9)";

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.3)";

    } else {

        navbar.style.background =
            "rgba(8,8,12,.72)";

        navbar.style.boxShadow = "none";
    }

});


/* =========================
   PARALLAX DO HERO
========================= */

const glow1 = document.querySelector(".glow-1");
const glow2 = document.querySelector(".glow-2");

window.addEventListener("mousemove", (event) => {

    const x =
        (event.clientX / window.innerWidth - 0.5) * 30;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 30;

    glow1.style.transform =
        `translate(${x}px, ${y}px)`;

    glow2.style.transform =
        `translate(${-x}px, ${-y}px)`;

});