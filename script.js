let ans = [];

function opening() {
    let tl = new TimelineMax();
    tl.to(".star", 5, { rotation: 360 });
    tl.add(TweenMax.to(".square", 5, { rotation: -360 }), 0);
    tl.add(
        TweenMax.to(".circle", 2.5, {
            scale: 1.1,
            onComplete: () => {
                TweenMax.to(".circle", 2.5, { scale: 1 });
            }
        }),
        0
    );

    tl.to(".square", 1.6, { scale: 7 });
    tl.to(".circle", 1.6, { scale: 7 }, "-=1.2");
    tl.to(
        ".star",
        0.6,
        {
            scale: 7,
            onComplete: () => {
                let el = document.querySelector(".opening");
                el.parentNode.removeChild(el);
                screenQ1();
            }
        },
        "-=1.2"
    );
}

function screenQ1() {
    // btn click event
    document
        .querySelector(".screenQ1 .q-section__options")
        .addEventListener("click", () => {
            if (event.target.tagName !== "LI") return;
            let value = event.target.dataset.value;
            ans.push(value);

            // remove items
            let square = document.querySelector(
                ".screenQ1 .animate-section__square"
            );
            let triangle = document.querySelector(
                ".screenQ1 .animate-section__triangle"
            );
            let circle = document.querySelector(
                ".screenQ1 .animate-section__circle"
            );
            square.parentNode.removeChild(square);
            triangle.parentNode.removeChild(triangle);
            circle.parentNode.removeChild(circle);

            TweenMax.to(".screenQ1 .animate-section", 1, {
                left: "0%",
                onComplete: () => {
                    let el = document.querySelector(".screenQ1");
                    el.parentNode.removeChild(el);
                    screenQ2();
                }
            });
        });

    document.querySelector(".screenQ1").style.backgroundColor = "#1469ff";

    let tl = new TimelineMax();
    tl.to(".text-block", 0.5, { opacity: 0 });
    tl.from(".q-section", 0.5, { opacity: 0 });

    tl.to(".screenQ1 .animate-section", 1, { left: "60%" });
    tl.add(
        TweenMax.to(".screenQ1 .animate-section__square", 2, {
            top: "100px",
            ease: Back.easeOut.config(1.7),
            onComplete: () => {
                TweenMax.to(".screenQ1 .animate-section__square", 2, {
                    rotation: 360,
                    delay: 0.5
                });
            }
        }),
        2
    );
    tl.add(
        TweenMax.to(".screenQ1 .animate-section__triangle", 2, {
            top: "300px",
            ease: Back.easeOut.config(1.7),
            onComplete: () => {
                TweenMax.to(".screenQ1 .animate-section__triangle", 2, {
                    rotation: 360,
                    delay: 0.5
                });
            }
        }),
        2
    );
    tl.add(
        TweenMax.to(".screenQ1 .animate-section__circle", 2, {
            bottom: "-100px",
            ease: Back.easeOut.config(1.7),
            onComplete: () => {
                TweenMax.to(".screenQ1 .animate-section__circle", 2, {
                    x: 20,
                    y: 20,
                    delay: 0.5
                });
            }
        }),
        2
    );
}

function screenQ2() {
    // btn click event
    document
        .querySelector(".screenQ2 .q-section__options")
        .addEventListener("click", () => {
            if (event.target.tagName !== "LI") return;
            let value = event.target.dataset.value;
            ans.push(value);

            // remove items
            let square = document.querySelector(
                ".screenQ2 .animate-section__square"
            );
            let triangle = document.querySelector(
                ".screenQ2 .animate-section__triangle"
            );
            let circle = document.querySelector(
                ".screenQ2 .animate-section__circle"
            );
            square.parentNode.removeChild(square);
            triangle.parentNode.removeChild(triangle);
            circle.parentNode.removeChild(circle);

            TweenMax.to(".screenQ2 .animate-section", 1, {
                right: "0",
                onComplete: () => {
                    let el = document.querySelector(".screenQ2");
                    el.parentNode.removeChild(el);
                    screenCalculating();
                }
            });
        });

    let tl = new TimelineMax();
    tl.to(".screenQ2 .q-section", 1, { opacity: 1 });
    tl.from(".screenQ2 .animate-section", 1, { x: "-100%" });
    tl.add(
        TweenMax.to(".screenQ2 .animate-section__square", 2, {
            top: "200px",
            ease: Back.easeOut.config(1.7),
            onComplete: () => {
                TweenMax.to(".screenQ2 .animate-section__square", 2, {
                    rotation: 360,
                    delay: 0.5
                });
            }
        }),
        2
    );
    tl.add(
        TweenMax.to(".screenQ2 .animate-section__triangle", 2, {
            top: "-50px",
            ease: Back.easeOut.config(1.7),
            onComplete: () => {
                TweenMax.to(".screenQ2 .animate-section__triangle", 2, {
                    rotation: 360,
                    delay: 0.5
                });
            }
        }),
        2
    );
    tl.add(
        TweenMax.to(".screenQ2 .animate-section__circle", 2, {
            bottom: "200px",
            ease: Back.easeOut.config(1.7),
            onComplete: () => {
                TweenMax.to(".screenQ2 .animate-section__circle", 2, {
                    x: 20,
                    y: 20,
                    delay: 0.5
                });
            }
        }),
        2
    );
}

function getRandom(lower, upper) {
    return Math.random() * (upper - lower) + lower;
}

function screenCalculating() {
    document.body.style.overflowY = 'auto';
    document.querySelector(".calculating").classList.remove("hide");
    TweenMax.to(".calculating .text-block", 1, { opacity: 1 });

    const circleColor = ['#000', '#fff', '#0027C8'];
    let tl = new TimelineMax();
    for (let i = 0; i < 20; i++) {
        // append circle
        let circle = document.createElement("DIV");
        circle.classList.add("small-circle");
        let size = getRandom(100, 300);
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.backgroundColor = circleColor[i % 3];
        circle.style.top = `${getRandom(0, 50)}vh`;
        circle.style.left = `${getRandom(-300, -400)}px`;
        document.querySelector(".calculating").appendChild(circle);

        tl.add(TweenMax.to(circle, 1, { x: `${getRandom(50, 200)}vw`, y: `${getRandom(200, 300)}vh` }), 0);
    }
    tl.pause();

    window.addEventListener('scroll', () => {
        let docHeight = document.body.scrollHeight;
        let winHeight = window.innerHeight;
        let scrollTop = window.pageYOffset;
        let progress = scrollTop / (docHeight - winHeight);
        tl.progress(progress);
    });
}

opening();