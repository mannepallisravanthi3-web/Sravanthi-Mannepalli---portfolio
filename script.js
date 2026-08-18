/* =========================================
   SCROLL ANIMATION
========================================= */

const sections =
    document.querySelectorAll("section");


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(

                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }

            );

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(

    (section) => {

        observer.observe(section);

    }

);


/* =========================================
   NAVIGATION CLICK ANIMATION
========================================= */

const navLinks =
    document.querySelectorAll("nav a");


navLinks.forEach(

    (link) => {

        link.addEventListener(
            "click",

            function () {

                navLinks.forEach(
                    (item) =>
                        item.classList.remove(
                            "active"
                        )
                );

                this.classList.add(
                    "active"
                );

            }

        );

    }

);


/* =========================================
   BUTTON CLICK EFFECT
========================================= */

const buttons =
    document.querySelectorAll(
        ".main-button, .outline-button"
    );


buttons.forEach(

    (button) => {

        button.addEventListener(
            "click",

            function () {

                this.style.transform =
                    "scale(0.95)";

                setTimeout(

                    () => {

                        this.style.transform =
                            "";

                    },

                    150

                );

            }

        );

    }

);


/* =========================================
   WELCOME MESSAGE IN CONSOLE
========================================= */

console.log(
    "Welcome to Sravanthi's Portfolio 🌸"
);