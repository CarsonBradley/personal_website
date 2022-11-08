// const menu = document.querySelector('#mobile-menu');
// const menuLinks = document.querySelector('.navbar__menu');

// menu.addEventListener('click', function() {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// });

// Jquery version of code above
$("#mobile-menu").on("click", function() {
    $(this).toggleClass("is-active");
    $(".navbar__menu").toggleClass("active");
});