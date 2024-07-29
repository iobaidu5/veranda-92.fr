$(document).ready(function () {
  $("li.active").removeClass("active");
  $('a[href="' + location.pathname + '"]')
    .closest("li")
    .addClass("active");
});



const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav?.offsetHeight + 150) {
    nav.classList.add("navbar-active");
   nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}

function addTitleToLinks() {
  var links = document.querySelectorAll('a');

  links.forEach(function (link) {
    if (!link.hasAttribute('title')) {
      var linkText = link.textContent;
      link.setAttribute('title', linkText);
    }
  });
}

addTitleToLinks();


$(document).ready(function () {
  $('.bxslider').bxSlider({
    minSlides: 2,
    maxSlides: 2,
    slideWidth: 500,
    moveSlides: 1,
    infiniteLoop: true,
    hideControlOnEnd: true,
    auto: false
  });
})

$('#carousel1').owlCarousel({
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  loop: true,
  margin: 20,
  nav: true,
  navText: ["", ""],
  items: 2,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
})

$('#carousel2').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})


$(document).ready(function () {
  $('.portfolio').each(function () {
    $(this).addClass('show');
  });

  $('#filters .filter').on('click', function () {
    var filterValue = $(this).data('filter');
    $('#filters .filter').removeClass('active');
    $(this).addClass('active');

    if (filterValue === '*') {
      $('.portfolio').each(function () {
        $(this).hide("slow").removeClass('show').delay(500).queue(function (next) {
          $(this).show("slow").addClass('show');
          next();
        });
      });
    } else {
      $('.portfolio').each(function () {
        $(this).hide("slow").removeClass('show');
      });
      $(filterValue).each(function () {
        $(this).hide("slow").removeClass('show').delay(500).queue(function (next) {
          $(this).show("slow").addClass('show');
          next();
        });
      });
    }
  });
});





$(document).ready(function () {
  $(".carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    arrow: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});



$('.counter-count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {

    //chnage count up speed here
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});