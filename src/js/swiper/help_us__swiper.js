const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
    breakpoints: {
        0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0
        },

        768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 0
        },

        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 0
        }
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    }, keyboard: true,
  });