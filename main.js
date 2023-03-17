
$('.CAROUSEL').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });


  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', function(){
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
  })