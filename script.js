```javascript
/* =========================
   ACADEMIX THEME
========================= */

const themeButton =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("academix-theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    if (themeButton) {
        themeButton.textContent = "☀";
    }

}


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "light"
            );


            const isLight =
                document.body.classList.contains(
                    "light"
                );


            localStorage.setItem(
                "academix-theme",
                isLight
                    ? "light"
                    : "dark"
            );


            themeButton.textContent =
                isLight
                    ? "☀"
                    : "◐";

        }
    );

}



/* =========================
   SCROLL REVEAL
========================= */

const revealItems =
    document.querySelectorAll(
        ".feature-card, .class-card, .about-box"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (entry.isIntersecting) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealItems.forEach(
    (item) => {

        item.style.opacity = "0";

        item.style.transform =
            "translateY(20px)";

        item.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        observer.observe(item);

    }
);
```
