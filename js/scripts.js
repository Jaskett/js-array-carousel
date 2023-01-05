const items = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const title = [
    'Spider Man',
    'Rachet & Clank',
    'Fortnite',
    'Stray',
    'Avengers'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const coverContainer = document.querySelector('.cover');
const thumbContainer = document.querySelector('.thumbnails');

let coverItem = '';
let thumbItem = '';

for(let i = 0; i < items.length; i++) {
    coverItem += `
        <div class="cover-item ">
        <div class="cover-img">
        <img src="${items[i]}" alt="${title[i]}">
        </div>
    
        <div class="text">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>
        </div>
        </div>
    `

    thumbItem += `
        <div class="thumb-item ">
        <img src="${items[i]}" alt="">
        </div>
    `
}

coverContainer.innerHTML = coverItem;
document.getElementsByClassName('cover-item')[0].classList.add('active');
thumbContainer.innerHTML = thumbItem;
document.getElementsByClassName('thumb-item')[0].classList.add('active');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let activeCounter = 0;

nextBtn.addEventListener('click',
    function() {
        if(activeCounter < items.length - 1) {
            ++activeCounter;
            console.log(activeCounter);
        } else {
            activeCounter = 0;
        }

        document.querySelector('.cover-item.active').classList.remove('active');
        document.getElementsByClassName('cover-item')[activeCounter].classList.add('active');

        document.querySelector('.thumb-item.active').classList.remove('active');
        document.getElementsByClassName('thumb-item')[activeCounter].classList.add('active');
    }
);

prevBtn.addEventListener('click',
    function() {
        if(activeCounter > 0) {
            --activeCounter;
            console.log(activeCounter);
        } else {
            activeCounter = items.length - 1;
        }
        
        document.querySelector('.cover-item.active').classList.remove('active');
        document.getElementsByClassName('cover-item')[activeCounter].classList.add('active');

        document.querySelector('.thumb-item.active').classList.remove('active');
        document.getElementsByClassName('thumb-item')[activeCounter].classList.add('active');
    }
);