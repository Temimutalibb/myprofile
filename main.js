// This script manages all client-side interactivity for the portfolio website.
// It handles image popups, section navigation, contact detail toggles,
// Bootstrap modal triggers, and dynamic card styling on mouse movement.
import $ from "jquery";
import "./style.css";
import "./styles.scss";

const contents = ["Responsive design", "Dark mode design", "Light-mode design", "Performance optimization", "Accessibility features", "Cross-browser compatibility", "SEO best practices", "Progressive Web Apps", "Single Page Applications", "API integration", "E-commerce solutions"];

$(document).ready(function () {
  // Image modal popup
  $(document).on("click", ".thumbnail", function () {
    const fullImage = $(this).data("full");
    $("#popup-img").attr("src", fullImage);
    $("#popup").css("display", "flex");
  });

  $("#popup").on("click", function () {
    $(this).fadeOut();
  });

  // Mobile navigation
  $(".projects").css({ "font-weight": "700", color: "white" });
  $(".projectscover > div").on("click", function () {
    const target = $(this).data("target");
    $(".section").slideUp();
    $(target).slideDown();
    $(".projectscover > div").css({
      "font-weight": "500",
      color: "rgba(211, 211, 211, 0.575)",
    });
    $(this).css({ "font-weight": "700", color: "white" });

    const moveline = $(".moveline");
    const tab = $(this);
    const left = tab.position().left;
    const width = tab.outerWidth();
    moveline.css({ left: left + "px", width: width + "px" });
  });
  $("#projectsection").css({ display: "block" });

  // Contact details toggle
  $(".contact, .detailscancel ").on("click", function () {
    $(".contantsdetails").slideToggle();
  });

  // Large screen project options
  $(".option").on("click", function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
  });

  // Modal triggers
  $("#clancirclebtn, #clanseemore").on("click", function () { new bootstrap.Modal(document.getElementById("clancircle")).show(); });
  $("#bloginbtn, #blogitseemore").on("click", function () { new bootstrap.Modal(document.getElementById("blogit")).show(); });
  $("#demostorebtn, #demoseemore").on("click", function () { new bootstrap.Modal(document.getElementById("demostore")).show(); });
  $("#profilebtn, #profileseemore").on("click", function () { new bootstrap.Modal(document.getElementById("portfolio")).show(); });
  $("#wiibtn, #wiiseemore").on("click", function () { new bootstrap.Modal(document.getElementById("wiiapp")).show(); });
  $("#rokonotebtn, #rokoseemore").on("click", function () { new bootstrap.Modal(document.getElementById("rokonote")).show(); });

  // Card hover effect
  $(".card_card").each(function () {
    let $pointer = $(this).find(".pointer");

    $(this).on("mousemove", function (e) {
      let x = e.pageX - $(this).offset().left - $pointer.width() / 2;
      let y = e.pageY - $(this).offset().top - $pointer.height() / 2;
      $pointer.css({
        left: x + "px",
        top: y + "px",
        backgroundImage: `hsl(${$(this).css("--hue")}, ${$(this).css(
          "--saturation"
        )}, ${$(this).css("--lightness")})`,
      });

      let parentWidth = $(this).width();
      let parentHeight = $(this).height();
      let mouseX = (x / parentWidth) * 100;
      let mouseY = (y / parentHeight) * 100;

      let hue = parseFloat($(this).css("--hue"));
      let saturation = parseFloat($(this).css("--saturation"));
      let lightness = parseFloat($(this).css("--lightness"));

      $(this).find(".border-top").css({ display: "block" });
      $(this).find(".border-bottom").css({ display: "block" });
      $(this).find(".pointer").css({ display: "block" });

      $(this).css(
        "backgroundImage",
        `linear-gradient(45deg, hsl(${hue}, ${saturation}%, 50%), hsl(${(hue + mouseX) % 360
        }, ${saturation}%, ${lightness + (mouseY / 100) * 50}%))`
      );

      let borderColor = $(this).css("--border-color");
      if (x <= parentWidth / 2) {
        $(this).css({
          borderLeftColor: borderColor,
          borderRightColor: "transparent",
        });
      } else {
        $(this).css({
          borderLeftColor: "transparent",
          borderRightColor: borderColor,
        });
      }
    });

    $(this).on("mouseleave", function () {
      $(this).css({
        borderColor: "transparent",
        border: "transparent",
        backgroundImage: "none",
      });
      $(this).find(".border-top, .border-bottom, .pointer").css({
        display: "none",
      });
    });
  });

  $(".card_card").on("mousemove", function (e) {
    let x = e.pageX - $(this).offset().left;
    let parentWidth = $(this).width();
    $(this).find(".border-top").css({ left: (x / parentWidth) * 75 + "%" });
    $(this).find(".border-bottom").css({ left: (x / parentWidth) * 75 + "%" });
  });

  // Image animation for .section-1
  const images = [
    "/profilebackground.jpg",
    "/img/demostore.jpeg",
    "/img/myprofile.png",
    "/img/cleaning.jpeg",
  ];

});


$(document).ready(function () {
  const $images = $("#image-container img");
  let index = 0;

  // Show the first image
  $images.eq(index).css({ opacity: 1, zIndex: 2 });

  function showNextImage() {
    const $current = $images.eq(index);
    index = (index + 1) % $images.length;
    const $next = $images.eq(index);

    // Bring next image to front
    $next.css({
      zIndex: 3,
      opacity: 0,
      transform: "scale(0.7) translateY(20px)",
      borderRadius: "80px",
      filter: "blur(5px)"
    });

    // Animate current image out
    $current.animate(
      { opacity: 0 },
      {
        duration: 2000,
        step: function (now) {
          let scale = 1 - (1 - now) * 0.3;
          let blur = (1 - now) * 5;
          let radius = 12 + (1 - now) * 70;
          $(this).css({
            transform: `scale(${scale})`,
            borderRadius: `${radius}px`,
            filter: `blur(${blur}px)`
          });
        },
        complete: function () {
          $(this).css({ zIndex: 1 });
        }
      }
    );

    // Animate next image in
    $next.animate(
      { opacity: 1 },
      {
        duration: 2000,
        step: function (now) {
          let scale = 0.7 + now * 0.3;
          let translate = 20 - now * 20;
          let radius = 80 - now * 68;
          let blur = 5 - now * 5;
          $(this).css({
            transform: `scale(${scale}) translateY(${translate}px)`,
            borderRadius: `${radius}px`,
            filter: `blur(${blur}px)`
          });
        },
        complete: function () {
          $(this).css({ zIndex: 2 });
          setTimeout(showNextImage, 1500);
        }
      }
    );
  }

  // Start loop
  setTimeout(showNextImage, 1500);
});



$(document).ready(function () {
  const contents = [
    "Responsive design",
    "Dark mode design",
    "Light-mode design",
    "Performance optimization",
    "Accessibility features",
    "Cross-browser compatibility",
    "SEO best practices",
    "Progressive Web Apps",
    "Single Page Applications",
    "API integration",
    "E-commerce solutions"
  ];

  const $stack = $("#content-stack");
  const maxVisible = 6; // how many items fill the box
  let index = 0;

  function addNextItem() {
    const text = contents[index];
    index = (index + 1) % contents.length;

    // create new item
    const $item = $("<div></div>")
      .addClass("stack-item")
      .text(text)
      .appendTo($stack);

    // animate appearance
    setTimeout(() => $item.addClass("show"), 50);

    // remove topmost when full
    if ($stack.children().length > maxVisible) {
      const $first = $stack.children().first();
      $first.css({ opacity: 0, transform: "translateY(-30px)" });
      setTimeout(() => $first.remove(), 600);
    }

    // keep looping
    setTimeout(addNextItem, 2000);
  }

  addNextItem();
});


$(document).ready(function () {
  let currentIndex = 0;
  const images = $('.image-box img');
  const totalImages = images.length;

  function slideImage() {
    const current = $(images[currentIndex]);
    const next = $(images[(currentIndex + 1) % totalImages]);

    current.css('left', '100%').animate({ left: '0%' }, 1000);

    // After 3 seconds, move it out to the right
    setTimeout(function () {
      current.animate({ left: '-100%' }, 1000, function () {
        $(this).css('left', '100%');
      });

      currentIndex = (currentIndex + 1) % totalImages;
      slideImage();
    }, 3000);
  }

  slideImage();
});