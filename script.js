const $next = document.querySelector('.next');
const $perv = document.querySelector('.prev');

$next.addEventListener(
    'click',
    ( ) => {
     const items =document.querySelectorAll('.T');
     document.querySelector('.t-shirt').
     appendChild(items[0]);
    },
);

$perv.addEventListener(
    'click',
    ( ) => {
     const items =document.querySelectorAll('.T');
     document.querySelector('.t-shirt').
     prepend(items[items.length - 1])
    },
);


const $nextp = document.querySelector('.nextp');
const $pervp = document.querySelector('.prevp');

$nextp.addEventListener(
    'click',
    ( ) => {
     const itemsp =document.querySelectorAll('.P');
     document.querySelector('.pantalon').
     appendChild(itemsp[0]);
    },
);

$pervp.addEventListener(
    'click',
    ( ) => {
     const itemsp =document.querySelectorAll('.P');
     document.querySelector('.pantalon').
     prepend(itemsp[itemsp.length - 1])
    },
);


const $nexts = document.querySelector('.nexts');
const $pervs = document.querySelector('.prevs');

$nexts.addEventListener(
    'click',
    ( ) => {
     const itemss =document.querySelectorAll('.S');
     document.querySelector('.shoes').
     appendChild(itemss[0]);
    },
);

$pervs.addEventListener(
    'click',
    ( ) => {
     const itemss =document.querySelectorAll('.S');
     document.querySelector('.shoes').
     prepend(itemss[itemss.length - 1])
    },
);


const $nexta = document.querySelector('.nexta');
const $perva = document.querySelector('.preva');

$nexta.addEventListener(
    'click',
    ( ) => {
     const itemsa = document.querySelectorAll('.A');
     document.querySelector('.assecoir').
     appendChild(itemsa[0]);
    },
);

$perva.addEventListener(
    'click',
    ( ) => {
     const itemsa =document.querySelectorAll('.A');
     document.querySelector('.assecoir').
     prepend(itemsa[itemsa.length - 1])
    },
);