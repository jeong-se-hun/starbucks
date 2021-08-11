// 검색
const searchEL = document.querySelector('.search');
const searchInputEl = searchEL.querySelector('input');

searchEL.addEventListener('click', function () {

  searchInputEl.focus();

});

searchInputEl.addEventListener('focus', function () {

  searchEL.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');

})

searchInputEl.addEventListener('blur', function () {

  searchEL.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');

})

// 우측 이벤트베너 & 위로가기 버튼

const toTopEl = document.querySelector("#to-top");

toTopEl.addEventListener('click', function () {

  gsap.to(window, .8, {

    scrollTo: 0,

  })

});

const badgeEL = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  // _.throttle(함수, 시간)

  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소 , 지속시간 , 옵션)

    gsap.to(badgeEL, .6, {
      opacity: 0,
      display: 'none'
    })

    // 버튼 보이기
    gsap.to('#to-top', .4, {
      x: -130,
    })

  } else {
    //배지 보이기
    gsap.to(badgeEL, .6, {
      opacity: 1,
      display: 'block'
    })
    // 버튼 숨기기
    gsap.to(toTopEl, .4, {
      x: 100,
    })
  }

}, 300));




// 메인베너 이미지

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {

  gsap.to(fadeEl, 1, {

    opacity: 1,
    delay: (index + 1) * .7
  })

});

// notice slide vertical

new Swiper('.notice-line .swiper-container', {

  direction: 'vertical',
  autoplay: true,
  loop: true,

});

// promotion slide 

new Swiper('.promotion .swiper-container', {

  // 한번에 보여줄 슬라이드 개수
  slidesPerView: 3,
  // 슬라이드 사이여백
  spaceBetween: 10,
  // 1번 슬라이드가 가운데 보이기
  centeredSlides: true,
  // 반복재생
  loop: true,
  // auto play
  autoplay: {
    delay: 5000,
  },
  speed: 1000,

  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },

  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },

});



// promotion toggle


const innertxt = document.querySelector('.toggle-promotion .material-icons');

const promotionEl = document.querySelector('.promotion');

const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {

  isHidePromotion = !isHidePromotion;

  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add('hide');
    innertxt.textContent = ('download');


  } else {

    promotionEl.classList.remove('hide');
    innertxt.textContent = ('upload');
  }
})



// flating(랜덤하게 위아래로 움직이는 요소)

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소 , 지속시간 , 옵션)

  gsap.to(selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    });

}

floatingObject('.floating1', 1, 15);

floatingObject('.floating2', .5, 15);

floatingObject('.floating3', 1.5, 20);


// 스크스롤 이벤트 

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function (spyEl) {

  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .7, //목표 스크롤 지점
    })
    .setClassToggle(spyEl, 'show') //감시중 목표스크롤에 도달하면 클래스부여 
    .addTo(new ScrollMagic.Controller());

});


// footer부분 어워드 슬라이드

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  speed: 700,

  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  },

})

// footer 카피라이터 년도 자동삽입

const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear();