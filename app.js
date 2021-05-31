const image = document.getElementById('image');
const cursor_circle = document.getElementById('cursor-circle');
const hamburger_button = document.querySelector('.hamburger');
let tl = gsap.timeline({defaults: {duration: 1, easeIn: Back.easeOut.config(2)}})
let state = true;

tl.paused(true);
tl.to('.nav-links', {transform: 'translateX(0%)'})
tl.to('.nav-li', {opacity: 1, y: '50px', stagger: 0.1}, "-=1")

var myAnimation = new hoverEffect({
    parent: document.querySelector('.sculpture'),
    intensity: 0.4,
    image1: 'assets/hero1.jpg',
    image2: 'assets/hero2.jpg',
    displacementImage: 'assets/dis.jpg'
});

document.addEventListener('mousemove',(e) => {
    let xPos = e.clientX * .1;
    let yPos = e.clientY * .1;

    image.style.transform = `translate(${-xPos}px,${-yPos}px)`;
    cursor_circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
})

const navigationBar = () => {
    state = !state;
    if(!state) {
        tl.play();
    }else {
        tl.reverse(.7);
    }
    hamburger_button.classList.toggle('active');
}

hamburger_button.addEventListener('click',navigationBar);