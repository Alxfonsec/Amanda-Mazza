const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  speed: 2000,
  loopedSlidesLimit: false,
  
  
 autoplay: {
   delay: 2000,
 },


 breakpoints: {
  480: {
    slidesPerView:1
  },
  
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // when window width is >= 480px
 1200: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  // when window width is >= 640px
  1600: {
    slidesPerView: 4,
    spaceBetween: 20
  }
},


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },


});