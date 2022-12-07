'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// scroll navbar
window.addEventListener('scroll', function (e) {
  window.scrollY > 0
    ? $('.navigation').classList.add('sticky')
    : $('.navigation').classList.remove('sticky');

  // navLink active
  $$('section').forEach(function (section, index) {
    // console.log(index, value.getBoundingClientRect().top);
    if (
      section.getBoundingClientRect().top <
      $('.navigation').getBoundingClientRect().height
    ) {
      $$('.nav__link')[index].classList.add('active');

      for (let i = 0; i < $$('.nav__link').length; ++i) {
        if (index !== i) $$('.nav__link')[i].classList.remove('active');
      }
    }
  });

  console.log(document.documentElement.clientHeight, this.window.innerHeight);

  $$('section')[0].getBoundingClientRect().top >
  document.documentElement.clientHeight / 2
    ? $$('.nav__link')[0].classList.remove('active')
    : null;
});

// const sectionObsever = new IntersectionObserver(
//   (entries, obseve) => {
//     const [entry] = entries;
//     entry.isIntersecting
//       ? $$('.nav__link')[`${entry.target.getAttribute('key')}`].classList.add(
//           'active'
//         )
//       : $$('.nav__link')[
//           `${entry.target.getAttribute('key')}`
//         ].classList.remove('active');
//   },
//   {
//     root: null,
//     threshold: 0.3,
//   }
// );
// $$('section').forEach((section, index) => {
//   sectionObsever.observe(section);
// });

$('.submit-form--btn').addEventListener('click', function (e) {
  e.preventDefault();
});

// click navbar in mobile and tablet
$('.nav--btn').addEventListener('click', function (e) {
  $('.navigation--mobile .navbar__list').classList.toggle('display');
});

$$('.navigation--mobile .navbar__list').forEach(function (el) {
  el.addEventListener('click', function () {
    $('.navigation--mobile .navbar__list').classList.remove('display');
  });
});

// category handle event
let curIndexImg, prevIndexImg, nextIndexImg;

$$('.category__item').forEach(function (item, index) {
  item.addEventListener('click', function (e) {
    $('.overlay').classList.remove('hide');

    curIndexImg = index;

    if (curIndexImg === 0) {
      prevIndexImg = $$('.category__detail__content__img').length - 1;
      nextIndexImg = curIndexImg + 1;
    } else if (
      curIndexImg ===
      $$('.category__detail__content__img').length - 1
    ) {
      prevIndexImg = curIndexImg - 1;
      nextIndexImg = 0;
    } else {
      prevIndexImg = curIndexImg - 1;
      nextIndexImg = curIndexImg + 1;
    }

    for (let i = 0; i < $$('.category__detail__content__img').length; ++i) {
      $$('.category__detail__content__img')[i].classList.remove('display');
      $$('.category__detail__content__img')[i].classList.remove('next-slide');
      $$('.category__detail__content__img')[i].classList.remove('prev-slide');
    }

    $$('.category__detail__content__img')[curIndexImg].classList.add('display');
  });
});

$('.prev-category__detail').addEventListener('click', function (e) {
  for (let i = 0; i < $$('.category__detail__content__img').length; ++i) {
    $$('.category__detail__content__img')[i].classList.remove('display');
    $$('.category__detail__content__img')[i].classList.remove('next-slide');
    $$('.category__detail__content__img')[i].classList.remove('prev-slide');
  }

  $$('.category__detail__content__img')[prevIndexImg].classList.add(
    'prev-slide'
  );

  nextIndexImg = curIndexImg;
  curIndexImg = prevIndexImg;
  curIndexImg === 0
    ? (prevIndexImg = $$('.category__detail__content__img').length - 1)
    : --prevIndexImg;
});

$('.next-category__detail').addEventListener('click', function (e) {
  for (let i = 0; i < $$('.category__detail__content__img').length; ++i) {
    $$('.category__detail__content__img')[i].classList.remove('display');
    $$('.category__detail__content__img')[i].classList.remove('next-slide');
    $$('.category__detail__content__img')[i].classList.remove('prev-slide');
  }

  $$('.category__detail__content__img')[nextIndexImg].classList.add(
    'next-slide'
  );

  prevIndexImg = curIndexImg;
  curIndexImg = nextIndexImg;
  curIndexImg === $$('.category__detail__content__img').length - 1
    ? (nextIndexImg = 0)
    : ++nextIndexImg;
});

$('.category__detail').addEventListener('click', function (e) {
  e.stopPropagation();
});

// hidden overlay
$('.overlay').addEventListener('click', function (e) {
  $('.overlay').classList.add('hide');
});

$('.close-category__detail').addEventListener('click', function (e) {
  $('.overlay').classList.add('hide');
});
