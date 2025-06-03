const navbar = document.querySelector('header');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('#hlink')
const bMenu = document.querySelector('.bx-menu');

window.onscroll = () => {
    if(window.scrollY > 100) {
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-gray');
    } else {
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-gray');
    }
}

const displayMenu = () => {
    menu.classList.toggle("hidden");
    bMenu.classList.toggle('bx-x');
}

hamburger.addEventListener('click', displayMenu);

links.forEach(link => {
    link.addEventListener('click', displayMenu);
})


// Testimonials

const userTexts = document.querySelectorAll('.user-text');
const userPics = document.querySelectorAll('.user-pic');

const showReview = () => {
    for(userPic of userPics) {
        userPic.classList.remove('active-pic');
    }
    for(userText of userTexts) {
        userText.classList.remove('active-text')
    }

    let i = Array.from(userPics).indexOf(event.target);

    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
}


const toggleBtn = document.getElementById('toggleBtn');

const card_1_front = document.querySelector('#card_1_front');
const card_1_back = document.querySelector('#card_1_back');

const card_2_front = document.querySelector('#card_2_front');
const card_2_back = document.querySelector('#card_2_back');

const card_3_front = document.querySelector('#card_3_front');
const card_3_back = document.querySelector('#card_3_back');

toggleBtn.addEventListener('change', () => {
    card_1_front.classList.toggle('-rotate-y-180');
    card_1_back.classList.toggle('rotate-y-180');
    card_2_front.classList.toggle('-rotate-y-180');
    card_2_back.classList.toggle('rotate-y-180');
    card_3_front.classList.toggle('-rotate-y-180');
    card_3_back.classList.toggle('rotate-y-180');
    
})
